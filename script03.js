function add(x, y){
    let sum = parseFloat(x) + parseFloat(y);
    let z = parseFloat(x);
    console.log({z, y});
    return sum;
}

function subtract(x, y){
    let difference = x - y;
    return difference;
}

function multiply(x, y){
    let product = x * y;
    return product;
}

function divide(x, y){
    let quotient = x / y;
    if(y === "0"){
        quotient = "noSoup4u"
    }
    return quotient;
}

function operate(operator, x, y){
    if(operator == 'addBtn'){
        return add(x, y);
    }else if(operator == 'subtractBtn'){
        return subtract(x, y);
    }else if(operator == 'multiplyBtn'){
        return multiply(x, y);    
    }else if(operator == 'divideBtn'){
        return divide(x, y);
    }
}
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let subtractBtn = document.getElementById('subtractBtn');
let addBtn = document.getElementById('addBtn');
let equalsBtn = document.getElementById('equalsBtn');
let clearBtn = document.getElementById('clearBtn');
let plusMinusBtn = document.getElementById('plusMinusBtn');
let percentBtn = document.getElementById('percentBtn');
let screen = document.getElementById('screen');

let result = "";
let holderFlag = false;
let secondHolderFlag = false;
let decimalFlag = false;
let operatorFlag = false;
let tempOperatorFlag = false;
let resultFlag = false;

let btnId = "";
let holder = '0';
let lstBtn = "";
let secondHolder = '0';
let operation = "";
let tempOperation = "";

let calculator = document.getElementsByClassName('btn');
let isNumber = null;

let isOperator = null;
let Numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'decimal'];
let operators = ['divideBtn', 'multiplyBtn', 'subtractBtn', 'addBtn'];

let selectedOperation = "";
let holdButtonDown = function(){
    if(operation === 'divideBtn'){
        divideBtn.classList.add('selected');
    }else if(operation !== 'divideBtn' || resultFlag === true){
        divideBtn.classList.remove('selected');
    }

    if(operation ==='multiplyBtn'){
        multiplyBtn.classList.add('selected');
    }else if(operation !== 'multiplyBtn'){
        multiplyBtn.classList.remove('selected');
    }
    
    if(operation ==='subtractBtn'){
        subtractBtn.classList.add('selected');
    }else if(operation !== 'subtractBtn'){
        subtractBtn.classList.remove('selected');
    }

    if(operation ==='addBtn'){
        addBtn.classList.add('selected');
    }else if(operation !== 'addBtn'){
        addBtn.classList.remove('selected');
    }

    if(btnId === 'equalsBtn'){
        divideBtn.classList.remove('selected');
        multiplyBtn.classList.remove('selected');
        subtractBtn.classList.remove('selected');
        addBtn.classList.remove('selected');
    }
    
    
    console.log({operation})
    
}




