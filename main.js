var para="";
function join() {
para_1=document.getElementById("para_1").value;
para_2=document.getElementById("para_2").value;
para_3=document.getElementById("para_3").value;
para_4=document.getElementById("para_4").value;
para=para_1+". "+para_2+". "+para_3+". "+para_4+".";
document.getElementById("all").innerHTML=para;
}