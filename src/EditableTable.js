import React from "react";
import ReactTable from "react-table";

class EditableTable extends React.Component {
    constructor() {
        super();
        let data = [
            {
                productName: 'Milk',
                qty: '10',
                unit: 'lit',
                percent: '20',
                cost: '400',
                costPercent: '35'
            },
            {
                productName: 'Walnut',
                qty: '1',
                unit: 'kg',
                percent: '20',
                cost: '1200',
                costPercent: '34'
            }
        ]
        this.addRowConfigToData(data);
        this.state = { data };

        this.editRow = this.editRow.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
        this.addRow = this.addRow.bind(this)
        this.renderEditable = this.renderEditable.bind(this)
    }

    addRowConfigToData(data) {
        data.forEach((row) => {
            row['config'] = { editable: false }
        })
    }
    editRow(row) {
        console.log(row)
    }

    deleteRow(row) {
        console.log(row)
    }
    addRow() {
        console.log('uouo')
        let { data } = this.state;
        data.push({
            productName: 'ds',
            qty: '',
            unit: '',
            percent: '',
            cost: '',
            costPercent: '',
            config: { editable: true }
        })
        console.log(data)
        this.setState({ data })
    }
    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }
    render() {

        let self = this;
        const { data } = this.state,
            allColumnStyle = { textAlign: 'center' };
        console.log('rendercalled', data)
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Product",
                            accessor: "productName",
                            style: allColumnStyle,
                            Cell: this.renderEditable
                        },
                        {
                            Header: "Quantity",
                            id: "qty",
                            style: allColumnStyle,
                            accessor: d => d.qty
                        },
                        {
                            Header: "Unit",
                            accessor: "unit",
                            style: allColumnStyle
                        },
                        {
                            Header: "%",
                            accessor: "percent",
                            style: allColumnStyle
                        },
                        {
                            Header: "Cost",
                            accessor: "cost",
                            style: allColumnStyle
                        },
                        {
                            Header: "Cost%",
                            accessor: "costPercent",
                            style: allColumnStyle
                        },
                        {
                            Header: "",
                            style: allColumnStyle,
                            Cell: row => {
                                return (
                                    <div>
                                        <button onClick={() => { self.editRow(row) }}>Edit</button>
                                        <button onClick={() => { self.deleteRow(row) }}>Delete</button>
                                    </div>)
                            }
                        }
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    showPagination={false}
                    showPaginationTop={false}
                    showPaginationBottom={false}
                />
                <br />
                <button onClick={() => { self.addRow() }}>Add Row</button>
            </div>
        );
    }
}
export default EditableTable;
