import { TwitterCard } from "./TwitterCard";
import './App.css'

export function App () {
  return (
    <section className="app">
      <TwitterCard
        isFollowing
        name='Tinkerbell Asecas'
        userName= 'Tinkerbell'
      />
      <TwitterCard
        isFollowing
        name='Mittens Papu'
        userName= 'Mittens'
      />
      <TwitterCard
        isFollowing
        name='Chester Miñaquito'
        userName= 'Chester'
      />
    </section>
  )
}