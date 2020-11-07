class Figura {
  constructor(alto=0, ancho=0, color="verde"){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color
  }
  tomarAncho(){
    return this.ancho * 2
  }
  tomarColor(){
    return this.color
  }
}

const figura = new Figura(10, 20 , "blanco")

// console.log(figura.tomarAncho())
// console.log(figura.alto)


class Circulo extends Figura{
  constructor(alto, ancho, color, circunsferencia=100){
    super(alto, ancho, color)
    this.circunsferencia = circunsferencia
  }
}

const miCirculo = new Circulo(10,20,"verde",50)

// console.log(miCirculo.circunsferencia)
// console.log(miCirculo.alto)

class Muebles {
  constructor(material= "madera", patas=0, peso=0){
    this.material = material
    this.patas = patas
    this.peso = peso
  }
  numeroPatas(){
    return "tiene " + this.patas + " patas"
  }

} 

class Mesa extends Muebles {
  constructor(material, patas, peso, espacio = "patio"){
    super(material, patas, peso)
    this.espacio = espacio
  }
}

const mueble = new Muebles("palo", 4, 10)
console.log(mueble.numeroPatas())