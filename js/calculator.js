//screen value
var screenValue = document.calsi.display;
//empty array
let memoryArray = []; 

var sign; 
let btnVal=0; //2nd btn value
//display numbers & operator
function displayNum(num)
{
    switch(num){
        case 'zero':
            screenValue.value += 0;
            break;
        case 'one':
            screenValue.value += 1;
            break;
        case 'two':
            screenValue.value += 2;
            break;
        case 'three':
            screenValue.value += 3;
            break;
        case 'four':
            screenValue.value += 4;
            break;
        case 'five':
            screenValue.value += 5;
            break;
        case 'six':
            screenValue.value += 6;
            break;
        case 'seven':
            screenValue.value += 7;
            break;
        case 'eight':
            screenValue.value += 8;
            break;
        case 'nine':
            screenValue.value += 9;
            break;
        case 'point':
            screenValue.value += '.';
            break;
        case 'devide':
            screenValue.value += '/';
            break; 
        case 'multiply':
            screenValue.value += '*';
            break; 
        case 'add':
            screenValue.value += '+';
            break; 
        case 'subtract':
            screenValue.value += '-';
            break;
        case 'openbracket':
            screenValue.value += '(';
            break;
        case 'closebracket':
            screenValue.value += ')';
            break; 
        case 'pi':
            screenValue.value += Math.PI;
            break;  
        case 'e':
            screenValue.value += '2.7182';
            break; 
        case 'mod':
            screenValue.value += '%';
            break;
        case 'xPowY':
            screenValue.value += '^';
            break;      
    }
}
//Arithmetic operation
function operation(oper){
    let textfind = screenValue.value;
    let textSlice = textfind.slice(1,2);
    switch(oper){
        case 'backSpace': //backspace
            const num = screenValue.value.slice(0, -1);
            screenValue.value = num;
            break;
        case 'clear': //clear
            document.querySelector("#clear").addEventListener("click", ()=>{
                screenValue.value = " "; 
            })
            break;
        case 'equal': //equal
            if(screenValue.value == " "){
                screenValue.value = eval(calsi.display.value);
            }
            else if(textSlice == "^"){
                xPowY();
            }
            else{
                screenValue.value = eval(calsi.display.value);
            }
            break;
        case 'log': //log
            if(screenValue.value == " ")
            {
                screenValue.value = 'log()';
            }
            else{
                screenValue.value = Math.log(screenValue.value);
            }
            break;
        case 'tenPowerX': //10^x
            if(screenValue.value == " ")
            {
                screenValue.value = 'x';
            }
            else{
                screenValue.value = Math.pow(10,screenValue.value);
            }
            break;
        case 'squareRoot': //square root
            if(screenValue.value == " ")
            {
                screenValue.value = 'sqrt()';
            }
            else{
                screenValue.value = Math.sqrt(screenValue.value);
            }
            break;
        case 'square': //find square
            if(screenValue.value == " ")
            {
                screenValue.value = 'pow()';
            }
            else{
                screenValue.value = Math.pow(screenValue.value,2);
            }
            break;
        case 'oneByX': //find 1/x
            if(screenValue.value == " ")
            {
                screenValue.value = '1/x';
            }
            else{
                screenValue.value = 1 / screenValue.value;
            }
            break;
        case 'abs': //find |x|
            if(screenValue.value == " ")
            {
                screenValue.value = 'abs()';
            }
            else{
                screenValue.value = Math.abs(screenValue.value);
            }
            break;
        case 'exp': //find exp
            if(screenValue.value == " ")
            {
                screenValue.value = 'exp()';
            }
            else{
                screenValue.value = Math.exp(screenValue.value);
            }
            break;
        case 'FE': //find F-E
            if(screenValue.value == " ")
            {
                screenValue.value = '0.e+0';
            }
            else{
                screenValue.value = screenValue.value + ".e+0";
            }
            break;
    }
}
//factorial find
function factorial(){
    let fact = 1;
    for(let i = 1; i <= screenValue.value; i++){
      fact *= i;
    }
    screenValue.value = fact;
}
//X power Y
function xPowY(){
    let inputValue = screenValue.value;
    let firstVal = inputValue.slice(0,1);
    let secondVal = inputValue.slice(2,3);
    screenValue.value = Math.pow(firstVal,secondVal);
}
//Trigonometry function
function trigonometry(num){
    switch(num){
        case 'sin':
            if(screenValue.value == " ")
            {
                screenValue.value = 'sin()';
            }
            else{
                let n = Math.sin(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
        case 'cos':
            if(screenValue.value == " ")
            {
                screenValue.value = 'cos()';
            }
            else{
                let n = Math.cos(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
        case 'tan':
            if(screenValue.value == " ")
            {
                screenValue.value = 'tan()';
            }
            else{
                let n = Math.tan(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
        case 'sinh':
            if(screenValue.value == " ")
            {
                screenValue.value = 'sinhs()';
            }
            else{
                let n = Math.sinh(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
        case 'cosh':
            if(screenValue.value == " ")
            {s
                screenValue.value = 'cosh()';
            }
            else{
                let n = Math.cosh(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
        case 'tanh':
            if(screenValue.value == " ")
            {
                screenValue.value = 'tanh()';
            }
            else{
                let n = Math.tanh(screenValue.value * Math.PI /180)
                screenValue.value = n;
            }
            break;
    }
}
//function 
function fun(num)
{
    switch(num)
    {
        case 'abslute':
            if(screenValue.value == " ")
            {
                screenValue.value = 'abs()';
            }
            else{
                screenValue.value = Math.abs(screenValue.value);
            }
            break;
        case 'squrX':
            if(screenValue.value == " ")
            {
                screenValue.value = '(x)';
            }
            else{
                screenValue.value = '('+screenValue.value +')';
            }
            break;
        case 'dolor':
            if(screenValue.value == " ")
            {
                screenValue.value = '$';
            }
            else{
                screenValue.value = screenValue.value*81.60 + " Rs" ;
            }
            break;
    }
}
//memory function
function memoryOperation(str){   
    switch(str){
        case 'mc':
            screenValue.value = localStorage.clear();
            break;
        case 'mAdd':
            handleMPlus();
            break;
        case 'mSubtract':
            handleMSubtract();
            break;
        case 'mr':
            mrHandle();
            //screenValue.value = localStorage.getItem("memoryValue");     
            break;
        case 'ms':
            localStorage.setItem("memoryValue",JSON.stringify(memoryArray));
            break;
    }
}
//handle M+
function handleMPlus(){  
    sign = "Plus";
    let result = screenValue.value;
    memoryArray.push(result); 
}
//handle M-
function handleMSubtract(){  
    sign = "Minus";
    let result = screenValue.value;
    memoryArray.push(result); 
}
//handle MR
function mrHandle(){
    let ans=Number.parseInt(memoryArray[0]);
    for(let i = 1; i < memoryArray.length; i++){
        if(sign=="Plus")
        {
            ans = ans + Number.parseInt(memoryArray[i]);
        }
        if(sign=="Minus")
        {
            ans = ans - Number.parseInt(memoryArray[i]);
        }
    }
    screenValue.value = ans;
}
//Tow Power nd function
function twoPowerND()
{
    if(btnVal == 0)
    {
        document.getElementById("square").value = "x'";
        document.getElementById("squareRoot").value = "&";
        document.getElementById("openbracket").value = "⇒";
        document.getElementById("closebracket").value = "∑";
        btnVal++;
    }
    else
    {
        document.getElementById("square").value = "x²";
        document.getElementById("squareRoot").value = "2√x";
        document.getElementById("openbracket").value = "(";
        document.getElementById("closebracket").value = ")";
    }  
}




