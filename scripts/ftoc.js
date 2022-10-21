"use strict";
window.onload = init; 
function init()
{
    const btnCalculate = document.getElementById("btnCalculate");
    btnCalculate.onclick = btnCalculateOnClicked;
}

function btnCalculateOnClicked()
{
    const inputFahrenheit = document.getElementById("inputFahrenheit");
    let num1 = Number(inputFahrenheit.value);
    let answer = ((num1 - 32) / 1.80000);
    const outputCelsius = document.getElementById("outputCelsius");
    outputCelsius.innerHTML = answer;

}









  







