// Acá se detallan los juegos seleccionados
import { useParams, Link } from 'react-router-dom';
import { videojuegos } from '../data/videojuegos.js';

export default function DescJuego() {
  // Obtener el id de la URL
  const { id } = useParams();
  // Lo busca
  const juego = videojuegos.find(v => v.id === parseInt(id));

  // Si no se encuentra el juego se muestra un msj de error
  if (!juego) {
    return (
      <div className="container mx-auto p-8 text-white text-center">
        <h2 className="text-2xl">Juego no encontrado</h2>
        <Link to="/" className="text-indigo-400 hover:underline mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Imagen del juego */}
        <div className="w-full flex justify-center">
          <img
            src={juego.imagen}
            alt={`Portada de ${juego.titulo}`}
            className="rounded-lg shadow-lg shadow-purple-900/50 w-full max-w-lg object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold mb-2">{juego.titulo}</h1>

          <div className="mb-4">
            <p className="text-yellow-400 text-2xl">
              {'⭐'.repeat(juego.estrellas)}
            </p>
          </div>

          {/* Descripción */}
          <div className="bg-[#5B5283] bg-opacity-50 p-4 rounded-lg border border-purple-500/50">
            <p className="text-lg text-gray-200 leading-relaxed">
              {juego.descripcion}
            </p>
          </div>

          <hr className="my-4 border-t border-slate-400/30" />

          <div className="mt-4">
            <Link to="/" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer">
              ← Volver al Listado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};