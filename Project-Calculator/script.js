const calcBody = document.getElementById("input");
const outPut = document.getElementById("output");

const calcData = [
    { id: "clear", value: "C" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "*" },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "subtract", value: "-" },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "add", value: "+" },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "equals", value: "=" },
    { id: "zero", value: 0 },
    { id: "decimal", value: "." }
]

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["/", "*", "-", "+"];
const decimal = ".";
const clear = "C";
const result = "=";


calcData.forEach((button) => {
    const btn = document.createElement('button');
    btn.id = button.id;
    btn.textContent = button.value;
    calcBody.appendChild(btn);
    btn.addEventListener("click", ()=> {
        if (numbers.includes(button.value)) {
            outPut.value += button.value
        }
        if (clear.includes(button.value)) {
            outPut.value = "";
        }
        if (operators.includes(button.value)) {
            outPut.value += button.value
        }
        if (decimal.includes(button.value)) {
            outPut.value += button.value
        }
        if (result.includes(button.value)) {
            let result = eval(outPut.value)
            outPut.value = result;
        }
    })
});
