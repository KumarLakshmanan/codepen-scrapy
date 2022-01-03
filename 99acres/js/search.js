var myModalContent = `<button type="button" id="myModalOpen" class="btn btn-primary rounded-0 p-3" data-toggle="modal" data-target="#exampleModal" style="position: fixed;bottom: 0;right: 0;z-index: 9999;">Upload File</button>`;
var myModal = document.createElement("div");
myModal.innerHTML = myModalContent;
myModal.setAttribute("id", "myModal");
if (window.location.href.indexOf("postproperty") > -1) {
  document.body.appendChild(myModal);
}

var object = {
  preference: {
    value: "S",
  },
  agreement: {
    value: "2",
  },
  sharingCount: {
    value: "",
  },
  sharingType: {
    value: "",
  },
  tenantGender: {
    value: "",
  },
  suitableFor: {
    value: [],
  },
  availableFor: {
    value: [],
  },
  additionalRooms: {
    value: [],
  },
  waterSource: {
    value: [],
  },
  overlooking: {
    value: [],
  },
  powerBackup: {
    value: "",
  },
  amenities: {
    value: [],
  },
  bedroomNum: {
    value: "",
  },
  areaType: {},
  noticeDuration: {
    value: "",
  },
  furnish: {
    value: "",
  },
  parking: {
    value: 0,
  },
  facing: {
    value: "",
  },
  flooring: {
    value: "",
  },
  widthOfFacingRoad: {
    value: "",
  },
  callPreference: {
    value: [],
  },
  callPreferencetext: {},
  updatedDescription: {},
  widthOfFacingRoadUnit: {
    value: "1",
  },
  bathroomNum: {
    value: "",
  },
  balconyNum: {
    value: "",
  },
  ownership: {
    value: "",
  },
  price: {
    value: "",
  },
  inclusive: {
    value: false,
  },
  taxGovtCharges: {
    value: false,
  },
  negotiable: {
    value: false,
  },
  electricityWaterCharges: {
    value: true,
  },
  propertyType: {
    value: "",
  },
  resCom: {
    value: "R",
  },
  superPropertyType: {
    value: "",
  },
  totalFloor: {
    value: "",
  },
  floorNum: {
    value: "",
  },
  areaUnit: {
    value: 1,
  },
  superBuiltup: {
    value: "",
  },
  builtup: {
    value: "",
  },
  carpet: {
    value: "",
  },
  age: {
    value: "",
  },
  openParking: {
    value: 0,
  },
  coveredParking: {
    value: 0,
  },
  propertyAvailability: {
    value: "",
  },
  availability: {},
  isBrokerage: {
    value: "",
  },
  brokerageType: {
    value: "FIXED_AMOUNT",
  },
  brokerage: {
    value: "",
  },
  brokerageNegotiable: {
    value: false,
  },
  maintenance: {
    value: "",
  },
  maintenanceCriteria: {
    value: "1",
  },
  expectedRental: {
    value: "",
  },
  bookingAmount: {
    value: "",
  },
  annualDues: {
    value: "",
  },
  membership: {
    value: "",
  },
  bedsNum: {
    value: "",
  },
  capacity: {
    value: "",
  },
  bathroomAttached: {
    value: false,
  },
  balconyAttached: {
    value: false,
  },
  earlyLeavingCharges: {
    value: "",
  },
  earlyLeavingChargesType: {
    value: "",
  },
  rentAgreementDuration: {},
  depositType: {
    value: "",
  },
  deposit: {
    value: "",
  },
  petAllowed: {
    value: "",
  },
  drinkingAllowed: {
    value: "",
  },
  smokingAllowed: {
    value: "",
  },
  visitorAllowed: {
    value: "",
  },
  partiesAllowed: {
    value: "",
  },
  lastEntryTime: {},
  otherRule: {},
  totalPriceIncludes: {
    value: [],
  },
  laundryAvailability: {
    value: "",
  },
  laundryCharge: {
    value: "",
  },
  laundryChargeType: {
    value: "FIXED",
  },
  waterAvailability: {
    value: "",
  },
  waterCharge: {
    value: "",
  },
  waterChargeType: {
    value: "FIXED",
  },
  wifiAvailability: {
    value: "",
  },
  wifiCharge: {
    value: "",
  },
  wifiChargeType: {
    value: "FIXED",
  },
  housekeepingAvailability: {
    value: "",
  },
  housekeepingCharge: {
    value: "",
  },
  housekeepingChargeType: {
    value: "FIXED",
  },
  electricityAvailability: {
    value: "",
  },
  electricityCharge: {
    value: "",
  },
  electricityChargeType: {
    value: "FIXED",
  },
  dthAvailability: {
    value: "",
  },
  dthCharge: {
    value: "",
  },
  dthChargeType: {
    value: "FIXED",
  },
  qualityRating: {
    value: "",
  },
  numberOfProperties: {
    value: "",
  },
  totalRooms: {
    value: "",
  },
  foodAvailability: {
    value: "",
  },
  foodType: {
    value: "",
  },
  foodAvailabilityWeekdays: {
    value: [],
  },
  foodAvailabilityWeekends: {
    value: [],
  },
  foodChargeType: {
    value: "",
  },
  foodCharge: {
    value: "",
  },
  breakfastCharge: {
    value: "",
  },
  lunchCharge: {
    value: "",
  },
  dinnerCharge: {
    value: "",
  },
  otherAmenities: {
    value: [],
  },
  propertyFeatures: {
    value: [],
  },
  societyFeatures: {
    value: [],
  },
  commonFurnish_diningTable: {
    value: false,
  },
  commonFurnish_Tv: {
    value: 0,
  },
  commonFurnish_washingMachine: {
    value: 0,
  },
  commonFurnish_Ac: {
    value: 0,
  },
  commonFurnish_sofa: {
    value: false,
  },
  commonFurnish_WaterPurfier: {
    value: false,
  },
  commonFurnish_ModularKitchen: {
    value: false,
  },
  commonFurnish_fans: {
    value: false,
  },
  commonFurnish_light: {
    value: 0,
  },
  commonFurnish_curtains: {
    value: false,
  },
  commonFurnish_fridge: {
    value: false,
  },
  commonFurnish_geyser: {
    value: false,
  },
  commonFurnish_stove: {
    value: false,
  },
  commonFurnish_microwave: {
    value: false,
  },
  commonFurnish_chimney: {
    value: false,
  },
  commonFurnish_exhaustFan: {
    value: false,
  },
  commonFurnish_wardrobe: {
    value: 0,
  },
  furnishing_Tv: {
    value: 0,
  },
  furnishing_Ac: {
    value: 0,
  },
  furnishing_Bed: {
    value: 0,
  },
  furnishing_Fan: {
    value: 0,
  },
  furnishing_Gey: {
    value: 0,
  },
  furnishing_Light: {
    value: 0,
  },
  furnishing_Ward: {
    value: 0,
  },
  furnishing_Chmny: {
    value: false,
  },
  furnishing_Curt: {
    value: false,
  },
  furnishing_Dinngtbl: {
    value: false,
  },
  furnishing_Exhstfn: {
    value: false,
  },
  furnishing_Kit: {
    value: false,
  },
  furnishing_Ref: {
    value: false,
  },
  furnishing_Sofa: {
    value: false,
  },
  furnishing_Stv: {
    value: false,
  },
  furnishing_Washmchn: {
    value: false,
  },
  furnishing_Wtrpurfr: {
    value: false,
  },
  furnishing_fan_toggle: {
    value: false,
  },
  furnishing_geyser_toggle: {
    value: false,
  },
  furnishing_studytable: {
    value: false,
  },
  furnishing_Microwave: {
    value: false,
  },
  availabilityMonth: {},
  superArea: {
    value: "",
  },
  minimumContractDuration: {},
  availabilityDate: {
    value: "",
  },
  propertySpecification: {
    value: "N",
  },
  minArea: {
    value: "",
  },
  maxArea: {
    value: "",
  },
  washroomNumber: {
    value: "",
  },
  plotLength: {
    value: "",
  },
  plotBreadth: {
    value: "",
  },
  isBoundaryWallMade: {
    value: "",
  },
  cornerProperty: {
    value: false,
  },
  wheelChairFriendly: {
    value: false,
  },
  petFriendly: {
    value: false,
  },
  withinGatedCommunity: {
    value: false,
  },
  pricePerUnitArea: {
    value: "",
  },
  availableRooms: {
    value: "",
  },
  priceRangeText: {},
  priceInWords: {},
  depositPriceInWords: {},
  depositMonthsInWords: {},
  meetingRoomsNum: {
    value: "",
  },
  minSeats: {
    value: "",
  },
  maxSeats: {
    value: "",
  },
  cabinsNum: {
    value: "",
  },
  receptionArea: {
    value: "",
  },
  washroomAvailable: {
    value: "",
  },
  privateWashrooms: {
    value: 0,
  },
  sharingWashrooms: {
    value: 0,
  },
  conferenceRoomsAvailable: {
    value: "",
  },
  conferenceRoomsCount: {
    value: "",
  },
  pantryType: {
    value: "",
  },
  pantryArea: {
    value: "",
  },
  pantryAreaUnit: {
    value: 1,
  },
  furnishingAvailable: {
    value: "",
  },
  centralAirConditioningAvailable: {
    value: "",
  },
  oxygenDuctAvailable: {
    value: "",
  },
  upsAvailable: {
    value: "",
  },
  fireSafetyMeasures: {
    value: [],
  },
  rentIncrement: {
    value: "",
  },
  fireNoc: {
    value: "",
  },
  occupancyCertificate: {
    value: "",
  },
  lockInPeriod: {
    value: "",
  },
  officeUsedFor: {
    value: [],
  },
  multiFloorSelect: {
    value: "",
  },
  multiFloorNum: {
    value: [],
  },
  staircaseNum: {
    value: "",
  },
  dgUpsPriceIncluded: {
    value: false,
  },
  wallsType: {
    value: "",
  },
  doorsAvailable: {
    value: "",
  },
  bareshellCentralAirConditioningAvailable: {
    value: "",
  },
  bsFlooring: {
    value: "",
  },
  commercialParkingAvailable: {
    value: "",
  },
  privateBasementParkingAvailable: {
    value: false,
  },
  privateOutsideParkingAvailable: {
    value: false,
  },
  publicParkingAvailable: {
    value: false,
  },
  parkingCount: {
    value: "",
  },
  liftsAvailable: {
    value: "",
  },
  passengerLifts: {
    value: 0,
  },
  serviceLifts: {
    value: 0,
  },
  modernLiftsAvailable: {
    value: false,
  },
  minimumLeasableSuperBuiltUp: {
    value: "",
  },
  priceType: {
    value: "FIXED",
  },
  hidePrice: {
    value: "",
  },
  minPrice: {
    value: "",
  },
  maxPrice: {
    value: "",
  },
  minPriceInWords: {},
  maxPriceInWords: {},
  verifyListing: {
    value: false,
  },
  uploadImage: {
    value: false,
  },
  reimburse: {
    value: false,
  },
  assuredReturns: {
    value: "",
  },
  leaseGuarantee: {
    value: "",
  },
  entranceWidth: {
    value: "",
  },
  ceilingHeight: {
    value: "",
  },
  entranceWidthUnit: {
    value: "1",
  },
  ceilingHeightUnit: {
    value: "1",
  },
  washroomTypes: {
    value: [],
  },
  parkingTypes: {
    value: [],
  },
  shopLocatedIn: {
    value: "",
  },
  isPreLeased: {
    value: "",
  },
  currentMonthlyRent: {
    value: "",
  },
  currentLeaseTenure: {
    value: "",
  },
  annualRentIncrease: {
    value: "",
  },
  leasedTo: {
    value: {},
  },
  expectedAnnualReturns: {
    value: "",
  },
  hideExpectedAnnualReturns: {
    value: false,
  },
  suitableBusinessType: {
    value: [],
  },
  otherSuitableBusinessType: {
    value: "",
  },
  locatedNear: {
    value: [],
  },
  mainRoadFacing: {
    value: false,
  },
  shopLocatedInOthers: {
    value: "",
  },
  city: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  locationState: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  locality: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  subLocality: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  project: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  tower: {
    value: {
      id: "",
      label: "",
      lat: "",
      lng: "",
    },
  },
  zoneType: {
    value: {
      id: "",
      label: "",
    },
  },
  locatedInside: {
    value: {
      id: "",
      label: "",
    },
  },
  address: {
    value: "",
  },
  latLng: {
    value: {
      lat: 28.653386,
      lng: 77.228165,
      field: "",
    },
  },
  floorPlanId: "",
  postedAs: {
    value: "O",
  },
  description: {
    value: "",
    isAutoGenerated: false,
    error: "",
    descriptionReviewed: false,
  },
  usps: [],
  perUnitArea: {
    value: "",
  },
  projectCoverPhoto: {
    coverPhoto: null,
  },
  expectedAnnualReturnsCriteria: {
    value: true,
  },
  locationAdvantages: [],
  suggestUsp: [],
  lastActiveUrl: "/postproperty/primarydetails",
  mediaUploadChannels: [],
  PriceRecommender: {
    loading: false,
    minPrice: "",
    maxPrice: "",
    totalPrice: "",
    price: "",
    pricingReasons: [],
    otherReasons: "",
    visible: false,
    isEdit: false,
  },
  visitedPages: {},
  lastUpdatedField: "postedAs",
  CommercialProject: {
    projectData: {},
  },
  premiumVersion: {},
};

