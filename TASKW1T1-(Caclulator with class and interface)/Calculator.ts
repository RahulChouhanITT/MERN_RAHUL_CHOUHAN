
type Operator = "+" | "-" | "*" | "/";

interface ICalculator {
  append(value: string): void;
  calculate(): void;
  clear(): void;
}

class Calculator implements ICalculator {
  private display: HTMLInputElement;

  constructor(displayId: string, buttonsId: string) {
    this.display = document.getElementById(displayId) as HTMLInputElement;

    const buttons = document.getElementById(buttonsId) as HTMLDivElement;
    buttons.addEventListener("click", this.handleClick.bind(this));
  }

  private handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains("btn")) return;

    const value: string = target.innerText;

    if (value === "C") {
      this.clear();
    } else if (value === "=") {
      this.calculate();
    } else {
      this.append(value);
    }
  }

  public append(value: string): void {
    this.display.value += value;
  }

  public calculate(): void {
    try {
      this.display.value = eval(this.display.value).toString();
    } catch {
      this.display.value = "Invalid Expression!";
    }
  }

  public clear(): void {
    this.display.value = "";
  }
}

new Calculator("display", "buttons");
