let display = document.getElementById("display");

function appendValue(value) {
  if (value === '()') {
    // Count how many opening and closing brackets are already in the display
    const openBrackets = (display.value.match(/\(/g) || []).length;
    const closeBrackets = (display.value.match(/\)/g) || []).length;
    // If there are more opening brackets, append a closing bracket, otherwise append an opening bracket
    if (openBrackets <= closeBrackets) {
      display.value += '(';
    } else {
      display.value += ')';
    }
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}