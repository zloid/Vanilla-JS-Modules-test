export function clearScreen(clearButton, screen) {
    clearButton.addEventListener('click', () => {
        screen.innerHTML = '0'
    })
}