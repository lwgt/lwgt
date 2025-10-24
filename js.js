function zufallszahl(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function warten(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function wait(miliseconds) {
  await warten(miliseconds); // wartet 2 Sekunden
}
