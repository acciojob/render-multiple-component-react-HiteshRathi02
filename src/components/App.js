import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

  const projects = [
  {
    name: "AI Personal Assistant",
    description: "An assistant that automates daily tasks using AI.",
  },
  {
    name: "Smart Farming System",
    description: "A system that monitors soil and weather for efficient farming.",
  }
];


  return (
    <div id="ns-main" className="ns-wrapper">
      {projects.map((item,index)=>{
        return (
          < div key={index}>
          <h1 data-ns-test= "project-name" >{item.name}</h1>
          <h6 data-ns-test= "project-description">{item.description}</h6>
          </div>
        )
      })}
    </div>
  )
}


export default App;
