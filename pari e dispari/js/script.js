const numUtente = parseInt(prompt(`scegli numero tra 1 e 5`));
const pariDispari = prompt(`scegli pari o dispari`)

const numCpu = numRandom();
const somma = sommaNum(numUtente, numCpu);

if (controlNum(somma) === pariDispari) {
  console.log(`hai vinto`);
} else {
  console.log(`hai perso`);
}

function numRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

function sommaNum(num1, num2) {
  return num1 + num2;
}

function controlNum(num) {
  if (num % 2 === 0) {
    return `pari`
  } else {
    return `dispari`
  }
}

console.log(`il tuo numero è:${numUtente}`);
console.log(`hai scelto ${pariDispari}`);
console.log(`il numero della cpu è:${numCpu}`);
console.log(`quindi la somma è:${somma}`);