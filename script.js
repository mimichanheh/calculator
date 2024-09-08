// Calculator's functions

function add(num1,num2){
    return num1+num2;
}
function substract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2===0){
        return 0
    }
    else{
        return num1/num2;
    }
}

function operate(num1,operator,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        break;
        case '-':
            return substract(num1,num2);
        break;
        case '*':
            return multiply(num1,num2);
        break;
        case '/':
            return divide(num1,num2);
        break;
        default:
            return 0
    }
}


const displayResult=document.querySelector(".result");
const digitBtns=document.querySelectorAll("#digitButton")
const deleteBtn=document.querySelector("#deleteButton")
const clearBtn=document.querySelector("#clearButton")
const expBtn=document.querySelector("#expButton")
const resultBtn=document.querySelector("#resultButton")
const decimalBtn=document.querySelector("#decimalButton")
const allOperatorBtns=document.querySelectorAll("#operator")

let num1=0,num2=0,operator=0;
let resultValue=0;
let str=''; // temporary string to store the user's input into variables converted to numbers

digitBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        str+=btn.textContent
        if(operator===0){ // the input will be stored in num1 until an operator is entered
            num1=parseInt(str);
        }
        else{
            num2=parseInt(str);
        }
     displayResult.textContent=str})
})

allOperatorBtns.forEach(operatorBtn=>{
    operatorBtn.addEventListener("click",()=>{
    if(num1!==0 && num2!==0 && typeof num1==='number' && typeof num2==="number"){
        //if the user clicked an operator button insted of '=' after typing the num2, the result will be evaluated 
        // and displayed, and the result will be assigned to num1 to perform the next operation
        resultValue=operate(num1,operator,num2)
        displayResult.textContent=resultValue
        num1=resultValue
    }
    operator=operatorBtn.textContent
    str='' // reinitialized str to empty string to store the value of num2 after reading the operator
})})

decimalBtn.addEventListener('click',()=>{})

clearBtn.addEventListener("click",()=>{
    displayResult.textContent=' '
    str='';
    resultValue=0
    num1=0
    num2=0
    operator=0
})

resultBtn.addEventListener('click',()=>{
    resultValue=operate(num1,operator,num2)
    if(resultValue%1!==0){
        resultValue=resultValue.toFixed(12);
    }
    if(num2===0 && operator==='/'){
        displayResult.textContent='ERROR';
    }
    else{
        displayResult.textContent=resultValue;
    }
})

deleteBtn.addEventListener("click",()=>{ 
    if(resultValue.toString()===displayResult.textContent){}
    else{
    // I converted these strings to arrays first then deleted the last entered digit
    let arr=displayResult.textContent.split('');
    arr.pop()
    displayResult.textContent=arr.join('')
    // made changes on str too to update the value of num1 or num2
    let arr2=str.split('')
    arr2.pop()
    str=arr2.join("")
    if(operator===0){
        num1=parseInt(str);
    }
    else{
        num2=parseInt(str);
    }
}
})