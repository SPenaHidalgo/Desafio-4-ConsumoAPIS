import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Header from'./components/Header/Header'
import MiApi from './components/MiApi'
import Footer from'./components/Footer/Footer'


function App() {

  return (
    <>
    <Header/>
    <MiApi/>
    <Footer/>
    </>
  )
}

export default App
