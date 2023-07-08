'use client'
import { useState, useEffect } from 'react'
import Data from '../../shared/Data'
import Image from 'next/image'

const GameList = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    setGames(Data)
  }, [])

  return (
    <div className="grid grid-cols-3 md:grid-cols-7 mt-6">
      {games.map((game) => (
        <div
          key={game.id}
          className="flex flex-col items-center cursor-pointer"
        >
          <Image src={game.image} alt={game.name} width={40} height={40} />
          <p>{game.name}</p>
        </div>
      ))}
    </div>
  )
}

export default GameList
