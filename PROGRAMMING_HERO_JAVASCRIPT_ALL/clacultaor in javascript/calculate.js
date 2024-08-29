function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculate() {
    var expression = document.getElementById('display').innerText;
    console.log(expression)
    var result = eval(expression);
    document.getElementById('display').innerText = result;
}
function cross() {
    var currentValue = document.getElementById('display').innerText;
            document.getElementById('display').innerText = currentValue.slice(0, -1);
  
}
var nadim = '6'
var shourov = '6'
var ans = eval(nadim*shourov)
console.log(ans)

// let nadim = 'nadim mahmud';
// var shourov = nadim.slice(0,-1)
// console.log(shourov);
