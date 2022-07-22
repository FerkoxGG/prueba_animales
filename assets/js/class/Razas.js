import Animal from "./Animal.js";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    this.setSonido("../../sounds/Chillido.mp3");
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    this.setSonido("../../sounds/Siseo.mp3");
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Gruñir() {
    this.setSonido("../../sounds/Gruñido.mp3");
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    this.setSonido("../../sounds/Aullido.mp3");
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    this.setSonido("../../sounds/Rugido.mp3");
  }
}

export { Aguila, Serpiente, Oso, Lobo, Leon };
