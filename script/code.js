document.addEventListener("DOMContentLoaded", function() {
    var convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convert);
});

function convert() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var conversionType = document.getElementById("conversionType").value;
    var resultElement = document.getElementById("result");
    
    if (conversionType === "celsius") {
        var fahrenheit = (inputTemp * 9/5) + 32;
        var kelvin = inputTemp + 273.15;
        resultElement.textContent = inputTemp + " Celsius = " + fahrenheit + " Fahrenheit = " + kelvin + " Kelvin";
    } else if (conversionType === "fahrenheit") {
        var celsius = (inputTemp - 32) * 5/9;
        var kelvin = (inputTemp - 32) * 5/9 + 273.15;
        resultElement.textContent = inputTemp + " Fahrenheit = " + celsius + " Celsius = " + kelvin + " Kelvin";
    } else if (conversionType === "kelvin") {
        var celsius = inputTemp - 273.15;
        var fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        resultElement.textContent = inputTemp + " Kelvin = " + celsius + " Celsius = " + fahrenheit + " Fahrenheit";
    }
}