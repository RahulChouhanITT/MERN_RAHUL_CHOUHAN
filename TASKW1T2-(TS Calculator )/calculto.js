var display = document.getElementById("display");
var buttons = document.getElementById("buttons");
buttons.addEventListener("click", function (event) {
    var target = event.target;
    if (!target.classList.contains("btn"))
        return;
    var value = target.innerText;
    if (target.classList.contains("clear")) {
        display.value = "";
    }
    else if (target.classList.contains("equal")) {
        try {
            display.value = eval(display.value).toString();
        }
        catch (error) {
            display.value = "Invalid Expression";
        }
    }
    else {
        display.value += value;
    }
});
