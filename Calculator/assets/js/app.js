
let add = function (num1, num2) {
    return num1 + num2;
};
let subtract = function (num1, num2) {
    return num1 - num2;
};
let multiply = function (num1, num2) {
    return num1 * num2;
};
let divide = function (num1, num2) {
    if (num2 === 0) {
        return "Can't divide by zero";
    }
    return num1 / num2;
};


let pow = function (num1, num2) {
    return Math.pow(num1, num2);
};



const myCalc = {
    num1: null,
    operation: null,
    resultDisplay: '0',
    cont: false,

};
function display() {

    const display = document.querySelector('#result');
    display.value = myCalc.resultDisplay;
}

display();


const btns = document.querySelector('.calccc');
btns.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains('op')) {
        operate(target.value);
        display();
        return;
    }

    if (target.classList.contains('decimalPt')) {
        decinp(target.value);
        display();
        return;
    }

    if (target.classList.contains('clear')) {
        resetmyCalc();
        display();
        return;
    }

    diginp(target.value);
    display();
});



function diginp(digit) {
    const { resultDisplay, cont } = myCalc;

    if (cont === true) {
        myCalc.resultDisplay = digit;
        myCalc.cont = false;
    } else {
        myCalc.resultDisplay = resultDisplay === '0' ? digit : resultDisplay + digit;
    }

    console.log(myCalc);


}

function decinp(dot) {

    if (myCalc.cont === true) {
        myCalc.resultDisplay = '0.'
        myCalc.cont = false;
        return
    }

    if (!myCalc.resultDisplay.includes(dot)) {
        myCalc.resultDisplay += dot;
    }

}

function operate(nxtOp) {
    const { num1, resultDisplay, operation } = myCalc
    const input = parseFloat(resultDisplay);

    if (operation && myCalc.cont) {
        myCalc.operation = nxtOp;
        console.log(myCalc);
        return;
    }

    if (num1 == null && !isNaN(input)) {
        myCalc.num1 = input;
    } else if (operation) {
        const result = calculate(num1, input, operation);
        if (result === "Can't divide by zero") {
            myCalc.resultDisplay = 'Error';


            setTimeout(function () {
                resetmyCalc();
                display();
            }, 1000);

        } else {
            myCalc.resultDisplay = `${parseFloat(result.toFixed(6))}`;
            myCalc.num1 = result;
        }

    }

    myCalc.cont = true;
    myCalc.operation = nxtOp;

}

function calculate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else if (operator === '^') {
        return pow(num1, num2);
    }


    return num2;
}

function resetmyCalc() {
    myCalc.num1 = null;
    myCalc.operation = null;
    myCalc.resultDisplay = '0';
    myCalc.cont = false;


}
