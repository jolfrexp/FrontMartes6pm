import '../../assets/css/frontend/footer.css'
import React from 'react'
function Footer(props) {
  return (
    <div className={props.class}>
        <div>
          <p>.</p>
          <p>Cesde</p>
          <p>2024</p>
          <p>Todos los derechos reservados</p>
          <p>Powered by <a title='Git Jolfre' href="https://github.com/jolfrexp" target="_blank" class="">Jolfre Gonzalez</a></p>
        </div>
    </div>
  )
}
export default Footer