const segundosEl = document.querySelector('#segundos');
const minutosEl = document.querySelector('#minutos');
const milesimosEl = document.querySelector('#milesimos');
const iniciarBtn = document.querySelector('#iniciarBtn');
const pausarBtn = document.querySelector('#pausarBtn');
const resetarBtn = document.querySelector('#resetarBtn');
const continuarBtn = document.querySelector('#continuarBtn');



let interval;
let minutos = 0;
let segundos = 0;
let milesimos = 0;
let estaPausado = false;




iniciarBtn.addEventListener('click', comecarCronometro);
pausarBtn.addEventListener('click', pausarCronometro);
continuarBtn.addEventListener('click', continuarCronometro);
resetarBtn.addEventListener('click', resetarCronometro);

function comecarCronometro() {
    interval = setInterval(() => {

      if (!estaPausado) {
          milesimos += 10;
          
      }
  
      if (milesimos === 1000) {
          segundos++;
          milesimos = 0;
      }
  
      if (segundos === 60) {
          minutos++;
          segundos = 0;
      }
  
      minutosEl.textContent = formatarTempo(minutos);
      segundosEl.textContent = formatarTempo(segundos);
      milesimosEl.textContent = formatarMilesimos(milesimos);
        
        
    }, 10);

    iniciarBtn.style.display = 'none';
    pausarBtn.style.display = 'block';
}

function pausarCronometro () {
    estaPausado = true;
    pausarBtn.style.display = 'none';
    continuarBtn.style.display = 'block';
    

}

function continuarCronometro() {
    estaPausado = false;
    continuarBtn.style.display = 'none';
    pausarBtn.style.display = 'block';

}

function resetarCronometro() {
    clearInterval(interval);
    milesimos = 0;
    segundos = 0;
    minutos = 0;

    estaPausado = false

    milesimosEl.textContent = '000';
    segundosEl.textContent = '00';
    minutosEl.textContent = '00';

    continuarBtn.style.display = 'none';
    pausarBtn.style.display = 'none';
    iniciarBtn.style.display = 'block';

}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;

}

function formatarMilesimos (tempo) {
    return tempo < 100 ? `${tempo}`.padStart(3, '0') : tempo;
}