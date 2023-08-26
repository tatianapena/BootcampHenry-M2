import React, { useState } from 'react'
import './Contact.modules.css'


// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs) {
  let errors = {}

//En el input name, si este campo está vacío, agrega la propiedad name al objeto errors en donde su valor sea 
//"Se requiere un nombre":
  if(!inputs.name) {   
    errors.name='Se requiere un nombre'  
  }
//En el input email, valida si el email que ingresa el usuario coincide con el formato regex de la constante regexEmail,
// aplicándole a esta el método test() y dentro de sus paréntesis coloca inputs.email; agrega la propiedad email al objeto
// errors en donde su valor sea "Debe ser un correo electrónico":
  if (!regexEmail.test(inputs.email)){
    errors.email='Debe ser un correo electrónico'
  }
//En el input message, si este campo está vacío, agrega la propiedad message al objeto errors en donde su valor sea 
//"Se requiere un mensaje":
  if(!inputs.message){
    errors.message='Se requiere un mensaje'
  }
  return errors;
}

export default function Contact () {
  
  const [inputs, setInputs] = React.useState ({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = React.useState ({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name] : event.target.value
    });

//Setea el estado errors y que éste reciba la función validate.
//Usa el spread operator para copiar el estado anterior.
//Haz que las propiedades y valores del estado sean dinámicas a partir del evento recibido por parámetro
  
  setErrors(
    validate({
      ...inputs,
         [event.target.name]: event.target.value, // se revisa lo mismo que teniamos en setInputs
      })
    );
  }

//esta funcion de object.values: nos permite traer la info que hay dentro de un objeto, es decir la info
//que traen sus propiedad y guardarmelo en un array.
//Convierte el estado errors en un array para medir su longitud, si es igual a 0, muestra un 
//alert con un mensaje, por ejemplo, "Datos completos" y setea los estados inputs y errors en
// su estado original (recuerda que errors tiene la función validate); en caso contrario, muestra 
//un alert con otro mensaje, por ejemplo, "Debe llenar todos los campos".
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!Object.values(errors).length){
      alert("Datos completos");
      setInputs({
        name: '',
        email: '',
        message: '',
      });
      setErrors({
        name: '',
        email: '',
        message: '',
      });
      } else {
        alert("Debe llenar todos los campos");
      }
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input 
        type="text"
        placeholder='Escribe tu nombre...' 
        name='name'
        value={inputs.name} 
        onChange={handleChange}
        className={errors.name && 'warning'}
      />
      {errors.name && <p className='danger'>{errors.name}</p>}

      <label>Correo Electrónico:</label>
      <input 
        type="text" 
        placeholder='Escribe tu email...' 
        name='email' 
        value={inputs.email} 
        onChange={handleChange}
        className={errors.email && 'warning'}
      />
      {errors.email && <p className='danger'>{errors.email}</p>}

      <label>Mensaje:</label>
      <input 
        type="text" 
        placeholder='Escribe tu mensaje...' 
        name='message' 
        value={inputs.message} 
        onChange={handleChange}
        className={errors.message && 'warning'}
      />
      {errors.message && <p className='danger'>{errors.message}</p>}

      <button type= "submit">Enviar</button>
    </form>
  )
}
