// Select elements
const degreesInput = document.getElementById('degrees');
const typeSelect = document.getElementById('type');
const resultInput = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

// Conversion functions
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Convert button click event
convertBtn.addEventListener('click', () => {
  const degrees = parseFloat(degreesInput.value);
  const type = typeSelect.value;

  if (isNaN(degrees)) {
    resultInput.value = 'Invalid input';
    return;
  }

  let result;
  if (type === 'fahrenheit') {
    result = fahrenheitToCelsius(degrees).toFixed(4) + ' °C';
  } else {
    result = celsiusToFahrenheit(degrees).toFixed(4) + ' °F';
  }

  resultInput.value = result;
});
