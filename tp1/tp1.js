//link video; https://www.youtube.com/watch?v=P2yz3tP7dn

let imagen;
let cantidad = 21;
let distorsion = 0;
let espacio;
let grosor = 2.0;
let limitedistorsion = 80;
let cambiarGrosor = false;
let colorTrazo = 255;

function preload() {
  imagen = loadImage('data/fotop5.jpg');
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  espacio = calcularEspacio(width / 2 - 1, 1);
}

function draw() {
  background(0);

  rectMode(CORNER);
  image(imagen, 0, 0, width / 2, height);

  stroke(255);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);

  rectMode(CENTER);
  if (cambiarGrosor) ajustarGrosor(mouseY);
  strokeWeight(grosor);

  push();
  translate(600, height / 2);

  for (let i = 0; i < cantidad; i++) {
    const lado = espacio * i + random(-distorsion, distorsion) + 1;

    for (let j = 2; j >= 0; j--) {
      if (typeof colorTrazo === 'number') {
        stroke(j === 0 ? 255 : 0);
      } else {
        const r = constrain(red(colorTrazo) + j * 30, 0, 255);
        const g = constrain(green(colorTrazo) + j * 30, 0, 255);
        const b = constrain(blue(colorTrazo) + j * 30, 0, 255);
        stroke(r, g, b);
      }
      noFill();
      rect(0, 0, lado + j * 3, lado + j * 3);
    }
  }

  noStroke();
  fill(255);
  rect(0, 0, 7, 7);
  pop();
}

function colorRGB(valorMaximo) {
  return color(random(valorMaximo), random(valorMaximo), random(valorMaximo));
}
function ajustarGrosor(valorY) {
  grosor = 1 + valorY / 200.0;
  if (grosor > 3) grosor = 3;
}
function calcularEspacio(anchoZona, separacionBase) {
  return (anchoZona / (cantidad - 1)) - separacionBase;
}
function mousePressed() {
  if (mouseX > width / 2) {
    if (distorsion < limitedistorsion) distorsion += 0.5;
    cambiarGrosor = true;
    colorTrazo = colorRGB(255);
  }
}
function keyPressed() {
  if (key === 'r' || key === 'R') {
    distorsion = 0;
    grosor = 2.0;
    cambiarGrosor = false;
    colorTrazo = 255;
  }
}
