import { doRegExpForBadSituations } from "./doRegExpForBadSituations.js"

export function clickButtonShowOnScreen(valueOfAllButtons, screen) {
  for (let i = 0; i < valueOfAllButtons.length; i++) {
    valueOfAllButtons[i].addEventListener("click", () => {
      
      screen.innerHTML += valueOfAllButtons[i].innerHTML

      doRegExpForBadSituations(screen)
    })
  }
}

/* 
export function clickButtonShowOnScreen(valueOfAllButtons, screen) {
  for (let i = 0; i < valueOfAllButtons.length; i++) {
    valueOfAllButtons[i].addEventListener("click", () => {
      screen.innerHTML === "0"
      ? (screen.innerHTML = valueOfAllButtons[i].innerHTML)
      : (screen.innerHTML += valueOfAllButtons[i].innerHTML)
      console.log(doRegExpForBadSituationsFun) 
    })
  }
} */
