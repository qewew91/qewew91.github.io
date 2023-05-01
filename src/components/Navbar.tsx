import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-gray-200 text-black h-14'>
      <div className='p-4 flex justify-between'>
        <h1 className='text-xl'>Clasificarea limbajelor de programare</h1>
        <div>
          <Link to='/' className='mr-2 hover:font-semibold transition-all'>Acasa</Link>
          <Link to='/level' className='mr-2 hover:font-semibold transition-all'>Nivele</Link>
          <Link to='/hardship' className='hover:font-semibold transition-all'>Paradigme</Link>
        </div>
      </div>
    </nav>
  )
}