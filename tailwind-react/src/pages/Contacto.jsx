import { useState } from 'react';
import FormContainer from '../components/FormContainer';

const Contacto = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [motivo, setMotivo] = useState('consulta');
  const [mensaje, setMensaje] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Mensaje Enviado!\nNombre: ${nombre}\nMotivo: ${motivo}\nMensaje: ${mensaje}`);
  };

  // Estilos
  const labelStyles = "block text-gray-700 text-sm font-bold mb-2";
  const inputStyles = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
  const selectStyles = `${inputStyles} bg-white`;
  const textareaStyles = `${inputStyles} h-24`;
  const buttonStyles = "w-full bg-[#d8c7f6] hover:bg-[#bfaaf3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Título */}
        <h2 className="text-2xl text-black font-bold text-center mb-6">Contactanos</h2>

        {/* Nombre */}
        <label htmlFor="nombre" className={labelStyles}>Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={inputStyles}
        />

        {/* Motivo */}
        <label htmlFor="motivo" className={labelStyles}>Motivo de contacto</label>
        <select
          id="motivo"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          className={selectStyles}
        >
          <option value="consulta">Consulta</option>
          <option value="sugerencia">Sugerencia</option>
          <option value="otro">Otro</option>
        </select>

        {/* Mensaje */}
        <label htmlFor="mensaje" className={labelStyles}>Mensaje</label>
        <textarea
          id="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className={textareaStyles}
        />

        <button type="submit" className={buttonStyles}>Enviar</button>
      </form>
    </FormContainer>
  );
};

export default Contacto;