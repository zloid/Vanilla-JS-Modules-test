export function evaluation(equalButton, screen) {
  equalButton.addEventListener("click", () => {
    screen.innerHTML = eval(screen.innerHTML)
  })
}
