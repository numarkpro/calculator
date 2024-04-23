var output = document.getElementById('output');
function appendToOutput(value) {
    if (output) {
        output.value += value;
    }
}
function clearOutput() {
    if (output) {
        output.value = '';
    }
}
function calculateResult() {
    if (output) {
        try {
            output.value = eval(output.value);
        }
        catch (error) {
            output.value = 'Error';
        }
    }
}
