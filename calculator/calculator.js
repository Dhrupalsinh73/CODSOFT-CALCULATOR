let displayValue='';

function appendInput(value){
    displayValue+=value;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').innerText=displayValue;
}

function clearDisplay(){
    displayValue='';
    updateDisplay();
}

function clearone() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate(){
    try {
        displayValue= eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue='error';
        updateDisplay();
    }
}