document.querySelector("#myModalOpen").addEventListener("click", function () {
  // get input file from user
  var input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "myFile");
  input.setAttribute("accept", ".csv");
  input.setAttribute("style", "display: none;");
  document.body.appendChild(input);
  document.querySelector("#myFile").click();
  document.querySelector("#myFile").addEventListener("change", function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
      var csv = e.target.result;
      var data = csv.split("\n");
      var dataArray = [];
      for (var i = 0; i < data.length; i++) {
        var dataRow = data[i].split(",");
        dataArray.push(dataRow);
      }
      console.log(dataArray);
      dataArray.forEach(function (dataRow) {
        try {
          if (dataRow[0] === "") {
            return;
          }
          dataRow[0] = dataRow[0]
            .replace(/\n/g, "")
            .replace(/\r/g, "")
            .replace(/\t/g, "")
            .replace(/\s/g, "")
            .replace(/\f/g, "")
            .replace(/\v/g, "")
            .toLowerCase();
          dataRow[1] = dataRow[1]
            .replace(/\n/g, "")
            .replace(/\r/g, "")
            .replace(/\t/g, "")
            .replace(/\s/g, "")
            .replace(/\f/g, "")
            .replace(/\v/g, "")
            .toLowerCase();
          switch (dataRow[0]) {
            case "propertyType":
              if (dataRow[1] === "rent") {
                object.preference.value ="R";
              } else if (dataRow[1] === "sale") {
                object.preference.value ="S";
              } else if (dataRow[1] === "P") {
                object.preference.value = "P";
                 }   
              break;
            case "propertySubType":
                if (dataRow[1] === "residential") {
                    object.propertyType.value = "R";
                } else if (dataRow[1] === "commercial") {
                    object.propertyType.value = "C";
                }
            default:
              break;
          }
        } catch (error) {
          console.log(error);
        }
      });
    };
  });
});

var variables = {
  KindOfProperty: {
    key: "resCom",
    options: ["Commercial", "Residential"],
    values: ["C", "R"],
  },
  IamLookingTo: {
    key: "preference",
    options: ["Sale", "Rent/Lease"],
    values: ["S", "L"],
  },
  superPropertyType: {
    key: "superPropertyType",
    options: [
      "Office",
      "Retail",
      "Land",
      "Storage",
      "Industry",
      "Hospitality",
      "Other",
    ],
    values: [
      "Office",
      "Retail",
      "Land",
      "Storage",
      "Industry",
      "Hospitality",
      "Other",
    ],
  },
};