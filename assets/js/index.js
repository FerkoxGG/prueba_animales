import { Aguila, Serpiente, Oso, Lobo, Leon } from "./class/Razas.js";
import Animales from "./Consulta.js"; 

let animalesInvestigando = [];


document.getElementById("btnRegistrar").addEventListener("click", async () => {
  let nombre = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;
  const { animales } = await Animales.getData();
  const animalSeleccionado = animales.find(animal => animal.name == document.getElementById('animal').value);
  let img = `/assets/imgs/${animalSeleccionado.imagen}`;
  let sonido = `/assets/sounds/${animalSeleccionado.sonido}`;

  console.log(nombre);

  let nuevoAnimal;
  if (nombre == "Aguila") {
    nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Serpiente") {
    nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Oso") {
    nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Lobo") {
    nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Leon") {
    nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido);
  }
  // console.log(nuevoAnimal.nombre());
  animalesInvestigando.push(nuevoAnimal);
  console.log(animalesInvestigando);
  reloadTable();
});

const reloadTable = () => {
  const animalesTable = document.getElementById("Animales");
  animalesTable.innerHTML = ""; // Limpiar tabla
  animalesInvestigando.forEach(a => {
    console.log(a);
    animalesTable.innerHTML += `
      <div class="card m-2" style='width: 25rem' >
        <div class="card-body">
          <h5 class="card-title">${a.nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${a.edad}</h6>
          <p class="card-text">${a.comentarios}</p>
          <img src="${a.img}" alt="${a.nombre}" class="card-img-top">
          <audio id="player" controls>
            <source src="${a.sonido}" type="audio/mpeg">
          </audio>
        </div>
      </div>
    `;
  });

}