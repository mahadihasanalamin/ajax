function showUsers(str) {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onload=function() {
    if (this.status==200) {
      document.getElementById("userlist").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","searchUser.php?name="+str,true);
  xmlhttp.send();
}