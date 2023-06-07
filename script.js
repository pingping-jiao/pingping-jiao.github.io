function xhrLoad1() {
  var xhttp = new XMLHttpRequest();
   test
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById("xhr1").innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "connect-four.html", true);
  xhttp.send();
}

function xhrLoad2() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "css.html", true);
  xhttp.send();
}
