import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


  fetch('https://api.themoviedb.org/3/movie/popular/?api_key=518d686e3eedf8978e9e68394ecf4e37&page=1')
      .then(response => response.json())
      .then(commits => setImg(commits.results));
  return (
    <div className="App">
      {


      }
    </div>
  );
}

export default App;
