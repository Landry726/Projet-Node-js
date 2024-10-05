/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import AjoutClient from '../src/Components/AjoutClient.jsx';
import ListeClient from '../src/Components/ListeClient.jsx';
import Chart from './Components/example.jsx';
import "./App.css";
function App(){
  return(

  <BrowserRouter>
    <Routes>
      <Route path='/Ajout' element = {<AjoutClient/>} />
      <Route path='/' element = {<ListeClient/>} />
      <Route path='/chart/' element = {<Chart/>} />
    </Routes>

  </BrowserRouter> 
  );
}

export default App;
