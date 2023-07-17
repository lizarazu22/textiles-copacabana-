import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExcelTable from './pages/ExcelTable';
import Home from './pages/Home';
import { Details } from './pages/Details';

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
        <Route path='/detalles' element={<Details file={file} />} />
      </Routes>
    </Router>
  );
}

export default App;