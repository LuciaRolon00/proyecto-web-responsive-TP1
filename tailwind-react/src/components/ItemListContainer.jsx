import { useState, useEffect } from 'react';
import { videojuegos } from '../data/videojuegos.js';
import JuegoCard from './JuegoCard.jsx';

// Mostrar lista de juegos
const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    // Se simula una llamada a una API con un retraso de 1 segundo
    const pedirDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(videojuegos);
      }, 1000);
    });

    pedirDatos.then((datos) => {
      setJuegos(datos);
    });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8'>
      {juegos.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} />
      ))}
    </div>
  );
};

export default ItemListContainer;