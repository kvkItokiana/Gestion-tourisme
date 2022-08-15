import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Accueil from './Accueil';
import Site from './Site';
import Visiter from './Visiter';
import visiteur from './Visiteur';
import Date from './Date';
import {BrowserRouter ,Routes,Switch,Route,Link} from "react-router-dom";
import Visiteur from './Visiteur';

function App() {
  return (
    <div>
      <BrowserRouter>
        
          <Routes>
            <Route exat path='/visiter' element={<Visiter/>} />
            <Route exat path='/visiteur' element={<Visiteur/>} />
            <Route exat path='/visiteur/:id' element={<Visiteur/>} />
            <Route exat path='/site' element={<Site/>} />
            <Route exat path='/date' element={<Date/>} />

          </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
