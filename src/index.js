import React from "react"
import ReactDOM from "react-dom"
import { HashRouter , Routes, Route } from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import SinglePage from "./functionBased/pages/SinglePage"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import Navbar from "./functionBased/components/Navbar"

//stylesheet
import "./functionBased/App.css"



ReactDOM.render(
  <React.StrictMode>
    
    <HashRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About  />}/>
      <Route  path="/about/:slug" element={ <SinglePage /> }/>
      <Route path="*" element={<NotMatch />} />
    </Routes>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById("root")
);