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
    document.getElementById('result').value = Math.E += num;
   
}