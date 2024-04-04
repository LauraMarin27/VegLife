import {Link, useLocation } from "react-router-dom";
import './Menu.scss'



function Menu() {  

 

  const location = useLocation();

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

    },{

        id: 3,
  
        link: "/almuerzos",
  
        title: "Almuerzos"
  
      },{

        id: 4,
  
        link: "/cenas",
  
        title: "Cenas"
  
      },{

        id: 5,
  
        link: "/postres",
  
        title: "Postres"
  
      },{

        id: 6,
  
        link: "/sobre_mi",
  
        title: "Sobre MÍ"
  
      },{

        id: 7,
  
        link: "/contacto",
  
        title: "Contacto"
  
      },

    

  ]

  return(

        <div className="menuMainContainer">
          <Link to="/" className="title">
            Inicio
          </Link>

          {routesForLink.map((route) => (

            <div className="route" key={route.id}>

           

            <Link to={route.link} ><span>{route.title}</span></Link>

            </div>

          )

             

            )}

        </div>

  )

}

 

export default Menu;