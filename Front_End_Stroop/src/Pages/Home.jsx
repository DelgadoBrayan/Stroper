import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <article className='flex justify-center items-center flex-col'>
      <header className='flex justify-center items-center bg-sky-600 h-40 rounded-b-full w-full mb-20'>
        <h1 className='ml-36 text-white text-6xl text-center font-serif '>
          PaletteWords
        </h1>
      <img src="src/assets/logoStroop.png"  className='w-56 -translate-x-9 translate-y-4' alt="" />
      </header>

        <section className='flex gap-16'>
        <Link to='/juego'>
          <div className='border-2 w-64 h-56 flex flex-col justify-center items-center '>
            <img src="src/assets/play.png " className='w-20' alt="" />
            <h1 className='text-lg font-bold'>Play</h1>
          </div>
          </Link>
          <Link to='/ajustes'>
          <div className='border-2 w-64 h-56 flex flex-col justify-center items-center'>
            <img src="src/assets/ajustes.png" className='w-16' alt="" />
            <h1 className='text-lg font-bold'>Ajustes</h1>
          </div>
          </Link>
          <Link to='/resultados'>
          <div className='border-2 w-64 h-56 flex flex-col justify-center items-center '>
            <img src="src/assets/puntaje.png" className='w-16' alt="" />
            
            <h1 className='text-lg font-bold'>Puntaje</h1>
          </div>
          </Link>
        </section>

    </article>
  )
}
