const calcBody = document.getElementById("input");
const outPut = document.getElementById("output");

const calcData = [
    { id: "clear", value: "C" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "*" },
    { id: "num", value: 7 },
    { id: "num", value: 8 },
    { id: "num", value: 9 },
    { id: "subtract", value: "-" },
    { id: "num", value: 4 },
    { id: "num", value: 5 },
    { id: "num", value: 6 },
    { id: "add", value: "+" },
    { id: "num", value: 1 },
    { id: "num", value: 2 },
    { id: "num", value: 3 },
    { id: "equals", value: "=" },
    { id: "num", value: 0 },
    { id: "decimal", value: "." }
]

const buttons = [];
calcData.forEach((button) => {
    const btn = document.createElement('button');
    btn.id = button.id;
    btn.textContent = button.value;
    calcBody.appendChild(btn);
    buttons.push(btn);
});

const selector = document.getElementById("equals");

selector.addEventListener("click", () => {
    console.log(`Input: ${userNum1}`)
    console.log(`Input: ${operatorInput}`)
    console.log(`Input: ${userNum2}`)
});

let calcS = [];
let currentOperation = null;

const numBtn = document.querySelectorAll("#num");
numBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let values = btn.textContent;
        if (outPut.value === "" && values === "0") {
            return;
        }
        outPut.value += values;
        if (calcS.length === 0 || !isNaN(outPut.value)) {
            calcS[0] = parseFloat(outPut.value);
        }
        console.log(calcS)
    });
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    outPut.value = "";
    calcS = [];
})

const decimalBtn = document.getElementById("decimal");
decimalBtn.addEventListener("click", () => {
    if (outPut.value === "") {
        outPut.value = "0.";
    } else if (!outPut.value.includes(".")) {
        outPut.value += ".";
    }
});

function setOperation(operation) {
    if (outPut.value === "") return;
    calcS.push(parseFloat(outPut.value)); 
    currentOperation = operation;
    outPut.value = "";
}

document.getElementById("add").addEventListener("click", () => setOperation(add));
document.getElementById("subtract").addEventListener("click", () => setOperation(subtract));
document.getElementById("multiply").addEventListener("click", () => setOperation(multiply));
document.getElementById("divide").addEventListener("click", () => setOperation(divide));

function calculateResult() {
    if (calcS.length < 1 || !currentOperation) return; 
    calcS.push(parseFloat(outPut.value)); 
    let result = currentOperation(calcS[0], calcS[1]); 
    outPut.value = Math.round(result * 100) / 100; 
    calcS = []; 
    currentOperation = null; 
}

document.getElementById("equals").addEventListener("click", calculateResult);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}