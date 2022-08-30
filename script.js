let firstOperand = "";
let secondOperand = "";
let firstOperator = "";
let secondOperator = "";
let evaluation = "";
const operandButtons = document.querySelectorAll(".operandButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const enterButton = document.querySelector(".enterButton");
const clearButton = document.querySelector("#clear")
const deleteButton = document.querySelector(".deleteButton");
const decimalButton = document.querySelector(".periodButton");
document.getElementById("numberText").innerHTML = "0";

add = (first,second) =>{
    return (first+second);
}
subtract = (first,second) =>{
    return (first-second);
}
multiply = (first,second) =>{
    return (first*second);
}
divide = (first,second) =>{
        return(first/second);
    }

operate = (operand,first,second) =>{
    evaluation = ""
    switch (operand){
        case "+":
            evaluation = add(first,second);
            break;
        case "-":
            evaluation = subtract(first,second);
            break;
        case "*":
            evaluation = multiply(first,second);
            break;
        case "/":
            evaluation = divide(first,second);
            break;
        default:
            break;                
    }
}
clear = ()=>{
    firstOperand = "";
    secondOperand = "";
    firstOperator = "";
    secondOperator = "";
    document.getElementById("numberText").innerHTML = "0";
}

operandButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if (firstOperator == ""){
            buttonText = button.textContent;
            document.getElementById("numberText").innerHTML = "";
            firstOperand = firstOperand.concat(buttonText);
            document.getElementById("numberText").innerHTML = firstOperand;
        }
        else {
            buttonText = button.textContent;
            secondOperand = secondOperand.concat(buttonText);
            document.getElementById("numberText").innerHTML = `${firstOperand} ${firstOperator} ${secondOperand}`;
        }
    })})

operatorButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
    if (firstOperator == ""){
        firstOperator = button.textContent;
    }
    else{
        secondOperator = button.textContent;
    }
})})

clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', ()=>{
 if (firstOperator==""){
        if(firstOperand.includes(".")){
            return;}
        console.log("hello");
        firstOperand = firstOperand.concat(".")
        document.getElementById("numberText").innerHTML = firstOperand;
    }
    else{
        if(secondOperand.includes(".")){
            return;}
        secondOperand = secondOperand.concat(".")
        document.getElementById("numberText").innerHTML = `${firstOperand} ${firstOperator} ${secondOperand}`;
    }
})

deleteButton.addEventListener('click',()=>{
    if (firstOperator===""){
        firstOperand = "";
        document.getElementById("numberText").innerHTML = firstOperand
    }
    else
    {
        secondOperand = "";
        document.getElementById("numberText").innerHTML = `${firstOperand} ${firstOperator} ${secondOperand}`
    }
})

enterButton.addEventListener('click',()=>{
    console.log(secondOperand);
    if (firstOperator===""|| firstOperand === ""|| secondOperand === ""){
        return;
    }
    else if(firstOperator==="/" && secondOperand=="0"){
        clear();
        document.getElementById("numberText").innerHTML = "ERROR DIV BY 0"
    }
    else {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        operate(firstOperator,firstOperand,secondOperand);
        clear();
        evaluation = parseFloat(evaluation);
        evaluation = parseFloat(evaluation.toFixed(2));
        document.getElementById("numberText").innerHTML = evaluation;
        
    }
})



