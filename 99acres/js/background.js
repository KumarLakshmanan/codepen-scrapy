extractGlobal('__initialData__').then(data => {
  console.log(data);
});
console.log(retrieveWindowVariables('__initialData__'));

document
  .querySelector("button.download-button")
  .addEventListener("click", () => {
    try {
      // var obj = extractGlobal("__initialData__");

      // console.log(JSON.stringify(obj));
      let items = {
        bathroom: "1",
        bedroom: "1  See Dimension",
        builderdetails: {
          Target:
            "https://cdn.staticmb.com/propertydetailstatic/images/adp__agent__no_image.gif",
          location: "Location:Chennai, Tamil Nadu, India",
          name: "Arun Excello",
        },
        "car parking": "1 Covered",
        description:
          "The Project Urmika located on Maraimalai Nagar, off GST Road. The apartments in offer are 318 functional units with efficient design and crisp elevation with no frills attached. This will cater to a large cross section of the society who can now hope to own a dream home which will be within their reach.Urmika is located near Maraimalai Nagar, off GST Road, close to Singaperumalkoil, Mahindra World City, Ford India, India Piston ect and also nearer to Maraimalai Nagar Sipcot where Major Multi-National Automobile Companies were already established. Reputed Hospitals, Prominent Schools & Universities are also close by. This project is laid over 2.1 acres of land with landscaped area and Other Facilities. These Compact Homes are offered at an affordable and competitiveall-inclusive price. 1 BHK apartments size ranges from 375 sft to 595 sft and 2 BHK apartments size ranges from 590 sft to 720 sft, in a Ground plus 3 Floors structure.",
        developer: {
          name: "Arun Excello Construction LLP",
          url: "https://www.magicbricks.com/arun-excello-construction-llp-buid-4d423533353831",
        },
        images: [
          {
            title: "Urmika photos 1",
            url: "https://img.staticmb.com/mbimages/project/popup/2021/10/08/Project-Photo-2-Urmika-Chennai-5130849_1200_1600.jpg",
          },
          {
            title: "Urmika photos 2",
            url: "https://img.staticmb.com/mbimages/project/popup/2021/10/08/Project-Photo-1-Urmika-Chennai-5130849_345_1366.jpg",
          },
        ],
        locatilyDetails: {
          Highlights: ["All inclusive price"],
          basedOn: "Based on 81 ratings",
          commuting: {
            connectivity: 4,
            parking: 4,
            "public transport": 4,
            traffic: 4,
          },
          environment: {
            cleanliness: 4,
            neighborhood: 4,
            roads: 4,
            safety: 4,
          },
          localAdvantages: [
            "Location Advantages:-Easy access to GST Road & OMR ",
          ],
          outOf: "5.0",
          placesOfIntrests: {
            hospital: 3,
            market: 4,
            restaurants: 3,
            schools: 4,
          },
          total: {},
        },
        "possession by": "Mar '22",
        project: {
          name: "Urmika",
          url: "https://www.magicbricks.com/urmika-maraimalai-nagar-chennai-pdpid-4d4235313330383439",
        },
        projectdetails: {
          address: "Maraimalai Nagar, Chennai - South, Tamil Nadu",
          amenities:
            "Reserved Parking,Power Back Up,Rain Water Harvesting,Park,Water Storage,Security,Lift,Vaastu Compliant,View all Amenities",
          "booking amount": "",
          furnishing:
            "Unfurnished,Exclusive offers on Design & Decor,Explore now",
          "insurance partner": "",
          lift: "2",
          "loan offered by": "",
          "price breakup": "₹,17.0 Lac",
          "rera id": "TN/01/Building/0071/2019",
          "status of electricity": "No/Rare Powercut",
          "water availability": "24 Hours Available",
        },
        propertyDetails: {
          configuration: "1 BHK Flat",
          highlights: [],
          price: {
            perSqft: "₹ 21.2 Lac",
            total: "16.4 ₹",
          },
          stars: "4.5",
          status: "Under Construction(Ready by Mar '22)",
          unitDetails: "2 Towers, 318 Units",
        },
        "puja room": "1",
        status: "Under Construction",
        "super area": "440 sqft",
        title: "1 BHK Flats for Sale in Maraimalai Nagar",
        "transaction type": "New Property Get Documents Verified",
        url: "https://www.magicbricks.com/propertyDetails/1-BHK-440-Sq-ft-Multistorey-Apartment-FOR-Sale-Maraimalai-Nagar-in-Chennai&id=4d423537343139393037",
      };

      // bold = myWorkBook.add_format({ bold: True });
      let myWorkBook = XLSX.utils.book_new();

      let myWorkSheet = XLSX.utils.json_to_sheet([items]);
      let myImageSheet = XLSX.utils.json_to_sheet(items.images);
      let builderDetailsSheet = XLSX.utils.json_to_sheet([
        items.builderdetails,
      ]);

      XLSX.utils.book_append_sheet(myWorkBook, myWorkSheet, "myWorkSheet");
      XLSX.utils.book_append_sheet(myWorkBook, myImageSheet, "myImageSheet");
      XLSX.utils.book_append_sheet(
        myWorkBook,
        builderDetailsSheet,
        "builderDetailsSheet"
      );
      XLSX.writeFile(myWorkBook, "download.xlsx");
    } catch (e) {
      console.log(e);
    }
  });

function retrieveWindowVariables(variables) {
  var ret = {};

  var scriptContent = "";
  for (var i = 0; i < variables.length; i++) {
    var currVariable = variables[i];
    scriptContent +=
      "if (typeof " +
      currVariable +
      " !== 'undefined') $('body').attr('tmp_" +
      currVariable +
      "', " +
      currVariable +
      ");\n";
  }

  var script = document.createElement("script");
  script.id = "tmpScript";
  script.appendChild(document.createTextNode(scriptContent));
  (document.body || document.head || document.documentElement).appendChild(
    script
  );

  for (var i = 0; i < variables.length; i++) {
    var currVariable = variables[i];
    ret[currVariable] = $("body").attr("tmp_" + currVariable);
    $("body").removeAttr("tmp_" + currVariable);
  }

  $("#tmpScript").remove();

  return ret;
}


function extractGlobal(variableName) {

  const array = new Uint32Array(5);
  const handShake = window.crypto.getRandomValues(array).toString();

  function propagateVariable(handShake, variableName) {
    const message = { handShake };
    message[variableName] = window[variableName];
    window.postMessage(message, "*");
  }

  (function injectPropagator() {
    const script = `( ${propagateVariable.toString()} )('${handShake}', '${variableName}');`
    const scriptTag = document.createElement('script');
    const scriptBody = document.createTextNode(script);

    scriptTag.id = 'chromeExtensionDataPropagator';
    scriptTag.appendChild(scriptBody);
    document.body.append(scriptTag);
  })();

  return new Promise(resolve => {
    window.addEventListener("message", function({data}) {
      // We only accept messages from ourselves
      if (data.handShake != handShake) return;
      resolve(data);
    }, false);
  });
}

function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}
injectScript(chrome.extension.getURL('/makkan/js/content.js'), 'body');