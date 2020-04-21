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
// mozemo da ih dohvatimo i ovako 
// let prvi = str.charAt(0);
// let poslednji = str.charAt(str.length - 1);
// pa onda izvrsimo zamenu ovim redom
str = str.replace(poslednji, prvi);
str = str.replace(prvi, poslednji);
console.log(str);

// 9.Napisati program koji proverava da li se zadati broj nalazi u zadatom nizu.
// Primer: za broj ​11​ i niz​[3,6,88,2,11,9]​ treba ispisati ‚‚​Da​’’.
// Primer: za broj​ 111​ i niz​[3,6,88,2,11,9]​ treba ispisati‚‚​Ne​’’.
var niz = [3, 6, 88, 2, 11, 9];
var broj = 6;
var pronadjen = false;

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

// 5. Napisati program koji proverava da li je zadata niska palindrom.
// Primer: ako je zadata niska ​radar ​treba ispisati ​Da​.
// Primer: ako je zadata niska ​dabar ​treba ispisati​ Ne​.

var niska = "radar";

console.log(palindrom(niska) ? "Da" : "Ne");

function palindrom(s) {
	var i = 0,
		j = s.length - 1;

	while (i < j) {
		/* 
			Ukoliko nadjemo na nepoklapanje bar na jednoj 
			poziciji onda niska sigurno nije palindrom i 
			dalje ne moramo da proveravamo ostale pozicije. 
			Mozemo prekinuti petlju i vratiti odgovarajucu 
			vrednost. 

			Naredbom return mozemo da skratimo posao - ona 
			prekida izvrsavanje funkcije pa i same petlje.
		*/
		if (s[i] != s[j]) {
			return false;
		}

		i++;
		j--;
	}

	/* 
		Nakon petlje, ukoliko funkcija nije prekinuta, 
		znaci da nismo nasli neslaganja tj. da niska jeste 
		palindrom pa vracamo true iz funkcije.
	*/
	return true;
}

// 7. Napisati funkciju ​obrni_nisku(s) ​koja vraća obrnutu nisku ​s​.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: ako je zadata niska ​abcde​ treba ispisati ​edcba​.
// Primer: ako je zadata niska ​abcba ​treba ispisati ​abcba.​

var niska = "abcde";

console.log(obrni_nisku(niska));

function obrni_nisku(s) {
	var obrnuta = "";
	var i = s.length - 1;

	while (i >= 0) {
		obrnuta += s.charAt(i);
		i--;
	}

	return obrnuta;
}
	
return false;

// imas dosta komplikovanih zadataka na ovu foru u fajlu
// 06_zadaci_while_i_funkcije.js



// O preklapanju parametara i lokalnih promenljivih funkcije:
// U ovakvim scenarijima prednost se daje lokalnim promenljivama (tzv. shadowing).

// a je ime i parametra funkcije i lokalne promenljive funkcije test
function test(a, n) {
  var a = 10;
  console.log(a + n);
}

test(5, 8);

// Rezultat prethodnog fragmenta koda je 18.

// Zakljucak za poneti: 
// Prilikom izvrsavanja funkcije i odredjivanja vrednosti koriscene promenljive, promenljiva se 
// prvo trazi u skupu parametra, 
// zatim u skupu lokalnih promenljivih, 
// a potom u skupu globalnih promenljivih. 
// Pretraga se zaustavlja u trenutku kada se naidje na promenljivu trazenog imena.
// Ukoliko se promenljiva ne pronadje, izvrsavanje se prekida uz gresku tipa Reference Error.

// Ovaj nacin uvezivanja imenskih prostora pretrage se naziva lanac opsega (eng. scope chain). 

//*********** obavezno pogledati 20_obnavljanje ************************

