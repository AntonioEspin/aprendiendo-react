/* eslint-disable react/prop-types */
import { Square } from "./Square"

export const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return
  const text = winner === false ? 'Empate' : 'Ganó'
  return (
    <section className="winner">
      <div className="text">
        <h2>{text}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}