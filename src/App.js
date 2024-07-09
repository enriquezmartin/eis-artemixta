import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './molecules/Nav';
import AdminPanel from "./pages/AdminPanel";
import StudentPanel from "./pages/StudentPanel";
import HomePage from "./pages/HomePage";
import NewCourse from "./pages/NewCourse";
import AllCourses from "./pages/AllCourses";
import AdmCourses from "./pages/AdmCourses";
import NewProf from "./pages/NewProf";

const App = () => {
  return (
      <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/paneladmin' element={<AdminPanel/>}/>
              <Route path='/panelestudiante' element={<StudentPanel/>}/>
            <Route path='/nuevocurso' element={<NewCourse/>}/>
            <Route path='/vercursos' element={<AllCourses/>}/>
            <Route path='/admcursos' element={<AdmCourses/>}/>
            <Route path='/nuevoprof' element={<NewProf/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
