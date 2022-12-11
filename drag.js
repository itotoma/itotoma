var move_flg = "";
var move_start_x = 0;
var move_start_y = 0;
// start drag
window.onmousedown = function(e) {
  move_flg = "true";
  move_start_x = e.clientX - parseInt(document.getElementById("obj").style.left.replace("px",""));
  move_start_y = e.clientY - parseInt(document.getElementById("obj").style.top.replace("px",""));
}
// end drag
window.onmouseup = function(e) {
  move_flg = "false";
}
// dræg 
window.onmousemove = function(e) {
  if(move_flg == "true") {
    document.getElementById("obj").style.left = (e.clientX - move_start_x) + "px";
    document.getElementById("obj").style.top = (e.clientY - move_start_y) + "px";    
  }
}
