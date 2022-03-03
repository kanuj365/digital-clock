function clock () {
var date =new Date();
 var hours=date.getHours();
 var min=date.getMinutes();
 var sec=date.getSeconds();
 var half="";
 if(hours>=12){
     half="pm"
 }else{
     half="am"
 }

document.getElementById("hours").innerHTML=hours;
document.getElementById("min").innerHTML=min;
document.getElementById("sec").innerHTML=sec;
document.getElementById("half").innerHTML=half;
setTimeout(clock,500);
}
clock();