//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variáveis do Oponente
let xRaqueteOponente = 582;
let yRaqueteOponente = 150;
let velocidadeyOponente;
let chancedeErrar = 0;

let colidiu = false;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do Jogo
let cj;
let ponto; 
let raquetada;

function preload(){
  cj = loadSound("cj.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  //cj.play();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}

function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaBolinha (){
    if (xBolinha + raio > width ||
    xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function movimentoRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeyOponente

}

function incluiPlacar(){
  stroke (255);
  textSize(16);
  textAlign(CENTER);
  fill (color (255,140, 0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill (color (255,140, 0));
  rect (430, 10, 40, 20);
  fill(255);
  text (pontosOponente, 450, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar(){
  if (pontosOponente >= meusPontos){
    chanceDeErrar +=1 
    if (chanceDeerrar >= 39){
      chanceDeErrar = 40
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
        chanceDeErrar = 35
      }
    }
  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
    xBolinha = 23
  }
}
