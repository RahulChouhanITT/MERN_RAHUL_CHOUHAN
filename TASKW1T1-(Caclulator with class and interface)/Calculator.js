var Calculator = /** @class */ (function () {
    function Calculator(displayId, buttonsId) {
        this.display = document.getElementById(displayId);
        var buttons = document.getElementById(buttonsId);
        buttons.addEventListener("click", this.handleClick.bind(this));
    }
    Calculator.prototype.handleClick = function (event) {
        var target = event.target;
        if (!target.classList.contains("btn"))
            return;
        var value = target.innerText;
        if (value === "C") {
            this.clear();
        }
        else if (value === "=") {
            this.calculate();
        }
        else {
            this.append(value);
        }
    };
    Calculator.prototype.append = function (value) {
        this.display.value += value;
    };
    Calculator.prototype.calculate = function () {
        try {
            this.display.value = eval(this.display.value).toString();
        }
        catch (_a) {
            this.display.value = "Error";
        }
    };
    Calculator.prototype.clear = function () {
        this.display.value = "";
    };
    return Calculator;
}());
new Calculator("display", "buttons");
