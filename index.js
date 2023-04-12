var num1=Math.floor(Math.random()*13);
var num2=Math.floor(Math.random()*13);

document.querySelectorAll("h1")[0].innerHTML= `${num1} X ${num2}`;
console.log(num1)

var respone1=Math.floor(Math.random()*150);
var respone2=Math.floor(Math.random()*150);
var respone3=Math.floor(Math.random()*150);
var goodReponse=num1*num2;




document.querySelectorAll("button")[0].innerHTML=`${respone1}`;
document.querySelectorAll("button")[1].innerHTML=`${goodReponse}`;
document.querySelectorAll("button")[2].innerHTML=`${respone3}`;
document.querySelectorAll("button")[3].innerHTML=`${respone2}`;




document.querySelectorAll("button")[0].addEventListener("click",handclick);

function handclick(){
var answere=goodReponse;
if(answere===respone1){
  alert("yes");
}else{
  alert("Sorry Tu As Echoue 😢🤦‍♂️");
}
}

document.querySelectorAll("button")[1].addEventListener("click",hand1click);


function hand1click(){
var answ=goodReponse;
if(true){
  alert("Yes tu as gagne ✔💪");
}else{
  alert("Sorry Tu As Echoue 😢🤦‍♂️");
}
}

document.querySelectorAll("button")[2].addEventListener("click",hand2click);

function hand2click(){
var answe=goodReponse;
if(answe===respone3){
  alert("yes");
}else{
  alert("Sorry Tu As Echoue 😢🤦‍♂️");
}
}


document.querySelectorAll("button")[3].addEventListener("click",hand3click);

function hand3click(){
var answer=goodReponse;
if(answer===respone2){
  alert("yes");
}else{
  alert("Sorry Tu As Echoue 😢🤦‍♂️");
}
}
