// tady je místo pro náš program

// let salary = 15000;
// let personName = 'Eva'

// if (salary > 40000 && personName === 'Jana') {
//     console.log('Pekny plat')
// } else if (salary > 25000) {
//     console.log('ok')
// } else {
//     console.log('Jdi za sefem, ze chces pridat.')
// }

// if (! (salary > 40000 || personName === 'Eva')) {//cele prefixuji jako nepravdu pomoci ! = otoceni logicke podminky
//     console.log('Pekny plat')
// } else if (salary > 25000) {
//     console.log('ok')
// } else {
//     console.log('Jdi za sefem, ze chces pridat.')
// }

function hodKostkou() {
    let zprava = document.querySelector('#zprava');
    let kostka = document.querySelector('#kostka');
    let hodnota = Math.floor(Math.random() * 6) + 1;

    kostka.src = 'obrazky/' + hodnota + '.png';
    
    if(hodnota === 6) {
        zprava.textContent = '6! Vyhral si!';
    } else {
        zprava.textContent = 'Hazej znovu. Hodil si ' + hodnota;
    }
}