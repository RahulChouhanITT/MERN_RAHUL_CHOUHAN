var DOMManager = /** @class */ (function () {
    function DOMManager() {
        var _this = this;
        this.counter = 1;
        this.input = document.getElementById("item-input");
        this.list = document.getElementById("item-list");
        this.addBtn = document.getElementById("add-button");
        this.addBtn.addEventListener("click", function () { return _this.addItem(); });
        this.list.addEventListener("click", function (event) {
            return _this.handleListClick(event);
        });
    }
    DOMManager.prototype.addItem = function () {
        var value = this.input.value.trim();
        if (value.length > 20) {
            alert("length should not be more then 20");
            this.input.value="";
            return;
        }
        if (!value)
            return;
        var item = {
            id: this.counter++,
            text: value,
        };
        var li = document.createElement("li");
        li.className = "item";
        li.dataset.id = item.id.toString();
        li.innerHTML = "\n      <span>".concat(item.text, "</span>\n      <button class=\"delete\">X</button>\n    ");
        this.list.appendChild(li);
        this.input.value = "";
    };
    DOMManager.prototype.handleListClick = function (event) {
        var target = event.target;
        var item = target.closest(".item");
        if (!item)
            return;
        if (target.classList.contains("delete")) {
            item.remove();
            return;
        }
        item.classList.toggle("active");
    };
    return DOMManager;
}());
new DOMManager();
