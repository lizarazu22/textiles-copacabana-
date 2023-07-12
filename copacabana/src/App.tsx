import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExcelTable from './pages/ExcelTable';

function App() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleFileChange={handleFileChange} file={file} />} />
        <Route path="/tabla" element={<ExcelTable file={file} />} />
      </Routes>
    </Router>
  );
}

function Home({ handleFileChange, file }: { handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void, file: File | null }) {
  return (
    <div>
      <h1>Home</h1>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <Link to="/tabla">
          <button>Ir a la tabla</button>
        </Link>
      )}
    </div>
  );
}

export default App;