function btnListener(){
    for(let i=0;i<calculator.length;i++){
        calculator[i].addEventListener('click', function(e){
            btnId = this.id;
            if(Numbers.includes(btnId) && holderFlag === false){
                holder = whichNumber().toString(); 
                holderFlag = true;
                console.log({holder, secondHolder, decimalFlag, holderFlag});
                screen.innerHTML =  holder;
                if(holder.includes(".")){
                    decimalFlag = true;
                    console.log({holder, secondHolder, decimalFlag})
                } 
            }else if(Numbers.includes(btnId) && resultFlag === true && holder.includes(".") === false){
                holder = whichNumber().toString();
                secondHolder = "";
                //resultFlag = false;
                secondHolderFlag = false;
                screen.innerHTML = holder;
                if(holder.includes(".")){
                    decimalFlag = true;
                    console.log({holder, secondHolder, decimalFlag, holderFlag});
                }
            }else if(Numbers.includes(btnId) && resultFlag === true && holder.includes(".")){
                holder += "" + whichNumberDecimal().toString();
                secondHolder = "";
                //resultFlag = false;
                secondHolderFlag = false;
                screen.innerHTML = holder;
            }
            else if(Numbers.includes(btnId) && holderFlag === true && operatorFlag === false && decimalFlag === false){
                holder += "" + whichNumber();
                console.log({holder, secondHolder, decimalFlag})
                screen.innerHTML =  holder;
                if(holder.includes(".")){
                    decimalFlag = true;
                    console.log({holder, secondHolder, decimalFlag})
                }
            }else if(Numbers.includes(btnId) && holderFlag === true && operatorFlag === false && decimalFlag === true){
                holder += '' + whichNumberDecimal();
                console.log({holder, secondHolder, decimalFlag})
                screen.innerHTML =  holder;
            }else if(Numbers.includes(btnId) && operatorFlag === true && secondHolderFlag === false && decimalFlag === false){
                secondHolder = whichNumber().toString();
                secondHolderFlag = true;    
                console.log({holder, secondHolder, decimalFlag, holderFlag, operatorFlag, secondHolderFlag})
                screen.innerHTML = secondHolder;
                if(secondHolder.includes(".")){
                    decimalFlag = true;
                    console.log({holder, secondHolder, decimalFlag, holderFlag, operatorFlag, secondHolderFlag})
                }
            }else if(Numbers.includes(btnId) && operatorFlag === true && secondHolderFlag === true && decimalFlag === true){
                secondHolder += "" + whichNumberDecimal();
                screen.innerHTML =  secondHolder;
                console.log({holder, secondHolder, decimalFlag})
            }else if(Numbers. includes(btnId) && operatorFlag === true && secondHolderFlag === true && decimalFlag === false){
                secondHolder += "" + whichNumber();
                screen.innerHTML =  secondHolder;
                console.log({holder, secondHolder, decimalFlag})
                if(secondHolder.includes(".")){
                    decimalFlag = true;
                    console.log({holder, secondHolder, decimalFlag})
                }
            }
            if(operatorFlag === true){
                holdButtonDown();
            }else if(resultFlag === true){
                holdButtonDown();
            }
            if(btnId === 'clearBtn'){
                    divideBtn.classList.remove('selected');
                    multiplyBtn.classList.remove('selected');
                    subtractBtn.classList.remove('selected');
                    addBtn.classList.remove('selected');

                }
        });
                
    }
}

clearBtn.addEventListener('click', function(){
    result = "";
    holderFlag = false;
    secondHolderFlag = false;
    decimalFlag = false;
    operatorFlag = false;
    tempOperatorFlag = false;
    resultFlag = false;
    holder = "0";
    secondHolder = "0";
    operation = "";
    tempOperation = "";
    screen.innerHTML =  holder;
    console.log({result, holder, secondHolder, operation, tempOperation});
});

plusMinusBtn.addEventListener('click', function(){
    if(holderFlag === false){
        holder *= -1;
        screen.innerHTML = holder;
        console.log({holder});
    }else if(holderFlag === true && secondHolderFlag === false){
        holder *= -1;
        screen.innerHTML = holder;
        console.log({holder});
    }else if(secondHolderFlag === true){
        secondHolder *= -1;
        screen.innerHTML = secondHolder;
        console.log({secondHolder});
    }
});

percentBtn.addEventListener('click', function(){
    if(holderFlag === true){
        holder *= .01;      
        screen.innerHTML = holder;
        console.log({holder});
    }else if(secondHolderFlag === true){
        secondHolder *= .01;
        screen.innerHTML = secondHolder;
        console.log({secondHolder});
    }
});

equalsBtn.addEventListener('click', function(){
    if(holderFlag === false){
        result = add(holder, secondHolder);
        holder = result.toString();
        screen.innerHTML = holder;
        console.log({result, holder, secondHolder});
    }else if(holderFlag === true && operatorFlag === false){
        result = add(holder, secondHolder);
        holder = result.toString();
        decimalFlag = false;
        tempOperatorFlag = false;
        screen.innerHTML = holder;
        console.log({result})
    }else if(holderFlag === true && operatorFlag === true && tempOperatorFlag === false){
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        decimalFlag = false;
        secondHolderFlag = false;
        resultFlag = true;
        screen.innerHTML = holder;
        console.log({result, operation, holder, secondHolder});
    }else if(operatorFlag === true && tempOperatorFlag === true){
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        decimalFlag = false;
        operation = tempOperation;
        tempOperation = "";
        tempOperatorFlag = false;
        secondHolderFlag = false;
        resultFlag = true;
        screen.innerHTML = holder;
        console.log({result, holder, secondHolder,})
    }
    console.log({resultFlag})
});

