// Recetas.tsx
import './Recetas.scss'
import React, { useEffect, useState } from 'react';
import InicioReceta from './inicioReceta/InicioReceta';
interface Receta {
  nombre: string;
  imagen: string;
  tiempo_de_cocina: string;
}

const Recetas: React.FC = () => {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://veglife-71d53-default-rtdb.europe-west1.firebasedatabase.app/recetas.json');
        if (!response.ok) {
          throw new Error('No se pudieron cargar las recetas');
        }
        const data = await response.json();
        const recetasData = data['-NugseGA3Gns-b9AlOJy'].recetas;
        const recetasArray: Receta[] = recetasData.map((receta: any) => ({
          nombre: receta.nombre,
          imagen: receta.imagen,
          tiempo_de_cocina: receta.tiempo_de_cocina,
          categoria: receta.categoria
          
        }));
        setRecetas(recetasArray);
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='total'>
    <InicioReceta/>
    <div className='contenedor'>
      
      {recetas.map((receta, index) => (
        <div key={index} className='receta'>
          
          <h2 className='nombre' >{receta.nombre}</h2>
          <img src={receta.imagen} alt={receta.nombre} className='imagenes' />
          <div>
        
          <p>Tiempo de cocina: {receta.tiempo_de_cocina}</p>
          
          <button>Ver Receta</button>
          </div>
         
        </div>
      ))}
    </div>
    </div>
  );

};

export default Recetas;
