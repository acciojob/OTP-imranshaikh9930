const inputs = document.querySelectorAll('.code');

for (let i = 0; i < inputs.length; i++) {
  const currentInput = inputs[i];

  // Next input focus
  currentInput.addEventListener("input", createInputHandler(i, inputs));

  // Previous Focus
  currentInput.addEventListener("keydown", createKeyDownHandler(i, inputs));
}

function createInputHandler(index, inputs) {
  return function () {
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };
}

function createKeyDownHandler(index, inputs) {
  return function (e) {
    if (e.key === 'Backspace' && index > 0 && this.value.length === 0) {
      inputs[index - 1].focus();
    }
  };
}
