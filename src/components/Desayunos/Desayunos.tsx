import { useState,useEffect } from 'react';
import './Desayunos.scss'
import InicioDesayunos from './InicioDesayunos/InicioDesayunos'

type Desayuno ={
  nombre:string,
  imagen:string,
  tiempo : string;
  categoria : string | string[];

}



const Desayunos: React.FC=()=> {
  const[desayunos, setDesayunos]= useState<Desayuno[]>([]);

  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await fetch('https://veglife-71d53-default-rtdb.europe-west1.firebasedatabase.app/recetas.json');
        if(!response.ok){
          throw new Error('No se pudieron cargar los desayunos');
        }
        const data = await response.json();
        const desayunosData = data['-Nv0RwBqqHD-0aK_aSwc'].recetas;
        const desayunosArray : Desayuno[] = desayunosData.filter((desayuno : any)=>
          desayuno.categoria.includes('Desayunos')
      ).map((desayuno: any) => ({
        nombre: desayuno.nombre,
          imagen: desayuno.imagen,
          tiempo: desayuno.tiempo,
          categoria: desayuno.categoria
      }));
          
        setDesayunos(desayunosArray);
      } catch(e){
        console.log('Erros al obtener las recetas de los desayunos', e)
      }
    };
    fetchData();
  }, []);


  return (
    <div className='total'>
    <InicioDesayunos/>
    <div className='contenedor'>
      
      {desayunos.map((desayuno, index) => (
        <div key={index} className='receta'>
          
          <h2 className='nombre' >{desayuno.nombre}</h2>
          <img src={desayuno.imagen} alt={desayuno.nombre} className='imagenes' />
          <div>
        
          <p>Tiempo de cocina: {desayuno.tiempo}</p>
          
          <button>Ver Receta</button>
          </div>
         
        </div>
      ))}
    </div>
    </div>
  );
};
export default Desayunos;
