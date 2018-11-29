import React, { Component } from 'react';
import { sample_data } from './sample_data';

import './App.css';
const convertToComponentSpecific = (json) => {
  let finaldata = [],
    idCount = 1;
  Object.keys(json).every(item => {
    if (item.startsWith("header") || item.startsWith("trailer")) {
      return true;
    }
    let temp = {}
    temp.id = idCount;
    temp.checked = false;
    temp.master = item;
    temp.value =  json[item];
    temp.level = "one";
    temp.child = []
    idCount+=1;
    let temp1 = [],
      temp2 = [];

    if(typeof json[item] != 'string'){

      Object.keys(json[item]).forEach(ele => {
        let childtemp = {}
        childtemp.id = idCount;
        childtemp.checked = false;
        childtemp.master = ele;
        childtemp.value =  json[item][ele];
        childtemp.level = "two"
        childtemp.parentRef = temp
        temp.child.push(childtemp);
        temp1.push(childtemp);
        
        idCount+=1;
        if(Array.isArray(json[item][ele])){
          json[item][ele].forEach((obj,index)=>{
            let grandChildTemp = {}
            grandChildTemp.id = idCount;
            grandChildTemp.checked = false;
            grandChildTemp.master = childtemp.master + '_' + index;
            grandChildTemp.value =  obj;
            grandChildTemp.level = "two"
            grandChildTemp.parentRef = temp
            temp.child.push(grandChildTemp);
            temp2.push(grandChildTemp);
            idCount+=1;
          })
        }
      })
    }
    finaldata = finaldata.concat(temp);
    finaldata = finaldata.concat(temp1);
    finaldata = finaldata.concat(temp2);
    return true;
  })
  return finaldata
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: convertToComponentSpecific(sample_data),
      header: {
        col1: false,
        col2: 'Input name',
        col3: 'Position in input file',
        col4: 'Output name'
      },
      expandableRows: []
    }
    
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.handleChkChange = this.handleChkChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.onCellChange = this.onCellChange.bind(this);
  }
  onCellChange(id, key) {
    let {} = this.state;
  }
  handleRowClick(id){
    console.log(id)
    let { expandableRows } = this.state, 
      index = expandableRows.indexOf(id);

    index === -1 ? expandableRows.push(id) : expandableRows.splice(index, 1)

    this.setState({expandableRows})
  }

  handleChkChange(val) {
    let {header,data} = this.state;

    if(val == "all") {
      header.col1 = !header.col1;

      data.forEach(obj => {
        obj.checked = header.col1
      })

    } else {
      let allCheck = true,
        clickedobjIndex = undefined;

      data.every((obj,index)=> {
        if(obj.id == val){
          clickedobjIndex = index
          return false
        }
        return true
      })

      data[clickedobjIndex].checked = !data[clickedobjIndex].checked
      if(data[clickedobjIndex].child){
        data[clickedobjIndex].child.forEach(obj => {
          obj.checked = data[clickedobjIndex].checked
        })
      }

      data.every(obj => {
        if(!obj.checked){
          allCheck = false;
        }
        return obj.checked
      })
      header.col1 = allCheck;
    }
    this.setState({header,data})
  }

  renderTableHeader(){
    let {header} = this.state;

    let retrunValue = []
    retrunValue.push(<th key="col1" >
    <input
      type="checkbox" 
      className="table-chk"
      checked={header.col1} 
      onChange={()=>{this.handleChkChange('all')}} 
    />
    </th>)
    retrunValue.push(<th key="col2">{header.col2}</th>)
    retrunValue.push(<th key="col3">{header.col3}</th>)
    retrunValue.push(<th key="col4">{header.col4}</th>)

    return retrunValue;
  }
  renderTableBody(){
    let retrunValue = [];
    let { data, expandableRows } = this.state,
      self = this,
      visbleRows = data.filter(item => {
        return (
          (item.level == "one") || 
          (item.level == "two" && expandableRows.indexOf(item.parentRef.id) !== -1))
      })

    visbleRows.forEach(item => {
      let firstLeveltext = typeof item.value == 'string' ? item.value : '';

      //create a unique key to avoid react unique props error
      let uniqueKey = item.master
      if(item.parentRef){
        uniqueKey += '--' + item.parentRef.id
        if(item.grandParentRef){
          uniqueKey += '--' + item.grandParentRef.id
        }
      }

      //child row should have grey background + no dropdown functionality + no chevron
      let classTD = 'childClassTD',
        clickFn = () => {},
        chevron = ''
      
      //parent row should not have grey background + have dropdown functionality + have chevron
      if(item.level == "one"){
        classTD = ''
        clickFn = () => self.handleRowClick(item.id)
        chevron = (expandableRows.indexOf(item.id) !== -1) ?
          (<i class="fa fa-fw fa-chevron-down"  onClick={clickFn}></i>):
          (<i class="fa fa-fw fa-chevron-right"  onClick={clickFn}></i>);
      }
      retrunValue.push(
        <tr key={uniqueKey}>
          <td className={classTD}>
            <input
              type="checkbox" 
              className="table-chk"
              checked={item.checked}
              onChange={()=>{this.handleChkChange(item.id)}} 
            />
          </td>
          <td className={classTD}>
            {chevron}<input type='text' value={item.master} onChange={() => self.onCellChange(item.id, 'master')}/>
          </td>
          <td className={classTD}>{firstLeveltext?<input type='text' value={firstLeveltext} onChange={() => self.onCellChange(item.id, 'value')}/>:''}</td>
          <td className={classTD}></td>
        </tr>
      )
    })
    console.log(retrunValue)
    return retrunValue
  }
  render() {
    return (
      <div className="App">
      <table id="huTable">
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableBody()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
