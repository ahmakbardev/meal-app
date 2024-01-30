import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Card from './Components/Card.js';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Foods from './Pages/Foods.js';
import FoodCategories from './Pages/FoodCategories.js';
import Layout from './Layout.js';
import Detail from './Pages/Detail.js';
import Inggredient from './Pages/Inggredient.js';
import IngredientList from './Pages/InggredientList.js';
import InggDetail from './Pages/InggDetail.js';
import Local from './Pages/Local.js';
import LocalList from './Pages/LocalList.js';
import LocalDetail from './Pages/LocalDetail.js';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meal-app" element={<Home />} />
        {/* <Route path="/card" element={<Card />} /> */}
        <Route path="/foods" element={<Foods />} />
        <Route path="/inggredient" element={<Inggredient />} />
        <Route path="/location" element={<Local />} />
        <Route path="/foods/:category" element={<FoodCategories />} />
        <Route path="/foods/:category/:idMeal/detail" element={<Detail />} />
        <Route path="/location/:strMeal" element={<LocalList />} />
        <Route path="/inggredient/:ingredient" element={<IngredientList />} />
        <Route path="/inggredient/:ingredient/:idMeal/detail" element={<InggDetail />} />
        <Route path="/location/:strMeal/:idMeal/detail" element={<LocalDetail />} />
      </Route>
    </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
