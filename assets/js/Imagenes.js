import Animales from './Consulta.js';

document.getElementById('animal').addEventListener('change', async () => {
  const { animales } = await Animales.getData();
  console.log(animales);
  const animalSeleccionado = animales.find(animal => animal.name == document.getElementById('animal').value);
  console.log(animalSeleccionado);
  // reemplazar el contenido del div con la imagen del animal
  document.getElementById('preview').style.backgroundImage = `url(/assets/imgs/${animalSeleccionado.imagen})`;
});
