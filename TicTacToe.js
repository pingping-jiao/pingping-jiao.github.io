//dtrum.enable();
//Let's explore some events samples!
//add cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
document.getElementById("test").value = 0;
setCookie("foo", "a-b-c", 3);
setCookie("cookie-test", "a-b-c", 3);
var cells = document.getElementsByTagName("td");
// var cellOne = document.querySelectorAll("td")[0];
// Hover (mouseover and mouseout)
function fireEvent(element){
  element.addEventListener("click",function(){
    if (element.textContent === "") {
      element.textContent = "X";
      element.style.color = 'blue';
    }
    else if (element.textContent === "X") {
      element.textContent = "O";
      element.style.color = 'red';
    }
    else {
      element.textContent = " ";

    }

  })

}

for (var i = 0; i < cells.length; i++) {
fireEvent(cells[i]);
}


var restart = document.getElementById("restart");

restart.addEventListener("click",function(){
for (var i = 0; i < cells.length; i++) {
  cells[i].textContent = "";
}})
