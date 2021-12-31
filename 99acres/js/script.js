// insert JQuery

var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.body.appendChild(script);


if (getCookie("GOOGLE_SEARCH_ID") != "7024401636715788") {
  document.cookie =
    "GOOGLE_SEARCH_ID=7024401636715788; path=/; domain=.99acres.com";
  document.cookie =
    "GOOGLE_SEARCH_ID=7024401636715788; path=/; domain=.www.99acres.com";
}
var downloadButton = document.createElement("a");
downloadButton.setAttribute("href", "javascript:void(0);");
downloadButton.setAttribute("id", "downloadButton");
downloadButton.setAttribute("class", "downloadButton");

downloadButton.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg> Download';

var downloadButtonStyle = document.createElement("style");
downloadButtonStyle.innerHTML =
  ".downloadButton {color: #fff!important; position: fixed; bottom: 0; left: 0; background-color: #4CAF50; padding:15px; border: 1px solid #ccc; }";

downloadButton.addEventListener("click", downloadExcel);
var uploadWrapper = document.createElement("label");
uploadWrapper.setAttribute("id", "uploadWrapper");
uploadWrapper.setAttribute("class", "uploadWrapper");
var uploadButton = document.createElement("input");
uploadButton.setAttribute("type", "file");
uploadButton.setAttribute("id", "uploadButton");
uploadWrapper.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></g></svg> Upload Excel';

var uploadButtonStyle = document.createElement("style");
uploadButtonStyle.innerHTML =
  ".uploadWrapper {color: #fff!important;position: fixed;bottom: 0;left: 0;background-color: #4CAF50;padding: 15px;border: 1px solid #ccc;}#uploadButton {visibility:0;width: 0;}";
uploadWrapper.appendChild(uploadButton);
uploadWrapper.appendChild(uploadButtonStyle);

if (
  isDefined(typeof __initialData__ != "undefined" ? __initialData__ : undefined)
) {
  document.body.appendChild(downloadButtonStyle);
  document.body.appendChild(downloadButton);
  var script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.3/xlsx.core.min.js";
  document.body.appendChild(script);
} else if (window.location.href == "https://www.99acres.com/postproperty") {
  var script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.3/xlsx.core.min.js";
  document.body.appendChild(script);
  document.body.appendChild(uploadWrapper);
  uploadButton.addEventListener("change", function () {
    var file = uploadButton.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var json_object = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log(json_object);

      var second_sheet_name = workbook.SheetNames[1];
      var worksheet2 = workbook.Sheets[second_sheet_name];
      var json_object2 = XLSX.utils.sheet_to_json(worksheet2, { raw: true });
      console.log(json_object2);
    };
    reader.readAsBinaryString(file);
  });
} else if (window.location.href.match(/^https:\/\/www\.99acres\.com\/search/)) {
  document.body.appendChild(downloadButtonStyle);
  downloadButton.innerHTML = "Get Details";
  downloadButton.removeEventListener("click", downloadExcel);
  downloadButton.addEventListener("click", getDetails);
  document.body.appendChild(downloadButton);
} else {
  console.log("not on the page");
}
function isDefined(data) {
  if (typeof data != "undefined") {
    if (typeof data.pseudo != "undefined") {
      if (typeof data.pseudo.pageData != "undefined") {
        return true;
      }
    }
  }
}

async function downloadExcel() {
  console.log(__initialData__);
  var contactXHR = await getBuilderContactNumber(
    __initialData__.pseudo.pageData.AdvertiserDetails.profileId,
    __initialData__.pseudo.pageData.AdvertiserDetails.Prop_Id
  );
  var propertyDetails = getPropertyDetails(__initialData__);
  var contactDetails = getContactDetails(__initialData__);
  var facilityDetails = getFacilityDetails(__initialData__);

  propertyDetails.area_sqft = contactXHR.ecommTrackData.area_sqft;
  propertyDetails.availability = contactXHR.ecommTrackData.availability;
  propertyDetails.property_type = contactXHR.ecommTrackData.property_type;
  propertyDetails.netPrice = contactXHR.ecommTrackData.price;
  propertyDetails.building_Id = contactXHR.ecommTrackData.building_Id;

  contactDetails.contactNumber = contactXHR.sellerResponseDetails[0].mobile;
  contactDetails.email = contactXHR.sellerResponseDetails[0].email;
  contactDetails.contactPerson = contactXHR.sellerResponseDetails[0].name;
  let myWorkBook = XLSX.utils.book_new();
  let propertyDetailsJson = XLSX.utils.json_to_sheet([propertyDetails]);
  let contactDetailsJson = XLSX.utils.json_to_sheet([contactDetails]);
  let facilityDetailsJson = XLSX.utils.json_to_sheet(facilityDetails);
  XLSX.utils.book_append_sheet(
    myWorkBook,
    propertyDetailsJson,
    "Property Details"
  );
  XLSX.utils.book_append_sheet(
    myWorkBook,
    contactDetailsJson,
    "Contact Details"
  );
  XLSX.utils.book_append_sheet(
    myWorkBook,
    facilityDetailsJson,
    "Facility Details"
  );
  XLSX.writeFile(myWorkBook, "Data.xlsx");
}

