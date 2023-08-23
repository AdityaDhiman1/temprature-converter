
function getValue() {
    let value_a = document.getElementById("value_a").value;
    let value_b = document.getElementById("value_b").value;
    let value_c = parseInt(document.getElementById("value_c").value);
    let showresult = document.getElementById("result") 
    
    function getcelsiustofahanheit(a) {
        let result = parseFloat((a * 9/5) + 32)
        showresult.innerText = `${result}°F`
        
    }
    function getcelsiustokelvin(a) {
        let result = a + 273.15
        showresult.innerText = `${result}K`

    }
    function getcelsiustorankine() {
        let result = parseFloat((18 * 9/5) + 491.67)
        showresult.innerText = `${result}°R`
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
    

}