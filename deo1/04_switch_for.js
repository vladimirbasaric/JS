// SWITCH
// FOR

// 1. Napisati program koji će ispisati naziv meseca za zadati redni broj.
// Primer: ako se zada broj​ 8 ​treba ispisati ‚‚​avgust​’’.

var mesec = 8;

switch (mesec) {
  case 1:
    console.log("januar");
    break;
  case 2:
    console.log("februar");
    break;
  case 3:
    console.log("mart");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("maj");
    break;
  case 6:
    console.log("jun");
    break;
  case 7:
    console.log("jul");
    break;
  case 8:
    console.log("avgust");
    break;
  case 9:
    console.log("septembar");
    break;
  case 10:
    console.log("oktobar");
    break;
  case 11:
    console.log("novembar");
    break;
  case 12:
    console.log("decembar");
    break;
  default:
    console.log("greska");
}

// 2. Napisati program koji će ispisati naziv godišnjeg doba za zadati dan i mesec.
// Primer: ako se zada ​15​​ januar​ treba ispisati ‚‚​zima​’’.
// Primer: ako se zada ​22 jun ​​treba ispisati ‚‚​leto​’’

var mesec = "jun";
var dan = 22;

switch (mesec) {
  case "januar":
  case "februar":
    console.log("zima");
    break;
  case "mart":
    if (dan < 20) {
      console.log("zima");
    } else {
      console.log("prolece");
    }
    break;

  case "april":
  case "maj":
    console.log("prolece");
    break;
  case "jun":
    if (dan < 22) {
      console.log("prolece");
    } else {
      console.log("leto");
    }
    break;
  case "jul":
  case "avgust":
    console.log("leto");
    break;
  case "septembar":
    if (dan < 23) {
      console.log("leto");
    } else {
      console.log("jesen");
    }
    break;
  case "oktobar":
  case "novembar":
    console.log("jesen");
    break;
  case "decembar":
    if (dan < 22) {
      console.log("jesen");
    } else {
      console.log("zima");
    }
    break;
  default:
    console.log("greska");
}

// 3. Napisati program koji će za zadatu operaciju(+,-,*i/) i dva operanda ispisati rezultat operacije.
// Primer: ako se zada ​+ 3 4 ​treba ispisati ​7​.
// Primer: ako se zada ​* 5 2 ​treba ispisati ​10​.
// Primer: ako se zada​​ / 8 0 ​​treba ispisati ‚‚​Deljenje nulom nije definisano !​‘’

var operacija = '+';
var prvi = 3;
var drugi = 4;

switch (operacija) {
  case '+':
    console.log(prvi + drugi);
    break;

  case '-':
    console.log(prvi - drugi);
    break;

  case '*':
    console.log(prvi * drugi);
    break;

  case '/':
    if (drugi != 0) {
      console.log(prvi / drugi);
    } else {
      console.log("Deljenje nulom nije definisano!");
    }
    break;

  default:
    console.log("Nepoznata operacija!");
}

// FOR

// 4. Napisati program koji ispisuje neparne brojeve u rasponu od 1 do 40
for (var i = 1; i <= 40; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 5. Napisati program koji ispisuje parne brojeve u rasponu od x do​ y​. 
// Primer: ako se zada ​3​ i ​17​ treba ispisati ​46810121416​.
// Primer: ako se zada broj​ 152 ​i ​156​ treba ispisati​ 152154156​.

var x = 152;
var y = 156;

for (var i = x; i <= y; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 6. Napisati program koji ispisuje elemente zadatog niza koji se nalaze na parnim pozicijama.
// Primer: za niz​[3,6,88,2,11,9]​ treba ispisati elemente​ 3 88 11​

var niz = [15, -23, 254, 9901, 111, 122];

for (var i = 0; i < niz.length; i++) {
  if (i % 2 == 0) {
    console.log(niz[i]);
  }
}

// 7. Napisati program koji izračunava proizvode lemenata niza.
// Primer: za niz​​[6,2,3,2] ​​treba ispisati​ 72​

var niz = [6, 2, 3, 2];
var proizvod = 1;

for (var i = 0; i < niz.length; i++) {
  proizvod *= niz[i]; // proizvod = proizvod * niz[i] 
}

console.log(proizvod);

// 8. Napisati program koji ispisuje zbir parnih elemenata niza.
// Primer: za niz​[3,6,88,2,11,9] ​treba ispisati​ 96​.
// Primer: za niz​[3,7,11,5]​ treba ispisati​ 0​.

var niz = [6, 2, 3, 2];
var zbir = 0;

for (var i = 0; i < niz.length; i++) {
  if (niz[i] % 2 == 0) {
    zbir += niz[i];
  }
}

console.log(zbir);

// 9.Napisati program koji proverava da li se zadati broj nalazi u zadatom nizu.
// Primer: za broj ​11​ i niz​[3,6,88,2,11,9]​ treba ispisati ‚‚​Da​’’.
// Primer: za broj​ 111​ i niz​[3,6,88,2,11,9]​ treba ispisati‚‚​Ne​’’.
var niz = [3, 6, 88, 2, 11, 9];
var broj = 6;
var pronadjen = false;;

for (var i = 0; i < niz.length; i++) {
  if (niz[i] == broj) {
    pronadjen = true;
  }
}

if (pronadjen) {
  console.log("Da.");
} else {
  console.log("Ne.");
}

// 10. Napisati program koji proverava da li zadata niska sadrži cifru 4.
// Primer: za nisku ​aude4aty​​treba ispisati‚‚​Da​’’.
// Primer: za nisku ​nsl3kr5ie​​treba ispisati‚‚​Ne​’’.
var niska = "aude4aty";
var sadrzi = false;

for (var i = 0; i < niska.length; i++) {
  if (niska[i] == '4') {
    sadrzi = true;
  }
}

if (sadrzi) {
  console.log("Da.");
} else {
  console.log("Ne.");
}

// 11. Napisati program koji ispisuje ukupan broj pojavljivanja malog i velikog slova ​P​ u zadatoj niski.
// Primer: za nisku ​Pumpa​ treba ispisati​ 2​.
// Primer: za nisku​ gumica​ treba ispisati​ 0​.

var niska = "Pumpa";
var brojac = 0;

for (var i = 0; i < niska.length; i++) {
  if (niska[i] == 'p' || niska[i] == 'P') {
    brojac++;
  }
}

console.log(brojac);

// 12. Napisati program koji ispisuje broj samoglasnika u zadatoj niski.
// Primer: za nisku ​Eukapliptus​ treba ispisati​ 5​.
// Primer: za nisku​ srp ​treba ispisati​ 0​.

var niska = "Eukaliptus";
var brojac = 0;

for (var i = 0; i < niska.length; i++) {
  switch (niska[i]) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      brojac++;
  }
}

console.log(brojac);

// 13. Napisati program koji ispisuje sve podniske dužine 4 za date niske.
// Primer: za nisku​ program​ treba ispisati niske:​ prog rogr ogra gram 
// Primer: za nisku​ mrav​ treba ispisati nisku: ​mrav
// Primer: za nisku​ trn​ treba ispisati nisku:​trn
var niska = "Eukaliptus";

for (var i = 0; i <= niska.length - 4; i++) {
  console.log(niska.substr(i, 4));
}