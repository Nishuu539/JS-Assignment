let display = document.getElementById('screen');
buttons = document.querySelectorAll('button');
console.log(buttons);
let displayValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        userInput = e.target.innerText;
        if (userInput == 'X') {
            userInput = '*';
            displayValue += userInput;
            display.value = displayValue;
        }
        else if (userInput == 'C') {
            displayValue = "";
            display.value = displayValue;
        }
        else if (userInput == '=') {
            display.value = eval(displayValue);
        }
        else {
            displayValue += userInput;
            display.value = displayValue;
        }

    })
}

