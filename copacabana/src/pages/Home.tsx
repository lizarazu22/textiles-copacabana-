import { Link } from "react-router-dom";

function Home({
  handleFileChange,
  file,
}: {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}) {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-xs p-4">
          <h1 className="text-2xl font-bold mb-4">Textiles Copacabana</h1>
          {file ? (
            <div>
              <p className="text-lg mb-2">{file.name}</p>
              <Link to="/tabla">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ir a la tabla
                </button>
              </Link>
            </div>
          ) : (
            <label
              htmlFor="fileInput"
              className="block text-center px-4 py-6 bg-gray-200 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-8 h-8 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 018 8c0 4.418-3.582 8-8 8a8 8 0 01-8-8c0-4.418 3.582-8 8-8zm0 1a7 7 0 00-7 7c0 3.866 3.134 7 7 7a7 7 0 007-7c0-3.866-3.134-7-7-7zm1 4.414V10a1 1 0 11-2 0V7.414L8.707 8.707a1 1 0 11-1.414-1.414l2-2a1 1 0 011.414 0l2 2a1 1 0 11-1.414 1.414L11 7.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Seleccionar archivo
              </span>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>
      </div>
  );
}

export default Home;
