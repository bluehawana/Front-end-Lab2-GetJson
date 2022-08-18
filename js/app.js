document.getElementById("btn2").onclick = function () {
  var http;
  if (window.XMLHttpRequest) {
    http = new XMLHttpRequest();
  } else {
    http = new ActiveXObject("Microsoft.XMLHTTP");
  }
  http.open("GET", "/contents/names.json");
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      var items = JSON.parse(http.responseText);
      console.log(items);
      var output = "<ul>";
      for (var key in items) {
        output += "<li>" + items[key].name + "</li>";
      }
      output += "</ul>";
      document.getElementById("update").innerHTML = output;
    }
  };
  http.send();
};
