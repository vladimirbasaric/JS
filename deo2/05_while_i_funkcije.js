// WHILE PETLJA
// FUNKCIJE

// 1. Napisati program koji ispisuje sve brojeve od 1 do zadatog broja​ n​.
// Primer: za zadati broj​ 5 ​treba ispisati: ​12345​
var n = 10;
var i = 1;

while (i <= n) {
  console.log(i);
  i++;
}
// ili preko for petlje
var n = 5;
for (i = 1; i <= n; i++){
    console.log(i)
}

// 2. Napisati program koji određuje najveću cifru u zapisu zadatog broja x​.
// Primer: za zadati broj​ 65234 ​treba ispisati​ 6​.
// Primer: za zadati broj​ -2314​ treba ispisati ​4​.
var x = -2743;
var max = -1;

x = Math.abs(x);

while (x != 0) {
  var cifra = x % 10;

  if (max < cifra) {
    max = cifra;
  }

  x = Math.floor(x / 10);
}

console.log(max);

// 3. Napisati program koji pronalazi i ispisuje prvi negativan broj u zadatom nizu.
// Primer: za zadati niz​ [15,2,-8,3,-11,5]​ treba ispisati​- 8​.
// Primer: za zadati niz​ [15,2,8,3,11,5] ​treba ispisati ​Nema negativnih brojeva​.
var niz = [1, 5, 8, 23, 51, 11, 70];
var i = 0;
var pronadjen = false;

while (i < niz.length) {
  if (niz[i] < 0) {
    console.log(niz[i]);
    pronadjen = true;
    break;
  }

  i++;
}

if (!pronadjen) {
  console.log("Nema negativnih elemenata.");
}

// ili preko for petlje
let niz = [1, 5, 8, 23, 51, -11, -70];
let pronadjen = false; 
for (let i = 0; i < niz.length; i++){
  if (niz[i] < 0){
      console.log(niz[i]);
      pronadjen = true;   
      break;
  }   
}

if (!pronadjen) {
  console.log("Nema negativnih elemenata.");
}

// 4. Napisati program koji ispisuje samo one elemente niza koji su deljivi brojem 5.
// Primer: za zadati broj​ [1,42,-56,15,-10,42,0,2]​  treba ispisati ​15 -10 0​.
// Primer: za zadati broj ​[100,250,3000,-90010] ​treba ispisati​ 100 250 3000 -90010​.


var niz = [1, 15, 203, -1992, -10, 0];
var i = 0;

while (i < niz.length) {
  if (niz[i] % 5 != 0) {
    i++;
    continue;
  }

  console.log(niz[i]);
  i++;
}

// moze i ovako
for (i = 0; i < niz.length; i++) {
  if (niz[i] % 5 != 0) {
    continue;
  }

  console.log(niz[i]);
}
// 5. Napisati funkciju ​abs(x)​ koja vraća apsolutnu vrednost broja​ x​. 
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost. 
// Primer: ako se zada broj​ 4​ treba ispisati ​4​. 
// Primer: ako se zada broj​ -42 ​treba ispisati​ 42​.


function apsolutna_vrednost(x) {
  var aps;

  if (x < 0) {
    aps = -x;
  } else {
    aps = x;
  }

  x = 1;

  return aps;
}


var broj = 9963;
var aps_broj = apsolutna_vrednost(broj);
console.log(aps_broj);
console.log(broj);


//Moje resenje koje je proradilo
// function apsolutna(x) {
//     if (x < 0) {
//         x = -x;
//     } else {
//         x = x;
//     }
//     return x;
// }

// console.log(apsolutna(-5));


// resenje iz sledeceg primera u 6.html
// function abs(x) {
//     return x < 0 ? -x : x;
// }

// 6. Napisati funkciju ​obrni_broj(x) ​koja vraća obrnut broj​ x​.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: ako je zadat broj ​1234 t​reba ispisati​ 4321​.
// Primer: ako je zadat broj​ -983 ​treba ispisati​ -389​.

var x = 9431583;
var obrnuto = obrni_cifre(x);
console.log(obrnuto);

function obrni_cifre(broj) {
  var obrnut_broj = 0;
  var aps_broj = abs(broj);

  while (aps_broj != 0) {
    var c = aps_broj % 10;
    obrnut_broj = obrnut_broj * 10 + c;
    aps_broj = Math.floor(aps_broj / 10);
  }

  if (broj < 0) {
    return -obrnut_broj;
  } else {
    return obrnut_broj;
  }

}

function abs(x) {
  return x < 0 ? -x : x;
}

// 7. Napisati funkciju​ obrni_niz(a) ​koja obrće niz​ a​. Zatim treba pozvati funkciju i ispisati izmenjen niz.
// Primer: za zadati niz [1,42,42,15,10,42,0,2] ​treba ispisati​ [2,0,42,10,15,42,42,1]​. 
// Primer: za zadati niz​ [1,15,10,0,2] ​treba ispisati ​[2,0,10,15,1]​


var niz = [1, 15, 20, -189, 2];
console.log(niz);

obrni_niz(niz);

console.log(niz);


function obrni_niz(a) {
  var i = 0;
  var j = a.length - 1;

  while (i < j) {
    var pomocna = a[i];
    a[i] = a[j];
    a[j] = pomocna;

    i++;
    j--;
  }
}

/*
8. Napisati funkciju​ zameni(x, i, c) ​koja zamenjuje​ i​-tu cifru u zapisu broja​ x ​cifrom ​c ​i vraća izmenjeni broj.
Zatim treba pozvati funkciju i ispisati dobijenu vrednost. Napomena: ​pozicije u broju posmatramo s desna na levo 
počevši od 0, tako da je cifra jedinica na poziciji ​0​, a prva cifra u zapisu na poziciji ​broj_cifara-1​.
Primer: ako se zada broj ​-12345​, pozicija ​2 ​i cifra ​9 ​treba ispisati -12945​. 
Primer: ako se zada broj​ 12345​, pozicija ​0 ​i cifra ​5​ treba ispisati ​12345​.
*/

var broj = -123456;
var izmenjen_broj = zameni_itu_cifru(broj, 2, 8);
console.log(izmenjen_broj);

function zameni_itu_cifru(x, i, c) {
  var stepen = Math.pow(10, i);
  var znak = x < 0 ? -1 : 1;
  x = x < 0 ? -x : x;

  var cifra_i = Math.floor(x / stepen) % 10;

  x = x - cifra_i * stepen + c * stepen;

  return x * znak;
}

/*
  9. Napisati funkciju ​pozicija_minimuma(a) ​koja u nizu ​a ​traži najmanji element i vraća njegovu poziciju.
  Ukoliko više elemenata ima najmanju vrednost u nizu, vratiti poziciju prvog od njih.
  Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
  Primer: za zadati niz​[1,-42,42,15,10,-42,0,2]​ treba ispisati ​1​.
  Primer: za zadati niz​[1,15,10,0,2]​ treba ispisati ​3​.
*/

var niz = [123, -921, 93, -19, 503, -921, 12546];
console.log(pozicija_minimuma(niz));

function pozicija_minimuma(a) {
  var min = a[0];
  var min_pozicija = 0;
  var i = 1;

  while (i < a.length) {
    if (a[i] < min) {
      min = a[i];
      min_pozicija = i;
    }

    i++;
  }

  return min_pozicija;
}