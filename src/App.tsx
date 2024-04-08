import { Route, BrowserRouter as Router, Routes,Outlet } from 'react-router-dom'
import './App.scss'
import Menu from './components/Menu/Menu'
import Recetas from './components/Recetas/Recetas'
import Desayunos from './components/Desayunos/Desayunos'
import Almuerzos from './components/Almuerzos/Almuerzos'
import Bebidas from './components/Bebidas/Bebidas'
import Postres from './components/Postres/Postres'
import SobreMi from './components/SobreMi/SobreMi'
import Contacto from './components/Contacto/Contacto'


function App() {
  const Template =()=>{
    return(
      <div className='container'>
        <div className='menuContainer'>
        <Menu/>
        </div>
        <div className='mainContainer'>
        <Outlet/>
        </div>
      </div>
    )
  }
 

  return (
    
      <Routes>
        <Route path='/' element={<Template/>}>
          <Route path='/recetas' element={<Recetas/>}/>
          <Route path='/desayunos' element={<Desayunos/>}/>
          <Route path='/almuerzos' element={<Almuerzos/>}/>
          <Route path='/cenas' element={<Bebidas/>}/>
          <Route path='/postres' element={<Postres/>}/>
          <Route path='/sobre_mi' element={<SobreMi/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    
  )
}

export default App