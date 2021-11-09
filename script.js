function xhrLoad1() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById("xhr").innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "www.google.com", true);
  xhttp.send();
}

function xhrLoad2() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById("xhr").innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "www.dynatrace.com", true);
  xhttp.send();
}
