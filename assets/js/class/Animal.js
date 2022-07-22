class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get comentarios() {
    return this._comentarios;
  }
  get sonido() {
    return this._sonido;
  }
  reproducirSonido() {
    let reproductor = document.getElementById("player");
    reproductor.src = this._sonido;
    reproductor.play();
  }
}

export default Animal;
