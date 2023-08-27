let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + " km/h");
  velocidade -= 20;
  alert("Diminuindo 20 km/h");
  if (velocidade === 40) {
    alert("O carro não diminui a velocidade mais do que isso!!");
    break;
  }
}
