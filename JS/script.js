const selectOne = document.querySelector('#measureA');
const selectTwo = document.querySelector('#measureB');
const form = document.querySelector('#card-form');
const txtInput = document.querySelector('#txtInput');
const processBtn = document.querySelector('#processBtn');
const resetBtn = document.querySelector('#resetBtn');
const card = document.querySelector('#card');
const error = document.querySelector('.error');
const result = document.querySelector('#result-show');

loadEventListeners();

function loadEventListeners() {
    // Check selectOne options
    selectOne.addEventListener('change', watchChangeSelectOne);
    // Check selectTwo options
    selectTwo.addEventListener('change', watchChangeSelectTwo);
    // Process inputs
    form.addEventListener('submit', processInput);
}

    // Change the second dropdown options according to the first dropdown options
function watchChangeSelectOne() {
    switch (selectOne.value) {
        case 'celsius':
            selectTwo.value = selectTwo.children[0].value;
            break;
        case 'fahrenheit':
            selectTwo.value = selectTwo.children[1].value;
        default:
            break;
    }
}

// Change the first dropdown options according to the second dropdown options
function watchChangeSelectTwo() {
    switch (selectTwo.value) {
        case 'celsius':
            selectOne.value = selectOne.children[1].value;
            break;
        case 'fahrenheit':
            selectOne.value = selectOne.children[0].value;
        default:
            break;
    }
}

// Convert either from fahrenheit to celsius or celsius to fahrenheit
function processInput(e) {
    error.style.display = 'none';
    card.style.outline = 'none';
    let sel1 = selectOne.value;
    let sel2 = selectTwo.value;
    let val = Number.parseFloat(txtInput.value);
    if (sel1 === 'celsius' && sel2 === 'fahrenheit') {
        if (!isNaN(val)) {
            result.innerHTML = `<h4>${convertToFahrenheit(val)}</h4>`
        } else {
            // Try using jQuery to implement a smooth animation here :)
             error.style.display = 'block';
             card.style.outline = 'red 5px solid';
        }
    } else {
        result.innerHTML = `<h4>${convertToCelsius(val)}</h4>`
    }
    e.preventDefault();
}

function convertToFahrenheit(x) {
    return ((x * 1.8) + 32);
}

function convertToCelsius(y) {
    return ((y - 32) * 0.5556);
}