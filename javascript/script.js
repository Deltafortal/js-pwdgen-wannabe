console.log('JS OK')

// Definizione variabili

let nome;
let cognome;
let colore;

// Chiedi di inserire il come e Salvalo
nome = prompt('Inserisci il tuo nome' , 'Aldo');
console.log(nome);

// Chiedi di inserire il suo cognome e salvalo
cognome = prompt('Inserisci il tuo cognome' , 'Lucchetta');
console.log(cognome);

// Chiedi di inserire il suo colore preferito e salvalo
colore = prompt('Inserisci il tuo colore preferito' , 'Viola');
console.log(colore);

// Somma le variabili
const passw = nome + cognome + colore + '21';
console.log(passw);

// Saluta
document.getElementById('namePlaceHolder').innerText = nome;

// trova il placehoder nel DOM e inserisci la password generata
document.getElementById('pwPlaceHolder').innerText = passw;

