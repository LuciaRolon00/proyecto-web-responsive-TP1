import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const Login = () => {
  // Estados para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Bienvenido!\nEmail/Usuario: ${email}`);
  };

  // Estilos
  const labelStyles = "block text-gray-700 text-sm font-bold mb-2";
  const inputStyles = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
  const buttonStyles = "w-full bg-[#d8c7f6] hover:bg-[#bfaaf3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Título */}
        <h2 className="text-2xl text-black font-bold text-center mb-6">Inicia Sesión</h2>

        {/* Email - usuario */}
        <label htmlFor="email" className={labelStyles}>Email</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Tu dirección de email / Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyles}
        />

        {/* Contraseña */}
        <label htmlFor="password" className={labelStyles}>Contraseña</label>
        <input 
          id="password" 
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputStyles}
        />

        <button type="submit" className={buttonStyles}>Iniciar Sesión</button>

        <Link to="/registro" className="block text-center text-gray-600 mt-4 text-sm hover:underline">
          ¿Todavía no tenés cuenta? Registrate
        </Link>
      </form>
    </FormContainer>
  );
};

export default Login;