import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './molecules/Nav';
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";
import NewCourse from "./pages/NewCourse";
import AllCourses from "./pages/AllCourses";

const App = () => {
  return (
      <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/paneladmin' element={<AdminPanel/>}/>
            <Route path='/nuevocurso' element={<NewCourse/>}/>
            <Route path='/vercursos' element={<AllCourses/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
