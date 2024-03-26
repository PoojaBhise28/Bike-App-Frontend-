import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import HomeComponent from './Component/HomeComponent';
import BikeComponent from './Component/BikeComponent';
import ShowList from './Component/ShowList';
import SearchComponent from './Component/SearchComponent';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}/>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/Bike" element={<BikeComponent/>}/>
      <Route path="/Bike/:id" element={<BikeComponent/>}/>

      <Route path="/showlist" element ={<ShowList/>}></Route>
      <Route path="/Search" element={<SearchComponent/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
