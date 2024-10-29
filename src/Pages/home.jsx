import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Nav sel4="sec" sel1 ="sel" sel2 ="sec" sel3 ="sec" n1="n"/>
      <div className="usuario">
        Jolfre Gonzalez
      </div>
      <main>
        <h2>Balance: 128.168$</h2>
        <h2>Gastos: 482.343$</h2>
        <h2>Ingresos: 610.511</h2>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
