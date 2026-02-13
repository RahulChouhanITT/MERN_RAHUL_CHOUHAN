document.addEventListener("DOMContentLoaded", () => {

    const displayInput = document.getElementById("display");
    const calculatorButtons = document.querySelectorAll("button");
    const clearButton = document.getElementById("clear");
    const equalsButton = document.getElementById("equals");

    calculatorButtons.forEach(currentButton => {
        const buttonValue = currentButton.getAttribute("data-value");

        if (buttonValue) {
            currentButton.addEventListener("click", () => {
                displayInput.value += buttonValue;
            });
        }
    });

    clearButton.addEventListener("click", () => {
        displayInput.value = "";
    });

    equalsButton.addEventListener("click", () => {
        try {
            displayInput.value = eval(displayInput.value);
             console.log(eval(displayInput.value));
        } catch {
            displayInput.value = "Error";
        }
    });

});
