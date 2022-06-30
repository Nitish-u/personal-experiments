
function myfun(){
    var type = document.getElementById("first box").value;
    
    switch(type){
        case "add" : 
        var a = document.getElementById("second box").value;
        var b = document.getElementById("third box").value;
        var sum = parseFloat(a) + parseFloat(b)
        alert(sum)
        break;
        case "sub" : 
        var a = document.getElementById("second box").value;
        var b = document.getElementById("third box").value;
        var sub = a - b
        alert(sub)
        break;
        case "mult" : 
        var a = document.getElementById("second box").value;
        var b = document.getElementById("third box").value;
        var mult = a * b
        alert(mult)
        break;
        case "divide" : 
        var a = document.getElementById("second box").value;
        var b = document.getElementById("third box").value;
        var divide = a / b
        alert(divide)
        break;
        default:
            alert("did't get anything")
    }
}