import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Palestrantes from './Paginas/Palestrantes/Palestrantes';
import Header from './Componentes/Header/Header';

interface DataItem {
  id: number;
  name: string;
}

function App() {
  const API_URL = 'http://localhost:5000/data';
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_URL);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div id='div_app'>
      <Header/>
      <Palestrantes/>
    </div>
  );
}

export default App;
