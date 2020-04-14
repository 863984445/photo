function checkpassword(){
var pwd="712630";//你和朋友约定的密码，写死的
var inpwd=document.getElementById("password").value;//获取输入的代码
if(inpwd == pwd){ //判断一下是否一样
window.location.href="HTML/主页.html";
}
}
