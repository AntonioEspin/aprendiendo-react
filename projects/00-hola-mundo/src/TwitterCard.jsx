import { useState } from 'react'
import './TwitterCard.css'

export function TwitterCard ({name,userName}) {
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo': 'Seguir'
  const activeClassName = isFollowing ? 'clicked-button': ''
  const handleClick = () => setIsFollowing(!isFollowing)
  return (
    <section className="container">
      <header className="container-header">
        <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${userName}`} alt="avatar" />
        <div className="info">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside className="container-button">
        <button className={`button ${activeClassName}`} onClick={handleClick}>{text}</button>
      </aside>
    </section>
  )
} 