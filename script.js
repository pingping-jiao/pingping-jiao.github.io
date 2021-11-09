function xhrLoad1() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById("xhr").innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "xhr.txt", true);
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

  xhttp.open("GET", "xhr2.txt", true);
  xhttp.send();
}
