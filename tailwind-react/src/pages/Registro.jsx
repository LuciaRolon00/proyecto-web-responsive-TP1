import { useState } from 'react';
import FormContainer from '../components/FormContainer';

const Registro = () => {
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Registro exitoso!\nUsuario: ${usuario}\nEmail: ${email}`);
  };

  // Estilos
  const labelStyles = "block text-gray-700 text-sm font-bold mb-2";
  const inputStyles = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
  const buttonStyles = "w-full bg-[#d8c7f6] hover:bg-[#bfaaf3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Título */}
        <h2 className="text-2xl text-black font-bold text-center mb-6">Registrate</h2>
        
        {/* Usuario */}
        <label htmlFor="usuario" className={labelStyles}>Nombre de usuario</label>
        <input id="usuario" type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} className={inputStyles} />

        {/* Email */}
        <label htmlFor="email" className={labelStyles}>Email</label>
        <input id="email" type="email" placeholder="Dirección de email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyles} />

        {/* Contraseña */}
        <label htmlFor="password" className={labelStyles}>Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className={inputStyles} />

        <button type="submit" className={buttonStyles}>Registrar</button>
      </form>
    </FormContainer>
  );
};

export default Registro;