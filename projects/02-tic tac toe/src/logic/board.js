import { ALL_WINNERS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // Verificamos si hay ganador
    for(let combos of ALL_WINNERS) {
      const [a, b, c] = combos
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }

export  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((item) => item !== null)
  }