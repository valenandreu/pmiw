let principal
  let musica;
let juego

  let imgRio;
let imgJugador;
let imgSanguche;
let imgBenson;
let imgArcade;

let portada;
let portadaPerdiste;
let portadaGanaste;
let portadaTutorial;
let portadaCreditos;
let imgBoton;

function preload() {
  soundFormats('mp3');
  musica=loadSound("data/bala.mp3")

    imgCasa = loadImage("data/casa.jpeg");
  imgJugador = loadImage("data/personajes.jpeg");
  imgSanguche = loadImage("data/doblesanguche.jpeg");
  imgBenson = loadImage("data/benson.jpeg");
  imgArcade = loadImage("data/arcade.jpeg");
  portada = loadImage("data/portada.jpeg");
  portadaPerdiste = loadImage("data/derrota.jpeg");
  portadaGanaste = loadImage("data/musculoso.jpeg");
  portadaTutorial = loadImage("data/tutorial.jpeg");
  portadaCreditos = loadImage("data/creditos.jpeg");
  imgBoton = loadImage("data/boton.jpeg");
}


function setup() {
  createCanvas(640, 480);
  principal = new Principal();
  juego = new Juego();
}


function draw() {
  background(170, 0, 170);
  principal.mostrar();


  if (keyIsPressed) {
    juego.teclaPresionada();
  }
}
function mousePressed() {
  principal.cambioDePantallas()
}
