import React from "react";
import Botones from "./Botones";

const studentName = "Tatiana";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };



export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill, index) => (
        <li key= {index}> 
        {skill}
        </li>))}
      </ul>
      <Botones alerts = {alerts}/>
    </div>
  );
}

//Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
