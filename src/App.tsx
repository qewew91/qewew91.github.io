import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { LowToHighLevelClassification } from './pages/LowToHighLevelClassification'
import { Navbar } from './components/Navbar'
import { Paradigm } from './pages/Paradigm'

export const App = () => {
  return (
    <>
      <Navbar />
        <div className="container p-20">
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/level' element={ <LowToHighLevelClassification /> } />
            <Route path='/paradigms' element={ <Paradigm /> }/>
          </Routes>
        </div>
    </>
  )
}

