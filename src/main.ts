const button = document.querySelector("button");
const result = document.querySelector("#result");

if (button && result) {
  button.addEventListener("click", () => {
    result.textContent = String(+result.textContent! + 1);
  });
}
