import './App.css';
import api from './api/axiosConfig';
import {useEffect, useState} from 'react';
import Formation from './components/Formation';
import {Router, Routes} from 'react-router-dom';


function App() {

  const[movies, setMovies] = useState();

  const getMovies = async() => {
    try {
      const response = await api.get("/api/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="App">

    
    
    </div>
  );
}

export default App;
