import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <maindiv>
      <Header/>
      <Hero/>
      <Footer/>
    </maindiv>
  )
}

export default App
