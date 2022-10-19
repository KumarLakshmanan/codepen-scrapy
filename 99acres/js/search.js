var myModalContent = `<button type="button" id="myModalOpen" class="btn btn-primary rounded-0 p-3" style="position: fixed;bottom: 0;right: 0;z-index: 9999;">Save Code</button>`;
var myModal = document.createElement("div");
myModal.innerHTML = myModalContent;
myModal.setAttribute("id", "myModal");

// url is  matchh to /pen/
// https://codepen.io/traceypooh/pen/pWjOdq
var url = window.location.href;
var regex = /\/pen\/(.*)/;
var match = url.match(regex);
if (match) {
  var penId = match[1];
  document.body.appendChild(myModal);
  document.querySelector("#myModalOpen").addEventListener("click", function () {
    var total = document.querySelector("#init-data").value;
    var data = JSON.parse(total);
    var code = JSON.parse(data.__item);
    var html = code.html;
    var css = code.css;
    var js = code.js;
    var title = code.title;
    var description = code.description;
    var tags = code.tags;
    var resources = code.resources;
    // sort resources by order
    resources.sort(function (a, b) {
      return a.order - b.order;
    });
    for (var i = 0; i < resources.length; i++) {
      var resource = resources[i];
      if (resource.resource_type === "js") {
        html =  html + "\n<script src='" + resource.url + "'></script>";
      }
      if (resource.resource_type === "css") {
        css = "@import url('" + resource.url + "');\n" + css;
      }
    }
    if (tags.length > 0) {
      var tagString = tags.join(",");
    } else {
      var tagString = "html,css,js";
    }
    $.ajax({
      url: "https://frontendforever.com/api/codepen.php",
      type: "POST",
      data: {
        html: html,
        css: css,
        js: js,
        title: title,
        content: description,
        keywords: tagString,
        thumb:
          "https://shots.codepen.io/iliadraznin/pen/" + code.slug_hash + "-512.webp",
      },
      success: function (data) {
        alert(data.error.description);
      },
    });
  });
}
