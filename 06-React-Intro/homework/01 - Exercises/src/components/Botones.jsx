import React from "react";

class Botones extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return ( ///*/ aquí estoy accediendo al objeto alerts QUE ESTA EN BIENVENIDO a la propiedad M1 Y LO MISMO PARA M2/*/
      <div>
        <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button> 
        <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;