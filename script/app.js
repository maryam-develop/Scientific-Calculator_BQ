function getNum(num){
    console.log(num);
    document.getElementById('result').value += num;

}

function clearScreen(){
    document.getElementById('result').value ="";
} 
function removeNumber(){
    var res= document.getElementById('result').value
    document.getElementById('result').value =document.getElementById('result').value.slice(0,res.length-1);
}

function getAnswer(){
    document.getElementById('result').value =eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value)
}

function getNumPi(num){
    document.getElementById('result').value = Math.PI += num;
   
}
function getNum2Pi(num){
    var Pi2 =Math.PI + Math.PI ;
    document.getElementById('result').value = Pi2 +=num;
   
}

function getNumE(num){
    document.getElementById('result').value= Math.sqrt(document.getElementById('result').value) 
   
}
function getNumSqrt(){
    document.getElementById('result').value= Math.sqrt(document.getElementById('result').value) 
}
function getCos(){
    document.getElementById('result').value= Math.cos(document.getElementById('result').value)
}
function getSin(){
    document.getElementById('result').value= Math.sin(document.getElementById('result').value)
}
function getTan(){
    document.getElementById('result').value= Math.tan(document.getElementById('result').value)
}
function getCosh(){
    document.getElementById('result').value= Math.cos(document.getElementById('result').value)
}
function getSinh(){
    document.getElementById('result').value= Math.sinh(document.getElementById('result').value)
}
function getTanh(){
    document.getElementById('result').value= Math.tanh(document.getElementById('result').value)
}
function getTanh(){
    document.getElementById('result').value= Math.tanh(document.getElementById('result').value)
}
function getNumhalf(){
    document.getElementById('result').value=document.getElementById('result').value * (1/2)
}
function getNumLog(){
    document.getElementById('result').value = Math.log(document.getElementById('result').value)
}
function getNumExp(){
    document.getElementById('result').value= Math.exp(document.getElementById('result').value)
}
function getNumlog10(){
    document.getElementById('result').value = Math.log10(document.getElementById('result').value)
}
function getNumlog2(){
    document.getElementById('result').value = Math.log2(document.getElementById('result').value)
}
// function getNumFact(num){
//   var fact = num;
//   for (var i = 1; i <= num-1; i++) {
//   return  fact = fact * i;
//     }
//     return 0
// }
    
//     document.getElementById('result').value = getNumFact(document.getElementById('result').value);
    
