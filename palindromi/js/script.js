function cercaPalindromo(stringa) {
  let j = stringa.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let inizio = stringa[i]; //caratteri iniziali
    let fine = stringa[j - i];//caratteri finali
    if (inizio != fine) {
      return false;
    }
  }
  return true;
}

function isPalindromo(stringa) {
  let element = cercaPalindromo(stringa);
  if (element == true) {

    console.log(`la stringa è palindroma`);
  } else {
    console.log(`la stringa non è palindorma`);
  }
}

//const button = document.querySelector(`#pal`);
//button.addEventListener(`click`,);


let test = "anna";
isPalindromo(test);