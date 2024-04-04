// Recetas.tsx
import React, { useEffect, useState } from 'react';

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
        const recetasData = data['-NueVXb8GwlKUgNpW3Td'].recetas;
        const recetasArray: Receta[] = recetasData.map((receta: any) => ({
          nombre: receta.nombre,
          imagen: receta.imagen,
          tiempo_de_cocina: receta.tiempo_de_cocina
        }));
        setRecetas(recetasArray);
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Recetas</h1>
      {recetas.map((receta, index) => (
        <div key={index}>
          <h2>{receta.nombre}</h2>
          <img src={receta.imagen} alt={receta.nombre} />
          <p>Tiempo de cocina: {receta.tiempo_de_cocina}</p>
        </div>
      ))}
    </div>
  );
};

export default Recetas;
