let reci = ['drvo', 'kaktus', 'smiki', 'baki', 'auto', 'majmun', 'telefon', 'lopta', 'kafa', 'olovka'];

let trenutnaRec = document.querySelector('#trenutnaRec');

let randomWord = reci[Math.floor(Math.random() * reci.length)];


trenutnaRec.textContent = randomWord;

