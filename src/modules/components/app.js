import { store } from "../store/store.js"
import { clickButtonShowOnScreen } from "../actions/clickButtonShowOnScreen.js"
import { evaluation } from "../actions/evaluation.js"
import { clearScreen } from "../actions/clearScreen.js"

const { valueOfAllButtons, equalButton, screen, clearButton } = store

clickButtonShowOnScreen(valueOfAllButtons, screen)
evaluation(equalButton, screen)
clearScreen(clearButton, screen)
