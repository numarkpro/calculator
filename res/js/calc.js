var output = document.getElementById("output");

function appendToOutput(value) {
  if (output) {
    output.value += value;
  }
}

function appendToOutputpi(value) {
  if (output) {
    output.value += Math.PI;
  }
}

function clearOutput() {
  if (output) {
    output.value = "";
  }
}

function calculateResult() {
  if (output) {
    try {
      output.value = eval(output.value);
    } catch (error) {
      output.value = "Error";
    }
  }
}

function deleteCharacter() {
  if (output) {
    const currentValue = output.value;
    if (currentValue.length > 0) {
      output.value = currentValue.slice(0, -1);
    }
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/^[0-9+\-*/().]$/.test(key)) {
    appendToOutput(key);
  }

  if (key === ",") {
    appendToOutput(".");
  }

  if (key === "p") {
    appendToOutputpi();
  }

  if (key === "Enter") {
    calculateResult();
  }

  if (key === "=") {
    calculateResult();
  }

  if (key === "Backspace") {
    deleteCharacter();
  }
});
