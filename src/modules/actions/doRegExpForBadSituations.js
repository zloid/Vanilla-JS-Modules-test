export function doRegExpForBadSituations(screen) {
  switch (true) {
    case /\s{2}/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/\s{2}/g, " ")
    case /[\s*\+\s*]+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\s*\+\s*)+/g, " $1 ")
    case /[\s*\-\s*]+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\s*\-\s*)+/g, " $1 ")
    case /[\s*\*\s*]+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\s*\*\s*)+/g, " $1 ")
    case /[\s*\/\s*]+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\s*\/\s*)+/g, " $1 ")
    //all 4 case before in one + more
    //++ -- ÷÷ *** +-÷  > + - * ÷
    case /(\s*\+\s*|\s*-\s*|\s*\/\s*|\s*\*\s*)+/g.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(
        /(\s*\+\s*|\s*-\s*|\s*\/\s*|\s*\*\s*)+/g,
        " $1 "
      )
    //begin > 00 > 0
    case /^0+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/^0+/, "0")
    //begin > 02 > 0
    case /^0(\d|[(])/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/^0(\d|[(])/, "$1")
    //begin > 012 > 12; + 02 > + 2
    case /([+-]|\/|\*)\s*0(\d)/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(
        /([+-]|\/|\*)\s*0(\d)/,
        "$1 $2"
      )
    //... > .
    case /[\s*\.\s*]+/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\s*\.\s*)+/g, "$1")
    //431.55.66 + 1.2.3 > 431.5566 + 1.23
    case /(\d+\.\d+)\./g.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/(\d+\.\d+)\./g, "$1")
    //.7 > 0.7
    case /[^\d]\./.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/[^\d]\./, " 0.")
    //else > .7 > 0.7
    case /^\./.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/^\./, "0.")
    //7. + > 7 +
    case /([\d])\.\s/.test(screen.innerHTML):
      screen.innerHTML = screen.innerHTML.replace(/([\d])\.\s/g, "$1 ")

    default:
      break
  }
}

//todo
//33333.+ > ? 3333 3
//-----------
//0.0000000 > 0
//-----------
// '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
//   case /^\s*(\*|÷)\s*(\d+)/.test(screen.innerHTML):
//   screen.innerHTML = screen.innerHTML.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ')
//-----------
//5 * > 5 * 5 ; 5 ÷ > 5 ÷ 5
// case /(\d+)\s*(\*|\/)\s*$/.test(screen.innerHTML):
// screen.innerHTML = screen.innerHTML.replace(/(\d+)\s*(\*|\/)\s*$/, '$1 $2 $1')
// -----------
