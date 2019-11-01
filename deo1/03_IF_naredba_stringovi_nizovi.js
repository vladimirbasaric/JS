// IF NAREDBA
// STRINGOVI
// NIZOVI

// 1. Za zadatu cenu i popust, odrediti finalnu cenu proizvoda.
var cena, popust, cena_sa_popustom;
cena = 1250;
popust = 20; // 20%
cena_sa_popustom = cena * (100 - popust) / 100;

console.log(cena_sa_popustom);

// 2. Za zadati dvocifreni broj odrediti cifru jedinica.
var broj, cifra_jedinica;
broj = 125;
cifra_jedinica = broj % 10; // poslednja cifra se dobija kao ostatak pri deljenju sa 10

console.log(cifra_jedinica);

// 3. Za zadati iznos u dinarima, ispisati vrednost u evrima.
var dinari, evri, kurs;
dinari = 1000;
kurs = 118.2;
evri = dinari / kurs;

console.log(evri);

// 4. Za zadati trocifren broj, odrediti da li je cifra desetica parna.
var broj = 123,
  desetica;
// primer 123
// deljenjem sa 10 -> 12.3
// izvucemo ceo deo sa Math.floor -> 12
// izvucemo cifru jedinica sa % 10 -> 2 -> ovo je cifra desetica polaznog broja
desetica = Math.floor(broj / 10) % 10;

// == -> operator poredjenja na jednakost
// ako je ostatak pri deljenju sa 2 jednak nula, to znaci da je cifra parna
parna = desetica % 2 == 0;
console.log(parna);

// 5. Za zadata dva dvocifrena broja, odrediti zbir njihovih cifara u zapisu brojeva.
var broj1 = 52,
  broj2 = 30,
  jedinica1, jedinica2, desetica1, desetica2;
jedinica1 = broj1 % 10;
jedinica2 = broj2 % 10;
desetica1 = Math.floor(broj1 / 10) //% 10;
desetica2 = Math.floor(broj2 / 10) // % 10;

var zbir = jedinica1 + desetica1 + jedinica2 + desetica2;
console.log(zbir);

// 6. Odrediti ostatak pri deljenju trocifrenog broja zbirom njegovih cifara.
var broj = 143,
  jedinica, desetica, stotina;
jedinica = broj % 10;
desetica = Math.floor(broj / 10) % 10;
stotina = Math.floor(broj / 100) % 10;

var ostatak = broj % (jedinica + desetica + stotina);
console.log(ostatak);

// IF NAREDBA

//1.1 Odrediti da li je broj paran ili neparan.
var broj = 10;
if (broj % 2 == 0) {
  console.log('broj je paran');
} else {
  console.log('broj je neparan');
}

// 1.2 Odrediti maksimum dva broja.
// pretpostavimo da su brojevi razliciti
var broj1 = 5;
var broj2 = 6;
if (broj1 > broj2) {
  console.log("prvi je veci");
} else {
  console.log("drugi je veci");
}

// 1.3 Odrediti minimum tri broja.
// pretpostavimo da su brojevi razliciti
var broj1 = 7;
var broj2 = 10;
var broj3 = 4;
if (broj1 < broj2 && broj1 < broj3) {
  console.log("prvi je najmanji");
} else if (broj2 < broj1 && broj2 < broj3) {
  console.log("drugi je najmanji");
} else {
  console.log("treci je najmanji");
}

// 1.4 Da li je broj pozitivan, negativan ili jednak nuli.
var broj = -7;
if (broj > 0) {
  console.log("broj je pozitivan");
} else if (broj == 0) {
  console.log("broj je 0");
} else {
  console.log("broj je negativan");
}

// 1.5 Proizvod parnih brojeva.
var broj1 = 7;
var broj2 = 4;
var broj3 = 10;
// ovu promenljivu cemo da mnozimo sa svim brojeva koji su parni
// ona je po defaultu jednaka 1
var proizvod = 1;
if (broj1 % 2 == 0) {
  proizvod = proizvod * broj1;
}
// ne treba else izmedju
// sve brojeve posmatramo nezvisno
if (broj2 % 2 == 0) {
  proizvod = proizvod * broj2;
}
if (broj3 % 2 == 0) {
  proizvod = proizvod * broj3;
}
console.log("proizvod je " + proizvod);


