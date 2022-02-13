const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;

// var script1 = document.createElement("script");
// script1.setAttribute("type", "module");
// script1.src = chrome.runtime.getURL("/99acres/js/object.js");
// head.insertBefore(script1, head.lastChild);

var script2 = document.createElement("script");
script2.src = chrome.runtime.getURL("/99acres/js/search.js");
head.insertBefore(script2, head.lastChild);

var script3 = document.createElement("script");
script3.src = chrome.runtime.getURL("/99acres/js/jquery.min.js");
head.insertBefore(script3, head.lastChild);

var script4 = document.createElement("script");
script4.src = chrome.runtime.getURL("/99acres/js/jszip.js");
head.insertBefore(script4, head.lastChild);

var script5 = document.createElement("script");
script5.src = chrome.runtime.getURL("/99acres/js/xlsx.full.min.js");
head.insertBefore(script5, head.lastChild);

var style1 = document.createElement("link");
style1.setAttribute("rel", "stylesheet");
style1.setAttribute("type", "text/css");
style1.setAttribute("href", chrome.runtime.getURL("/99acres/css/style.css"));
head.insertBefore(style1, head.lastChild);
