var screenValue = document.calsi.display;
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
    }
}
//Arithmetic operation
function operation(oper){
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
            else{
                screenValue.value = eval(calsi.display.value);
            }
            break;
    }
}


