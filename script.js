document.addEventListener('DOMContentLoaded', function() {
    const dis = document.getElementById('dis');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.getElementById('clear');

    let currInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');
        
        if (value === '=') {
          if (firstOperand !== null && operator !== '') {
            const secondOperand = parseFloat(currInput);
            const result = evalExpression(firstOperand, secondOperand, operator);
            dis.textContent = result;
            firstOperand = result;
            operator = '';
            currInput = '';
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (currInput !== '') {
            firstOperand = parseFloat(currInput);
            operator = value;
            currInput = '';
            dis.textContent = value;
          }
        } else {
          currInput += value;
          dis.textContent = currInput;
        }
      });
    });

    clear.addEventListener('click', function() {
      currInput = '';
      operator = '';
      firstOperand = null;
      dis.textContent = '';
    });

    function evalExpression(operand1, operand2, operator) {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
        default:
          return 0;
      }
    }
  });