const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.getElementById("buttons") as HTMLDivElement;

buttons.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (!target.classList.contains("btn")) return;

  const value: string = target.innerText;

  if (target.classList.contains("clear")) {
    display.value = "";
  }
  else if (target.classList.contains("equal")) {
    try {
      display.value = eval(display.value).toString();
    } catch (error) {
      display.value = "Error";
    }
  }
  else {
    display.value += value;
  }
});
