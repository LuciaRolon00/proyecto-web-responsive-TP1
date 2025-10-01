const Footer = () => {
  // Con esto obtenemos el año actual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A202C] text-gray-300 py-12">
      <div className="container mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Nombre */}
          <div>
            <h3 className="text-xl font-bold text-white">SPACE REVIEWS</h3>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Juegos</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white hover:underline">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Suscribite a nuestro Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} SPACE REVIEWS. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;