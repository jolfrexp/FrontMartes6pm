import React, { useState,useEffect } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import img1 from "../assets/ahorro.png"
import img2 from "../assets/gestion-de-proyectos.png"
import img3 from "../assets/gdg.webp"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"
import Footer from '../components/footer'
import Login from '../components/Login'
import Register from '../components/Register'
function Principal({onlogin}) {
  const [showLogin,setShowLogin] = useState(false)
  const [showRegister,setShowRegister] = useState(false)
  const toggleRegister = () =>{
    if(showRegister){
      setShowRegister(false)
    }else{
      setShowRegister(true)
      setShowLogin(false)
    }
  } 
  const toggleLogin = () =>{
    
    if(showLogin){
      setShowLogin(false)
    }else{
      setShowLogin(true)
      setShowRegister(false)
    }
  }
 
  return (
    <div className="principal">
      <Header/>
      <Nav ecofin="EcoFin" sel4 ="sel li" sel1= "sec li"sel2 ="sec li" sel3 ="sec li" n4="n" register="Login" register2="Register" togglePerfil={toggleLogin} togglePerfil2={toggleRegister}/>
      {showLogin || showRegister ?
      <div>
        {showLogin && <div  className="animate__animated animate__bounceInLeft"><Login onLogin={onlogin} toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>
        </div>}
        {showRegister && <div className="animate__animated animate__bounceInRight"><Register toggleRegister={toggleRegister} toggleLogin={toggleLogin}/></div>}
      </div> 
       :
        <div>
        <div className="imagenes">
          <div className="cont-img animate__animated animate__fadeInLeft ">
            <img src={img1}alt="" />
          </div>
          <div className="cont-img animate__animated animate__fadeInDown ">
            <img src={img3} alt="" />
          </div>
          <div className="cont-img animate__animated animate__fadeInRight ">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="textos">
          <div class="text tp animate__animated animate__fadeInLeft animate__delay-1s">
            <h2>Metodos de ahorros</h2>
              <p>Los métodos de ahorro incluyen cuentas de ahorro, que ofrecen interés y acceso fácil; depósitos a plazo, que brindan tasas más altas a cambio de mantener el dinero por un tiempo fijo; y fondos de inversión, que agrupan capital para comprar activos, aunque con mayor riesgo. También están las cuentas de ahorro para la jubilación, que ofrecen beneficios fiscales, y la creación de un presupuesto para identificar oportunidades de ahorro. Configurar transferencias automáticas a una cuenta de ahorros y considerar inversiones en bienes raíces son otras estrategias efectivas para ahorrar y hacer crecer el dinero.</p>
          </div>
          <div class="text animate__animated animate__fadeInUp animate__delay-1s">
            <h2>Como gestionar tu dinero</h2>
              <p>Gestionar tu dinero implica planificar y controlar tus finanzas para alcanzar tus objetivos. Comienza por crear un presupuesto que te ayude a rastrear tus ingresos y gastos, asegurándote de identificar áreas donde puedas ahorrar. Establece un fondo de emergencia para imprevistos y prioriza el pago de deudas, comenzando por las de mayor interés.</p>
              <p>Utiliza herramientas como aplicaciones de finanzas personales para mantener un seguimiento de tus gastos y ahorros. También es útil establecer metas financieras claras, como ahorrar para una casa o planificar la jubilación.</p>
          </div>
          <div class="text tp animate__animated animate__fadeInRight animate__delay-1s">
            <h2>Invertir</h2>
              <p>
              Invertir consiste en destinar dinero a diferentes activos con la expectativa de obtener ganancias a largo plazo. Puedes optar por acciones, bonos, bienes raíces o fondos de inversión, cada uno con distintos niveles de riesgo y potencial de retorno.</p>
              <p>Antes de invertir, es crucial informarte sobre los mercados y definir tus objetivos financieros. Diversificar tus inversiones ayuda a minimizar riesgos, distribuyendo tu capital en varios activos. También es recomendable tener un horizonte de inversión claro y estar preparado para la volatilidad del mercado.</p>
            </div>
   
        </div>
        <div className="recomendaciones">
          <div className="recomendacion animate__animated animate__fadeInRight animate__delay-1s">
            <div className="cont-img2">
              <img src={avatar1} alt="" /> 
              <h1>Ana</h1>
            </div>
           
            <div className="textoRe">
              
              <p>Lo que mas me impresionó fue la claridad en la información. Todo está bien estructurado y los títulos son descriptivos, lo que hace que sea fácil encontrar respuestas a mis preguntas. Se nota que has pensado en la experiencia del usuario. ¡Sigue así!</p>  
            </div>
            
          </div>
          <div className="recomendacion animate__animated animate__fadeInLeft animate__delay-2s">
          
            <div className="textoRe">
              <p>¡Me gustó mucho la variedad de contenido que ofreces! Hay una buena mezcla de artículos, videos y recursos que hacen que todo sea interesante y fácil de digerir. Además, me parece genial que incluyas secciones interactivas, como encuestas o comentarios, que me permiten participar y compartir mis opiniones.</p>
              
              </div>
              <div className="cont-img2">
                <img src={avatar2} alt="" /> 
                <h1>Sara</h1>
              </div>
            
          </div>
          <div className="recomendacion animate__animated animate__fadeInRight animate__delay-2s">
          <div className="cont-img2">
              <img src={avatar3} alt="" /> 
             <h1>Sofi</h1>  
            </div>
          <div className="textoRe">
            <p>¡Me encantó visitar tu página! La navegación es súper intuitiva, lo que me facilitó encontrar lo que buscaba sin complicaciones. Además, el contenido visual es atractivo y realmente capta la atención; las imágenes y gráficos complementan perfectamente la información. También aprecié que la página se carga rápido y se ve genial en mi móvil, lo que hace que la experiencia sea muy agradable. Definitivamente volveré a explorar más. ¡Buen trabajo!</p>
          </div>
           
          </div>
        </div>
    
      </div>
        }
      
      
      
      <Footer/>
    </div>
  )
}

export default Principal