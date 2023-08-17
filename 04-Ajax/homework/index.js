//LISTAR A TODOS LOS AMIGOS:

const lista = document.querySelector('#lista'); // me traigo mi elemento del html nombre del iD del UL
const boton = document.querySelector('#boton'); // esto me lo traigo del id boton del html
const URL = "http://localhost:3000";



const listFriends = (friends) => { // aqui si va a recibir algo, va a recibir la respuesta, es decir, el listado de amigos
  lista.innerHTML = ''; // con esto se queda fijo las lista y no se duplican, repitiendose 1-6 cada vez que oprimo el boton agregar.
  friends.forEach(({ id, name }) => {
    const li = document.createElement('li');
    li.innerHTML = `${id} - ${name}`;
    lista.appendChild(li);
  });
};


const showFriends = () => { // hacer el llamado con el GET y pedir los amigos a la URL, agregandole amigos
  $.get(`${URL}/amigos`,listFriends); // y luego va a ejecutar la funcion listFriends
};

boton.addEventListener('click', showFriends);

//****************************************************** */ BUSCAR UN AMIGO ATRAVES DEL ID QUE LE PASAMOS

const input= document.querySelector('#input');
const search = document.querySelector('#search');
const amigo = document.querySelector('#amigo')


const writeName = (friend) => {
  amigo.innerHTML = friend.name; // El innerHTML nos permite leer un dato o asignarselo a una etiqueta html.
  // en este caso a la etiqueta span(amigo) le estamos asignando el valor que nos trae la libreria con el nombre.
};

const showFriendName = () => {
  const id = input.value;
  $.get(`${URL}/amigos/${id}`, writeName)
};

search.addEventListener('click', showFriendName);

//**************************************************************** */ ELIMINAR AMIGO

const inputDelete = document.querySelector('#inputDelete');
const deleteButton = document.querySelector('#delete');
const success = document.querySelector('#sucess');



const deleteFriend = () => {
  const id = inputDelete.value;
  $.ajax ({
    url: `${URL}/amigos/${id}`,
    type: 'DELETE',
    success: () => {
      inputDelete.value = ''; // esto es que para que cuando vuelva a cargar el input este vacio, y se pueda 
      // volver a colocar el item que quiero eliminar, y no tener que borrar el item que coloque antes.
      alert('Amigo eliminado con exito');
      showFriends(); // quiere decir: que dsps de eliminar, refresca el listado y te 
      // muestra el nuevo listado sin el item que eliminaste.
    }
  });
};

deleteButton.addEventListener('click', deleteFriend);

