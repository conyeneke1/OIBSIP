const displayExpression = document.querySelector('.expression');
const displayResult = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let expression = '';
let result = '0';
let lastResult = '';

displayExpression.textContent = expression;
displayResult.textContent = result;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'clear') {
      expression = '';
      result = '0';
    } else if (value === 'del') {
      expression = expression.slice(0, -1);
    } else if (value === 'ENTER') {
      try {
        result = eval(expression.replace('x', '*').replace('÷', '/'));
        lastResult = result;
      } catch (error) {
        result = 'Error';
      }
    } else if (value === '√') {
        try {
          result = Math.sqrt(parseFloat(expression)) || '0';
          lastResult = result;
          expression = '';
        } catch (error) {
          result = 'Error';
        }
    } else if (value === 'ans') {
        expression += lastResult !== '' ? lastResult : '0';
    } else {
        expression += value;
    }

    displayExpression.textContent = expression;
    displayResult.textContent = result;
  });
});
