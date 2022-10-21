"use strict";
window.onload = init;
function init()
{
    const btnCalculate1 = document.getElementById("btnCalculate1");
    btnCalculate1.onclick = btnCalculate1OnClicked;
}

function btnCalculate1OnClicked()
{
const inputCelsius = document.getElementById("inputCelsius");
let num1 = Number(inputCelsius.value);
let answer = ((num1 * 1.80000) + 32);
const outputFahrenheit = document.getElementById("outputFahrenheit");
outputFahrenheit.innerHTML = answer;
}




