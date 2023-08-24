
function tempConverter() {
    let value_a = document.getElementById("value_a").value;
    let value_b = document.getElementById("value_b").value;
    let value_c = parseInt(document.getElementById("value_c").value);
    let showresult = document.getElementById("result")
    let err = document.getElementById("err")
    function getcelsiustofahanheit(a) {
        let result = parseFloat((a * 9 / 5) + 32)
        showresult.innerText = `${result}°F`
    }
    function getcelsiustokelvin(a) {
        let result = parseFloat(a + 273.15)
        showresult.innerText = `${result}K`
    }
    function getcelsiustorankine(a) {
        let result = parseFloat((a * 9 / 5) + 491.67)
        showresult.innerText = `${result}°R`
    }
    function getfahanheittocelsius(a) {
        let result = parseFloat((a - 32) * 5 / 9)
        showresult.innerText = `${result}°C`
    }
    function getfahanheittokelvin(a) {
        let result = parseFloat((a - 32) * 5 / 9 + 273.15)
        showresult.innerText = `${result}K`
    }
    function getfahanheittorankine(a) {
        let result = parseFloat(a + 459.67)
        showresult.innerText = `${result}°R`
    }
    function getkelvintofahrenheit(a) {
        let result = parseFloat((a - 273.15) * 9 / 5 + 32)
        showresult.innerText = `${result}°F`
    }
    function getkelvintocelius(a) {
        let result = parseFloat(a - 273.15)
        showresult.innerText = `${result}°C`
    }
    function getkelvintorankine(a) {
        let result = parseFloat(a * 1.8)
        showresult.innerText = `${result}K`
    } 
    function getrankinetofahrenhiet(a) {
        let result = parseFloat(a - 459.67)
        showresult.innerText = `${result}°F`
    }
    function getrankinetocelsius(a) {
        let result = parseFloat((a - 491.67) * 5/9 )
        showresult.innerText = `${result}°C`
    }
    function getrankinetokelvin(a) {
        let result = parseFloat(a * 5/9)
        showresult.innerText = `${result}K`
    }
    function donotconvert() {
        err.innerText = `The value already in temperature`
        err.style.color = 'red'
    }
    if (isNaN(value_c)) {
        err.innerText = "Please enter a valid number.";
        showresult.innerText = ""; 
        return; 
    } else {
        err.innerText = ""; 
    }
    if (value_a == "celsius" && value_b == "fahrenheit") {
        getcelsiustofahanheit(value_c)
    }
    else if (value_a == "celsius" && value_b == "kelvin") {
        getcelsiustokelvin(value_c)
    }
    else if (value_a == "celsius" && value_b == "rankine") {
        getcelsiustorankine(value_c)
    }
    else if (value_a == "fahrenheit" && value_b == "celsius") {
        getfahanheittocelsius(value_c)
    }
    else if (value_a == "fahrenheit" && value_b == "kelvin") {
        getfahanheittokelvin(value_c)
    }
    else if (value_a == "fahrenheit" && value_b == "rankine") {
        getfahanheittorankine(value_c)
    }
    else if (value_a == "kelvin" && value_b == "fahrenheit") {
        getkelvintofahrenheit(value_c)
    }
    else if (value_a == "kelvin" && value_b == "celsius") {
        getkelvintocelius(value_c)
    }
    else if (value_a == "kelvin" && value_b == "rankine") {
        getkelvintorankine(value_c)
    }
    else if (value_a == "rankine" && value_b == "fahrenheit") {
        getrankinetofahrenhiet(value_c)
    }
    else if (value_a == "rankine" && value_b == "celsius") {
        getrankinetocelsius(value_c)
    }
    else if (value_a == "rankine" && value_b == "kelvin") {
        getrankinetokelvin(value_c)
    }
    else {
        donotconvert()
    }
}