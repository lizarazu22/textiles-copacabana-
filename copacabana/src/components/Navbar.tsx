import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between bg-gray-600 text-white p-4">
      <div className="text-xl font-bold">Textiles Copacabana</div>

      <div className="space-x-4">
        <Link
          className={`px-4 py-2 rounded text-white hover:font-bold ${
            pathname === "/tabla" ? "font-bold" : ""
          }`}
          to={`/tabla`}
        >
          Tabla
        </Link>
        <Link
          className={`px-4 py-2 rounded text-white hover:font-bold ${
            pathname === "/detalles" ? "font-bold" : ""
          }`}
          to={`/detalles`}
        >
          Detalles
        </Link>
      </div>

      <div>
        <Link
          className={`px-4 py-2 rounded-full text-white font-bold bg-red-500 hover:bg-red-700 ${
            pathname === "/detalles" ? "font-bold" : ""
          }`}
          to={`/`}
        >
          Cambiar Archivo
        </Link>
      </div>
    </nav>
  );
};
