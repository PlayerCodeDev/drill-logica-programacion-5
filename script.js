const form = document.getElementById('form');
const result = document.getElementById('result');
const userInput = document.getElementById('user-input');
const maximumNumberSpan = document.getElementById('maximum-number');
const inputError = document.getElementById('input-error');
const outputNumber = document.getElementById('output-number');
const outputIaNumber = document.getElementById('output-ia-number');

const maxNumber = 100;
maximumNumberSpan.textContent = maxNumber;

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputNumber = userInput.value.trim();
    const parseNumber = parseInt(inputNumber, 10);

    if (isNaN(parseNumber) || inputError > maxNumber || inputError < 0) {
        outputIaNumber.textContent = '';
        outputNumber.textContent = '';
        inputError.textContent = 'Ingresa un número valido positivo.';
        userInput.value = '';
        return;
    }

    inputError.textContent = '';
    const randomNumberIa = generateRandomNumber(maxNumber);
    outputIaNumber.textContent = `En número secreto es: ${randomNumberIa}`;
    outputNumber.textContent = `El número que escogiste es: ${inputNumber}`;
    if (parseNumber === randomNumberIa) {
        inputError.textContent = 'GANASTE!';
    }
    userInput.value = '';
});