// STRINGOVI


// 2.1 Od datog niza od 4 strina, ispisati string koji se dobija njihovim nadovezivanjem.
var strniz = ["ab", "cd", "e", "fgh"];
var str = strniz[0] + strniz[1] + strniz[2] + strniz[3];
console.log(str);

// 2.2 Proveriti da li je drugi karakter u stringu jednak slovu "a".
var str = "abababababa";
if (str.charAt(1) == "a") {
  console.log("jeste jednak a");
} else {
  console.log("nije jednak a");
}

// 2.3  Ispisati srednji karakter stringa.
var str = "abcdedcba";
console.log(str.charAt(str.length / 2));

// 2.4 Karaktere od 10 do 15 mesta u stringu zameniti stringom "abc123".
var str = "abcdefghijklmnopqrstuvwxyz";
// najpre izdvojimo podstring koji je od 10. do 15. mesta
var podstring = str.substr(10, 6);
// njega sada ubacimo u funkciju replace
str = str.replace(podstring, "abc123");
console.log(str);

// 2.5 Za dati string od 5 slova, zameniti mesta prvom i poslednjem slovu.
var str = "abcde";
// izdvojimo podstringove koji oznacavaju prvi i poslednji karakter
var prvi = str.substr(0, 1);
var poslednji = str.substr(str.length - 1, 1);
// pa onda izvrsimo zamenu ovim redom
str = str.replace(poslednji, prvi);
str = str.replace(prvi, poslednji);
console.log(str);


//NIZOVI 


// 3.1 Zameniti vrednost prvom i poslednjem elementu niza.
var niz = [6, 3, 4, 1, 10, 5, 23];
/*
potrebna nam je pomocna promenljiva, jer dve naredbe
niz[0] = niz[niz.length - 1]
niz[niz.length - 1] = niz[0]
nece razmeniti vrednosti
*/
var pomocna = niz[0];
niz[0] = niz[niz.length - 1];
niz[niz.length - 1] = pomocna;
console.log(niz);

// 3.2 Zameniti srednji element niza brojem 10.
// pretpostavimo da niz ima neparan broj elemenata
// inace smo mogli raditi samo ako je if (niz.length % 2 == 1)
var srednji = (niz.length - 1) / 2;
niz[srednji] = 10;
console.log(niz);

// 3.3 Ispisati sve parne elemente niza (peske).
// napravimo niz parnih brojeva, koji je na pocetku prazan
var parni = [];
// moze if da se pise i bez viticastih zagrada, a moze i u redu
if (niz[0] % 2 == 0) parni.push(niz[0]);
if (niz[1] % 2 == 0) parni.push(niz[1]);
if (niz[2] % 2 == 0) parni.push(niz[2]);
if (niz[3] % 2 == 0) parni.push(niz[3]);
if (niz[4] % 2 == 0) parni.push(niz[4]);
if (niz[5] % 2 == 0) parni.push(niz[5]);
if (niz[6] % 2 == 0) parni.push(niz[6]);
console.log(parni);

// 3.4 Negativne elemente niza pomnoziti sa 2.
// promenimo bar prvi i poslednji da budu neki negativni brojevi:
niz[0] = -2;
niz[1] = -3;
// a *= b je kraci zapis od a = a * b
// slicno vazi i za ostale racunske operacije
if (niz[0] < 0) niz[0] *= 2;
if (niz[1] < 0) niz[1] *= 2;
if (niz[2] < 0) niz[2] *= 2;
if (niz[3] < 0) niz[3] *= 2;
if (niz[4] < 0) niz[4] *= 2;
if (niz[5] < 0) niz[5] *= 2;
if (niz[6] < 0) niz[6] *= 2;
console.log(niz);

// 3.5 Odrediti zbir svih elemenata u nizu.
var zbir = niz[0] + niz[1] + niz[2] + niz[3] + niz[4] + niz[5] + niz[6];
// rezultat bi trebalo da bude -4+(-6)+4+10+10+5+6=25 - i jeste
console.log(zbir);