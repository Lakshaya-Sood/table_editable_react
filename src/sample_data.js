export const sample_data ={
    "delimiter": "*",
    "header_0": {
      "before": "Hippa"
    },
    "isa": {
      "0": "InterchangeControlHeader2",
      "4": "SecurityInformation",
      "5": "InterchangeIdQualifier",
      "7": "InterchangeIdQualifier",
      "10": "RepetitionSeparator",
      "11": "InterchangeTime",
      "12": "InterchangeControlVersionNumber",
      "13": "InterchangeControlNumber",
      "15": "UsageIndicator",
      "16": "ComponentElementSeparator"
    },
    "header_1": {
      "before": "Group"
    },
    "gs": {
      "0": "FunctionalGroupHeader",
      "1": "FunctionalIdentifierCode",
      "2": "ApplicationSenderCode",
      "3": "ApplicationReceivercode",
      "4": "Date",
      "5": "Time",
      "6": "GroupControlNumber",
      "7": "ResponsibleAgencyCode",
      "8": "VersionReleaseNo"
    },
    "header_2": {
      "before": "Transaction"
    },
    "st": {
      "0": "TransactionSetHeader",
      "1": "TransactionSetIdentifier",
      "2": "TransactionSetControlNumber",
      "3": "ImplementationConventionReference"
    },
    "header_3": {
      "before": "Segment"
    },
    "bht": {
      "0": "BeginningOfHierarchicalSegment",
      "1": "HierarchicalStructureCode",
      "2": "TransactionSetPurposeCode",
      "3": "ReferenceIdentification",
      "4": "Date",
      "5": "InterchangeIdQualifier",
      "6": "TransactionTypeCode"
    },
    "nm1": {
      "1": "EntityIdentifierCode",
      "2": "EntityTypeQualifier",
      "4": "NameFirst",
      "5": "NameMiddle",
      "6": "NamePrefix",
      "7": "NameSuffix",
      "8": "IdentificationCodeQualifier",
      "9": "IdentificationCode",
      "0": [
        "ReceiverName",
        "BillingProviderName",
        "SubscriberName",
        "PayerName",
        "ReferringProviderName",
        "RenderingProviderName",
        "ServiceFacilityLocation",
        "OtherSubscriberName",
        "OtherPayerName"
      ],
      "3": [
        "NameLast",
        "OrganizationName"
      ]
    },
    "n3": {
      "0": "SubscriberAddress",
      "1": "AddressLine1",
      "2": "AddressLine2"
    },
    "n4": {
      "0": "SubscriberCityStateZipCode",
      "1": "CityName",
      "2": "StateOrProvinceCode",
      "3": "PostalCode"
    },
    "hl": {
      "2": "HierarchicalParentIdNumber",
      "3": "HierarchicalLevelCode",
      "4": "HierarchicalChildCode",
      "0": [
        "BillingHierarchicalLevel",
        "SubscriberHierarchicalLevel",
        "PatientHierarchicalLevel"
      ],
      "1": [
        "HierarchicalIdNumber",
        "SubscriberIDNumber"
      ]
    },
    "clm": {
      "0": "ClaimInformation",
      "1": "ClaimSubmitterIdentifier",
      "2": "MonetaryAmount",
      "3": "ClaimFillingIndicator",
      "4": "NonInstitutionalClaimType",
      "5": "FacilityCodeValue",
      "6": "FacilityCodeQualifier",
      "7": "ClaimFrequencyTypeCode",
      "8": "YesNoProviderSignatureonFile",
      "9": "ProviderAcceptAssignmentCode",
      "10": "YesNoAssignmentsofBenefit",
      "11": "YesNoReleaseofInformation",
      "12": "PatientSignatureSourceCode"
    },
    "dtp": {
      "1": "DateTimeQualifier",
      "2": "DateTimePeriodFormatQualifier",
      "3": "DateTimePeriod",
      "0": [
        "DateOnsetOfCurrentIllnessSymptom",
        "DateInitialTreatment",
        "DateLastSeen",
        "DateAcuteManifestation",
        "DateAccident",
        "DateInitialMenstrual",
        "DateLastXRayMenstrual",
        "DateHearingAndVisionPrescriptionDate",
        "DateLastWorked"
      ]
    },
    "ref": {
      "1": "ReferenceIdentificationQualifier",
      "2": "ReferenceIdentification",
      "0": [
        "CLIANumber",
        "PriorAuthorizationOrReferralNumber"
      ]
    },
    "k3": {
      "0": "ClaimInformation",
      "1": "FixedFormatInformation"
    },
    "hi": {
      "0": "HealthCareDiagnosisCode",
      "1": "CodeListQualifierCode",
      "2": "IndustryCode"
    },
    "sbr": {
      "0": "SubscriberInformation",
      "1": "PayerResponsibilityCode",
      "2": "IndividualRelationshipCode",
      "3": "ReferenceIdentification",
      "4": "Name",
      "5": "InsuranceTypeCode",
      "6": "CoordinationOfBenefitCode",
      "7": "YesNoCondition",
      "8": "EmploymentStatusCode",
      "9": "ClaimFillingIndicatorCode"
    },
    "lx": {
      "0": "ServiceLine",
      "1": "AssignedNumber"
    },
    "sv1": {
      "0": "ProfessionalService",
      "1": "ProductServiceIdQualifier : ProductServiceID : ProcedureModifier : ProcedureModifier : ProcedureModifier : ProcedureModifier",
      "2": "MonetaryAmount",
      "3": "Unit",
      "4": "Quantity",
      "5": "FacilityCodeValue",
      "6": "ServiceTypeCode",
      "7": "DiagnosisCodePointer : DiagnosisCodePointer : DiagnosisCodePointer : DiagnosisCodePointer : MonetaryAmount : YesNoEmergency Indicator: MultipleProcedureCode : YesNoEPSDTIndicator : YesNoFamilyPlanningIndicator : ReviewCode : NationalOrLocalAssignedReviewValue : CopayStatusCode",
      "_comment": "if : is file content separator"
    },
    "svd": {
      "0": "LineAdjudicationInformation",
      "1": "IdentificationCode",
      "2": "MonetaryAmount",
      "3": "ProductServiceIDQualifier",
      "4": "Description",
      "5": "Quantity"
    },
    "cas": {
      "0": "LineAdjustment",
      "1": "ClaimAdjustmentGroupCode",
      "2": "ClaimAdjustmentReasonCode",
      "3": "MonetaryAmount"
    },
    "trailer_3": {
      "after": "/Segment"
    },
    "se": {
      "0": "TransactionSetTrailer",
      "1": "NumberofIncludedSegments",
      "2": "TransactionSetControlNumber"
    },
    "trailer_2": {
      "after": "/Transaction"
    },
    "ge": {
      "1": "NumberOfTransactionsSetsIncluded",
      "2": "GroupControlNumber",
      "0": [
        "FunctionalGroupTrailer",
        "FunctionalGroupHeader"
      ]
    },
    "trailer_1": {
      "after": "/Group"
    },
    "iea": {
      "0": "InterchangeControlTrailer",
      "1": "NumberOfIncludedFunctionalGroups",
      "2": "InterchangeControlNumber20"
    },
    "trailer_0": {
      "after": "/Hippa"
    }
  };