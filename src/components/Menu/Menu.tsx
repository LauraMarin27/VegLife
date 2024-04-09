import { Link, useLocation } from "react-router-dom";
import './Menu.scss'
import { useState } from "react";
import logo from '../../img/logo.jpg'



function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const onHandleMenu = () => {
    if (isOpen) {
      setIsOpen(false)

    } else {
      setIsOpen(true)

    }
  }

  const routesForLink = [

    {

      id: 1,

      link: "/recetas",

      title: "Recetas"

    },

    {

      id: 2,

      link: "/desayunos",

      title: "Desayunos"

    }, {

      id: 3,

      link: "/almuerzos_cenas",

      title: "Almuerzos y Cenas"

    }, {

      id: 4,

      link: "/bebidas",

      title: "Bebidas"

    }, {

      id: 5,

      link: "/postres",

      title: "Postres"

    }, {

      id: 6,

      link: "/sobre_mi",

      title: "Sobre MÍ"

    }, {

      id: 7,

      link: "/contacto",

      title: "Contacto"

    },



  ]

  return (

    <div className="total">
      <div className="menuMainContainer">
        <Link to="/" className="title">
          <img src={logo} alt="logo de mi sitio web" className="logo"/>
          <div>
          <span className="logotext">Veg</span>
          <span className="logotext">Life</span>
          </div>
        </Link>
        <div className="menuItems">
          {routesForLink.map((route) => (
            <div className="route" key={route.id}>
              <Link to={route.link} ><span >{route.title}</span></Link>
            </div>
          ))}
        </div>
        <div className="menuItemsButton" onClick={onHandleMenu} >
          ☰
        </div>
      </div>
      {isOpen && (
        <div className="menuDropdown">
          {routesForLink.map((route) => (
            <div className="route" key={route.id}>
              <Link to={route.link} ><span >{route.title}</span></Link>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}



export default Menu;