import React from "react";


class Botones extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => alert(this.props.props.m1)}>Modulo 1</button>
        <button onClick={() => alert(this.props.props.m2)}>Modulo 2</button>
      </div>
    );
  }
}

export default Botones;