divideBtn.addEventListener('click', function(){
    if(operatorFlag === false){
        operation = 'divideBtn';
        operatorFlag = true;
        decimalFlag = false;
        console.log({operation, tempOperation, operatorFlag, decimalFlag});
    }else if(operatorFlag === true && resultFlag === true){
        operation = 'divideBtn';
        resultFlag = false;
        decimalFlag = false;
        console.log({result, operation, tempOperation, operatorFlag, decimalFlag});
    }else if(operatorFlag === true && tempOperatorFlag === false){
        tempOperation = 'divideBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        operation = tempOperation;
        tempOperatorFlag = true;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && tempOperatorFlag === true){
        tempOperation = 'divideBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        operation = tempOperation;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }
});

multiplyBtn.addEventListener('click', function(){
    if(operatorFlag === false){
        operation = 'multiplyBtn';
        operatorFlag = true;
        decimalFlag = false;
        console.log({operation, tempOperation, tempOperatorFlag ,decimalFlag});
    }else if(operatorFlag === true && resultFlag === true){
        operation = 'multiplyBtn';
        resultFlag = false;
        decimalFlag = false;
        console.log({result, operation, tempOperation, operatorFlag, decimalFlag});
    }else if(operatorFlag === true && resultFlag === false){
        tempOperation = 'multiplyBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        operation = tempOperation;
        tempOperatorFlag = true;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && tempOperatorFlag === true){
        tempOperation = 'multiplyBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result.toString();
        operation = tempOperation;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }

});

subtractBtn.addEventListener('click', function(){
    if(operatorFlag === false){
        operation = 'subtractBtn';
        operatorFlag = true;
        decimalFlag = false;
        console.log({operation, tempOperation, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && resultFlag === true){
        operation = 'subtractBtn';
        resultFlag = false;
        decimalFlag = false;
        console.log({result, operation, tempOperation, operatorFlag, decimalFlag});
    }else if(operatorFlag === true){
        tempOperation = 'subtractBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result;
        operation = tempOperation;
        tempOperatorFlag = true;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && tempOperatorFlag === true){
        tempOperation = 'subtractBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result;
        operation = tempOperation;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }


});

addBtn.addEventListener('click', function(){
    if(operatorFlag === false){
        operation = 'addBtn';
        operatorFlag = true;
        decimalFlag = false;
        console.log({operation, tempOperation, operatorFlag, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && resultFlag === true){
        operation = 'addBtn';
        resultFlag = false;
        decimalFlag = false;
        console.log({result, operation, tempOperation, operatorFlag, decimalFlag});
    }else if(operatorFlag === true){
        tempOperation = 'addBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result;
        operation = tempOperation;
        tempOperatorFlag = true;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }else if(operatorFlag === true && tempOperatorFlag === true){
        tempOperation = 'addBtn';
        console.log({operation, tempOperation});
        result = operate(operation, holder, secondHolder);
        holder = result;
        operation = tempOperation;
        decimalFlag = false;
        secondHolderFlag = false;
        screen.innerHTML = holder;
        console.log({result, operation, tempOperation, tempOperatorFlag, decimalFlag});
    }
})

btnListener();


function handleNumbers(){
    if(isNumber === true){
        enterHolders();
    }
}

function numCheck(){
    if(Numbers.includes(btnId)){
        isNumber = true;
        lstBtn = btnId;
        console.log({isNumber});
        console.log({lstBtn});
        console.log({holder});
        console.log({secondHolder});
       // return isNumber;
    }else{
        isNumber = false;
        lstBtn = btnId;
        console.log({isNumber});
        console.log({lstBtn});
        console.log({holder});
        console.log({secondHolder});
     //   return false;
    }
}

function opCheck(){
    if(operators.includes(btnId) && operatorFlag === false){
        isOperator = true;
        console.log({isOperator});
        return isOperator;
    }else if(operators.includes(btnId) && operatorFlag === true && tempOperatorFlag === false){
        isOperator = true;
    }else if(operators.includes(btnId) && operatorFlag === true && tempOperatorFlag === true){
        isOperator = true;
    }
    else{
        isOperator = false;
        console.log({isOperator});
        return isOperator; 
    }
}

function setUpOperation(){
    if(isOperator === true && operatorFlag === false){
        operation = whichOperator();
        operatorFlag = true;
        console.log({operation});
        return operation;
    }else if(isOperator === true && operatorFlag === true){ 
        tempOperation = whichTempOperator();
        tempOperatorFlag = true;
        console.log({operation});
        console.log({tempOperation});
        return tempOperation;
    }
}

function runOnSecondClick(){
    result = operate(operation, holder, secondHolder);
    holder = result;
    secondHolderFlag = false;
    decimalFlag = false;
    //operation = tempOperation;
    //operation = tempOperation;
    console.log({result});
    console.log({tempOperation});
    console.log({operation});
    console.log({holder});
   
}
 
function checkVariables(){
    if(result !== ""){
        holder = result.toString();
        secondHolder = 0;
        console.log({holder});
        console.log({secondHolder});
    }
}

function enterHolders(){
    if(holderFlag === false && decimalFlag === false && operatorFlag === false){
        holder = whichNumber().toString();
        holderFlag = true;

        console.log({holder});
        console.log({secondHolder});
        console.log({holderFlag});
        console.log({decimalFlag});
    }else if(holderFlag === true && decimalFlag === false && operatorFlag === false){
        holder += "" + whichNumber();
        console.log({holder});
        console.log({secondHolder});
        console.log({holderFlag});
        console.log({decimalFlag});
    }else if(holderFlag === true && decimalFlag === true && operatorFlag === false){ 
        holder += "" + whichNumberDecimal();
        console.log({holder});
        console.log({secondHolder});
        console.log({decimalFlag})
        console.log({holderFlag});
    }else if(secondHolderFlag === false && operatorFlag === true && decimalFlag === false){
        secondHolder = whichNumber().toString();

        //also change operator to tempOperator
        secondHolderFlag = true;
        console.log({tempOperation});
        console.log({operation});
        console.log({secondHolder});
        console.log({holder})
        console.log({holderFlag});
    }else if(secondHolderFlag === false && operatorFlag === true && tempOperatorFlag === false && decimalFlag === false){
        secondHolder = whichNumber().toString();
        console.log({secondHolder});
    }
    else if(secondHolderFlag === true && decimalFlag === false && tempOperatorFlag === false){
        secondHolder += "" + whichNumber();
        operator = tempOperation;
        console.log({secondHolder});
        console.log({tempOperation});
        console.log({operation});
        console.log({holder}); 
    }else if(secondHolderFlag === true && decimalFlag === true){
        secondHolder += "" + whichNumberDecimal();
        console.log({tempOperation});
        console.log({secondHolder});
        console.log({operation});
        console.log({holder});
    }
}



function whichNumberDecimal(){
    if(btnId === 'zero'){
        numBtn = 0;
        return numBtn;
    }else if(btnId === 'one'){
        numBtn = 1;
        return numBtn;
    }else if(btnId === 'two'){
        numBtn = 2;
        return numBtn;
    }else if(btnId === 'three'){
        numBtn = 3;
        return numBtn;
    }else if(btnId === 'four'){
        numBtn = 4;
        return numBtn;
    }else if(btnId === 'five'){
        numBtn = 5;
        return numBtn;
    }else if(btnId === 'six'){
        numBtn = 6;
        return numBtn;
    }else if(btnId === 'seven'){
        numBtn = 7;
        return numBtn;
    }else if(btnId === 'eight'){
        numBtn = 8;
        return numBtn;
    }else if(btnId === 'nine'){
        numBtn = 9;
        return numBtn;
    }else if(btnId === 'decimal'){
        return "";
    }
}
function whichNumber(){
    let numBtn = 0;
    if(btnId === 'zero'){
        numBtn = 0;
        return numBtn
    }else if(btnId === 'one'){
        numBtn = 1;
        return numBtn;
    }else if(btnId === 'two'){
        numBtn = 2;
        return numBtn;
    }else if(btnId === 'three'){
        numBtn = 3;
        return numBtn;
    }else if(btnId === 'four'){
        numBtn = 4;
        return numBtn;
    }else if(btnId === 'five'){
        numBtn = 5;
        return numBtn;
    }else if(btnId === 'six'){
        numBtn = 6;
        return numBtn;
    }else if(btnId === 'seven'){
        numBtn = 7;
        return numBtn;
    }else if(btnId === 'eight'){
        numBtn = 8;
        return numBtn;
    }else if(btnId === 'nine'){
        numBtn = 9;
        return numBtn;
    }else if(btnId === 'decimal'){
        numBtn = ".";
        return numBtn;
    }
    console.log({numBtn})
}



