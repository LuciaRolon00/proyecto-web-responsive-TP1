// Componente de la barra de navegación
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="flex justify-between items-center bg-[#696180] p-4">
      {/* Logo y nombre */}
      <Link to="/" className="flex items-center gap-4 no-underline">
        <img src="/img/logo.jpg" alt="Logo" className="h-20 w-20 rounded-full object-cover" />
        <span className="text-2xl font-bold text-white">
          SPACE REVIEWS
        </span>
      </Link>

      {/* Menú - botones */}
      <nav className="flex items-center gap-2">
        <Link to="/login"><button className="bg-black text-white py-2 px-4 rounded-full hover:bg-[#bfaaf3] transition-colors cursor-pointer">LOGIN</button></Link>
        <Link to="/registro"><button className="bg-black text-white py-2 px-4 rounded-full hover:bg-[#bfaaf3] transition-colors cursor-pointer">REGISTRO</button></Link>
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-[#bfaaf3] transition-colors cursor-pointer">JUEGOS </button>
        <Link to="/contacto"><button className="bg-black text-white py-2 px-4 rounded-full hover:bg-[#bfaaf3] transition-colors cursor-pointer">CONTACTO</button></Link>
        <input type="text" placeholder="🔍 Buscar" className="bg-black text-white p-2 rounded-full ml-5" />
      </nav>
    </header>
  );
};

export default Nav;