function getPropertyDetails(__initialData__) {
  var propertyDetails = {};
  propertyDetails.propertyName =
    __initialData__.pseudo.pageData.propertyDetails.title;
  propertyDetails.propertyDescription =
    __initialData__.pseudo.pageData.propertyDetails.description;
  // link
  propertyDetails.propertyLink =
    "https://99acres.com/" +
    __initialData__.pseudo.pageData.propertyDetails.canonical_url;
  propertyDetails.minArea =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.displayMinArea +
    " " +
    __initialData__.pseudo.pageData.propertyDetails.prop_data
      .displayMinAreaUnitLabel;
  propertyDetails.maxArea =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.displayMaxArea +
    " " +
    __initialData__.pseudo.pageData.propertyDetails.prop_data
      .displayMaxAreaUnitLabel;
  //  address
  propertyDetails.address =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.AddressTupple;
  //  bbath rooms
  propertyDetails.bathrooms =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.Bathroom_Num;
  // bed rooms
  propertyDetails.bedrooms =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.Bedroom_Num;
  // price
  propertyDetails.price =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.Price_Text;
  // min pricce
  propertyDetails.minPrice =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.Min_Price;
  propertyDetails.latitude = __initialData__.pseudo.pageData.seoSchema.latitude;
  propertyDetails.longitude =
    __initialData__.pseudo.pageData.seoSchema.longitude;
  // city name
  propertyDetails.cityName = __initialData__.pseudo.pageData.seoSchema.cityName;
  return propertyDetails;
}

function getContactDetails(__initialData__) {
  var contactDetails = {};
  contactDetails.name =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.name_label;
  contactDetails.altName =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.altTag;
  contactDetails.website =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.Url;
  contactDetails.address =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.address2_label;
  contactDetails.photo =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.dealer_photo_url;
  contactDetails.companyName =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.ContactDetails.Company_Name;
  // company profile
  contactDetails.companyProfile =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.company_profile;
  // ccompanny age
  contactDetails.companyAge =
    __initialData__.pseudo.pageData.propertyDetails.prop_data.Age;
  return contactDetails;
}

function getFacilityDetails(__initialData__) {
  var getFacilityDetailsArr = [];
  for (
    let i = 0;
    i < __initialData__.pseudo.pageData.amenitiesData.Basic.length;
    i++
  ) {
    var facilityDetails = {};
    facilityDetails.SrNo = i + 1;
    facilityDetails.facilityName =
      __initialData__.pseudo.pageData.amenitiesData.Basic[i].name;
    facilityDetails.facilityLabel =
      __initialData__.pseudo.pageData.amenitiesData.Basic[i].label;
    getFacilityDetailsArr.push(facilityDetails);
  }
  for (
    let i = 0;
    i < __initialData__.pseudo.pageData.amenitiesData.LifeStyle.length;
    i++
  ) {
    var facilityDetails = {};
    facilityDetails.SrNo = i + 1;
    facilityDetails.facilityName =
      __initialData__.pseudo.pageData.amenitiesData.LifeStyle[i].name;
    facilityDetails.facilityClass =
      __initialData__.pseudo.pageData.amenitiesData.LifeStyle[i].label;
    getFacilityDetailsArr.push(facilityDetails);
  }
  return getFacilityDetailsArr;
}

async function getBuilderContactNumber(profileId, productId) {
  var url1 = "https://www.99acres.com/api-aggregator/verify/mobile";
  var url2 = "https://www.99acres.com/api-aggregator/eoi/doEoi";
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    Origin: "https://www.99acres.com",
  };
  var body1 = {
    profileId: "54718582",
    mode: "VERIFY",
    countryCode: "91",
    mobile: "91-6382775774",
    otp: "1561",
    source: "EOI",
    visitorId: "7024401636715788",
  };
  var options1 = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body1),
  };
  var body2 = {
    name: "Lakshmanan R",
    email: "klakshmanan48@gmail.com",
    countryCode: "91",
    phone: "6382775774",
    shareMobileInfo: "Y",
    shareWhatsappInfo: "Y",
    identityRatio: "I",
    showYesIamInterested: "N",
    productId: productId,
    profileId: profileId,
    trackSource: "PSEUDOLISTING_TOPVIEW_REACT",
    responseType: "C2V",
    homeLoan: "",
    eoiOn: "PROPERTY",
    siteVisit: "Yes",
    decisionTime: "",
    page: "PD",
    platform: "Desktop",
  };
  var options2 = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body2),
  };
  await setTimeout(async () => {}, 1000);
  var response1 = await fetch(url1, options1);
  var response1Json = await response1.json();
  if (response1Json.verificationStatus == "VERIFIED") {
    var response2 = await fetch(url2, options2);
  }

  var response2 = await fetch(url2, options2);
  var response2Json = await response2.json();
  return response2Json;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  else return "";
}

function getDetails() {}
