const calculate = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let add = document.getElementById("add");
    let subtract = document.getElementById("subtract");
    let multiply = document.getElementById("multiply");
    let operators = document.getElementById("operators");
    let output = document.getElementById("output");
    if (operators.value === add.value) {
        let result = parseInt(num1) + parseInt(num2)
        console.log(result);
        output.innerHTML = result;
    } else if (operators.value === subtract.value) {
        output.innerHTML = parseInt(num1) - parseInt(num2);
    } else if (operators.value === multiply.value) {
        output.innerHTML = parseInt(num1) * parseInt(num2);
    } else {
        output.innerHTML = parseInt(num1) / parseInt(num2);
    };
};