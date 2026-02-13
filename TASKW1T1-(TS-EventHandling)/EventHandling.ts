
interface Item {
  id: number;
  text: string;
}
class DOMManager {
  private input: HTMLInputElement;
  private list: HTMLUListElement;
  private addBtn: HTMLButtonElement;
  private counter: number = 1;

  constructor() {
    this.input = document.getElementById("item-input") as HTMLInputElement;
    this.list = document.getElementById("item-list") as HTMLUListElement;
    this.addBtn = document.getElementById("add-button") as HTMLButtonElement;

    this.addBtn.addEventListener("click", () => this.addItem());
    this.list.addEventListener("click", (event) =>
      this.handleListClick(event)
    );
  }

  private addItem(): void {
    const value:string = this.input.value.trim();
    if(value.length>20){
      alert("length should not be more then 20");
      return ;
    }
    if (!value) return;

    const item: Item = {
      id: this.counter++,
      text: value,
    };

    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = item.id.toString();

    li.innerHTML = `
      <span>${item.text}</span>
      <button class="delete">X</button>
    `;

    this.list.appendChild(li);
    this.input.value = "";
  }

  private handleListClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const item = target.closest(".item") as HTMLLIElement | null;

    if (!item) return;

    if (target.classList.contains("delete")) {
      item.remove();
      return;
    }

    item.classList.toggle("active");
  }
}

new DOMManager();
