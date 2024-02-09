import './App.css';
import api from './api/axiosConfig';
import {useEffect, useState} from 'react';
import Formation from './components/Formation';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';


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

    <Routes>
      <Route path="/" element={<Formation/>}>
         <Route path="/" element={<Home/>}></Route>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
