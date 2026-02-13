document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const addItemBtn = document.getElementById("addItemBtn");
    const removeItemBtn = document.getElementById("removeItemBtn");
    const itemList = document.getElementById("itemList");

    changeTextBtn.addEventListener("click", () => {
        title.textContent = "Text Changed Using DOM!";
    });

    changeColorBtn.addEventListener("click", () => {
        title.style.color = "blue";
    });

    addItemBtn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(li);
    });

    removeItemBtn.addEventListener("click", () => {
        if (itemList.lastElementChild) {
            itemList.removeChild(itemList.lastElementChild);
        }
    });

});
