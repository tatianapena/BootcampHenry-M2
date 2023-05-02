const URL = "http://localhost:5000/amigos";
const button_amigos = document.querySelector("#boton");
const lista = document.getElementById("lista");
const inputBuscar = $("#input");
const buttonInputBuscar = document.getElementById("search");
const spanAmigo = $("#amigo");
const buttonDelete = document.querySelector("#delete");
const inputDelete = $("#inputDelete");

buttonInputBuscar.addEventListener("click", clickSearch);

buttonDelete.addEventListener("click", clickDelete);

// console.log(inputBuscar.val())

function clickSearch() {
  const value = inputBuscar.val();
  getAmigo(value);
}

function clickDelete() {
  const value = inputDelete.val();
  deleteAmigo(value);
}

const getAmigo = (id) => {
  // "http://localhost:5000/amigos";
  const url = `${URL}/${id}`;
  $.get(url, (response) => {
    spanAmigo.text(response.name);
  });
};

const deleteAmigo = (id) => {
  const url = `${URL}/${id}`;
  $.ajax({
    url: url,
    type: "DELETE",
    success: (response) => {
      console.log(response);
    },
  });
};

const getAmigos = () => {
    lista.innerHTML = ""
  $.get(URL, function (response) {
    amigos = true;
    console.log("hola, hice la peticion");
    // amigos -> array
    response.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = element.name;
      lista.appendChild(li);
    });
  });
};

button_amigos.addEventListener("click", getAmigos);

$.ajax({
    token: 1,
  url: url,
  type: "DELETE",
  success: (response) => {
    console.log(response);
  },
});

$.get("lkjhk", () =>{})