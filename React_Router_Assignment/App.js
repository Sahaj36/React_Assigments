import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SupportPage from "./SupportPage";
import Nav from "./Nav";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import Cocktail from "./Cocktail";
import CocktailDetail from "./CocktailDetail";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

export const AppDetails = createContext();

function getLocalStorage() {
  const isLogin = localStorage.getItem("login");

  if (isLogin) {
    return true;
  } else {
    return false;
  }
}

function App() {
  const [login, setLogin] = useState(getLocalStorage());
  const [cart, setCart] = useState([]);

  return (
    <>
      <AppDetails.Provider value={{ login, setLogin, cart, setCart }}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Support" element={<SupportPage />} />
          <Route path="/Courses" element={<PrivateRoute><Courses /></PrivateRoute>}/>
          <Route path="/Courses/:id" element={<CourseDetail />} />
          <Route path="/Cocktail" element={<PrivateRoute><Cocktail /></PrivateRoute>}/>
          <Route path="/Cocktail/:id" element={<CocktailDetail />} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </AppDetails.Provider>
    </>
  );
}

export default App;
