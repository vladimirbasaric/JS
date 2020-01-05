// 1. Napisati program koji ispisuje elemente zadatog niza pri čemu preskače svaki treći element.
// Primer: ako je zadat niz​[1,2,3,4,5,6,7]​ treba ispisati ​​1 2 4 5 7​.
// Primer: ako je zadat niz​[15,35,-122,84,-2199,55648,1,2013,-975]​ treba ispisati​​ 
// 15 35 84 -2199 1 2013​

var niz = [15, 35, -122, 84, -2199, 55648, 1, 2013, -975];
var i = 0;

while (i < niz.length) {
	if ((i + 1) % 3 == 0) {
		i++;
		continue;
	}

	console.log(niz[i]);
	i++;
}

// 2. Napisati funkciju​ kvadrat(x)​ koja računa kvadrat prosleđenog broja x.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: ako se zada broj ​4​ treba ispisati ​16​.
// Primer: ako se zada broj​ -16​ treba ispisati ​256​.

var broj = -16;

console.log(kvadrat(broj));

function kvadrat(x) {
	return x * x;
}

// 3. Napisati funkciju​ min(x,y) ​koja određuje minimum zadatih brojeva.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: ako su zadati brojevi ​5 ​i ​-17 ​treba ispisati ​-17​.

var x = 18;
var y = -4;

console.log(minimum(x, y));

function minimum(x, y) {
	return x < y ? x : y;
}

// 4. Napisati funkciju​ prebroj(a,x) ​koja broji koliko puta se pojavljuje broj x​ u nizu ​a​.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: za zadati niz​[1,42,42,15,10,42,0,2] ​i broj​ 42 ​treba ispisati ​3​. 
// Primer: za zadati niz​[1,15,10,0,2]​ i broj​ 3 ​treba ispisati ​0​.

var a = [1, 42, 42, 15, 10, 42, 0, 2];
var x = 42;

console.log(prebroj(a, x));

function prebroj(niz, broj) {
	var brojac = 0,
		i = 0;

	while (i < niz.length) {
		if (niz[i] === broj) {
			brojac++;
		}
		i++;
	}
	return brojac;
}
// moje resenje, moze i ovako
let niz = [1, 42, 42, 15, 10, 42, 0, 2];
let broj = 42;

function prebroj(a, x) {
	let brojac = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] == x) {
			brojac = brojac + 1; // brojac++;
		}
	}
	return brojac;
}

console.log(prebroj(niz, broj));

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

// 6. Napisati program koji ispisuje sve elemente zadatog niza​ a​ koji sadrže zadatu cifru ​c​.
// Primer: ako je zadat niz​[1223,125,-983,564,-9985,20007,655] ​i cifra ​5 
// treba ispisati ​125 564 -9985 655​.

var niz = [1223, 125, -983, 564, -9985, 20007, 655];
var cifra = 5;

elementi_koji_sadrze_cifru(niz, cifra);

function elementi_koji_sadrze_cifru(a, c) {
	var i = 0;

	while (i < a.length) {
		if (sadrzi_cifru(a[i], c)) {
			console.log(a[i]);
		}

		i++;
	}
}

function sadrzi_cifru(broj, cifra) {
	broj = broj < 0 ? -broj : broj;

	while (broj != 0) {
		if (broj % 10 == cifra) {
			return true;
		}

		broj = Math.floor(broj / 10);
	}
		
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


// 8. Napisati funkciju ​broj_cifara(x) ​koja vraća broj cifara broja ​x​.
// Zatim treba odrediti i ispisati prvu cifru u zapisu zadatog broja.
// Primer: ako se zada broj ​82901​ treba ispisati​ 8​.
// Primer: ako se zada broj ​-334562 ​treba ispisati ​3​.

var x = -2901;
var br = broj_cifara(x);

var prva_cifra = Math.floor(apsolutna_vrednost(x) / Math.pow(10, br - 1));

console.log(prva_cifra);

function broj_cifara(x) {
	var br = 0;

	x = apsolutna_vrednost(x);

	while (x != 0) {
		br++;
		x = Math.floor(x / 10);
	}

	return br;
}

function apsolutna_vrednost(x) {
	var abs = x < 0 ? -x : x;
	return abs;

	/*
		Primetimo da nije bilo potrebe da u ovom slucaju 
		pravimo posebnu promenljivu i u nju smestamo 
		vrednost izraza. Mogli smo uz return naredbu da 
		navedemo izraz cija bi vrednost bila izracunata a 
		onda i vracena iz funkcije:
		return x < 0 ? -x : x;
	*/
}

// 9. Napisati program koji određuje poziciju najveće cifre u zapisu zadatog broja.
// Ukoliko se na više pozicija pojavljuje najveća cifra, vratiti poslednju poziciju gledano s desna na levo.
// Primer: ako se zada broj​ 82901 ​treba ispisati ​2​.
// Primer: ako se zada broj​ -331032​ treba ispisati​ 5​.
// Primer: ako se zada broj​ 2222 ​treba ispisati ​3​.

var broj = -331032;

console.log(pozicija_najvece_cifre(broj));

function pozicija_najvece_cifre(x) {
	var cifra;
	var pozicija = -1;
	var max_cifra = -1;
	var max_pozicija = -1;


	x = x < 0 ? -x : x;

	while (x != 0) {
		cifra = x % 10;
		pozicija++;

		if (max_cifra <= cifra) {
			max_cifra = cifra;
			max_pozicija = pozicija;
		}

		x = Math.floor(x / 10);
	}

	return max_pozicija;
}

// 10. Napisati funkciju ​pozicija(a,x) ​koja vraća poziciju broja ​x ​​u nizu ​a​.
// Ukoliko niz​ a ​ne sadrži broj​ x​,funkcija vraća ​-1​.
// Ukoliko se na više pozicija pojavljuje najveća cifra,vratiti prvu poziciju.
// Zatim treba pozvati funkciju i ispisati dobijenu vrednost.
// Primer: ako se zada niz​[23,51,-2,-13,8,7,-6]​ i broj​ 8 ​treba ispisati​ 4​.
// Primer: ako se zada niz​[23,8,-2,-13,8,7,-6] ​i broj​ 8 ​treba ispisati​ 1​.
// Primer: ako se zada niz​[23,51,-2,-13,8,7,-6]​ i broj​ 5​ treba ispisati​ -1​.

var niz = [23, 51, -2, -13, 8, 51, 7, -6];
var broj = 51;

console.log(pozicija(niz, broj));


function pozicija(a, x) {
	var i = 0;

	while (i < a.length) {
		/*
			Posto se trazi prva pozicija, mozemo vratiti i cim naidjemo na vrednost x. 
		*/
		if (a[i] == x) {
			return i;
		}

		i++;
	}

	return -1;
}

// 11. Napisati program koji u nizu četvorocifrenih brojeva nalazi element sa najvećom cifrom desetice.
// Ukoliko se u nizu nalazi više elemenata sa najvećom cifrom, ispisati poslednji.
// Primer: ako je zadat niz​[1223,-1250,-9893,5614,-9985,2007,6575] treba ispisati​ -9893​.
// Primer: ako je zadat niz​[5612,8820,-1924,5945,2037,6575] ​treba ispisati ​6575.

var niz = [1223, -1250, -9893, 5614, -9985, 2007, 6575];

console.log(najveca_desetica(niz));

function najveca_desetica(a) {
	// prvi element postavljamo za trenutni maksimum
	var max_element = a[0];

	/*
		Izdvajamo cifru desetice koriscenjem pomocne 
		funkcije. Cifra desetice nalazi se na poziciji 1.
	*/
	var max_desetica = izdvoji_cifru(a[0], 1);
	var i = 1;

	while (i < a.length) {
		var desetica = izdvoji_cifru(a[i], 1);

		if (desetica >= max_desetica) {
			max_desetica = desetica;
			max_element = a[i];
		}

		i++;
	}

	return max_element;
}


// pomocna funkcija za izdvajanje cifre na poziciji p
function izdvoji_cifru(x, p) {
	return Math.floor(Math.abs(x) / Math.pow(10, p)) % 10;
}

// 12. Napisati program koji proverava da li je niz neopadajući.
// Primer: ako se zada niz​[3,6,9,89,100] ​treba ispisati‚‚​Niz je neopadajuci​’’.
// Primer: ako se zada niz​[3,6,6,89] ​treba ispisati ‚‚​Niz je neopadajuci​’’. 
// Na primer, ako se zada niz​[5,9,2,11]​ treba ispisati‚‚​Niz nije neopadajuci​’’

var niz = [3, 6, 6, 89, 100];

console.log(neopadajuci(niz) ? "Niz je neopadajuci." : "Niz nije neopadajuci.");

function neopadajuci(a) {
	var i = 1;

	while (i < a.length) {
		if (a[i - 1] > a[i]) {
			return false;
		}

		i++;
	}

	return true;
}

// 13. Napisati funkciju koja računa broj promena znaka u nizu.
// Primer: za zadati niz​[0,5,-1,15,60,-31,2]​ treba ispisati ​4​.
// Primer: za zadati niz​[780,52,1,95,62] ​treba ispisati​ 0​.

var niz = [0, 5, -1, 15, 60, -31, 2];

console.log(broj_promena(niz));

function broj_promena(a) {
	var brojac = 0;
	var i = 1;

	while (i < a.length) {
		if (a[i - 1] < 0 && a[i] > 0)
			brojac++;
		else if (a[i - 1] > 0 && a[i] < 0)
			brojac++;

		i++;
	}

	return brojac;
}

// 14. Napisati program ​​koji određuje najveći element u nizu i ispisuje njegovu vrednost.
// Primer: ako se zada niz​[23,51,-2,-13,8,7,-6]​ treba ispisati ​51.​

var niz = [23, 51, -2, -13, 88, 7, -6];

var maksimum = niz[0];
var i = 1;

while (i < niz.length) {
	if (niz[i] > maksimum) {
		maksimum = niz[i];
	}

	i++;
}

console.log(maksimum);

// 15. Napisati program koji za zadati ceo broj ispisuje broj pojavljivanja svake od cifara 
// u zapisu tog broja.
// Uputstvo:​ Za evidenciju broja pojavljivanja svake cifre pojedinačno, koristiti niz.
// Primer: za zadati broj ​2256926​ treba ispisati ​2:3 5:1 6:2 9:1​.
// Primer: za zadati broj ​-555555​ trebaispisati ​5:6​.

var broj = -2256926;
var cifre = ponavljanja_cifara(broj);
var i = 0;

while (i < cifre.length) {
	if (cifre[i] != 0)
		console.log(i + " : " + cifre[i]);

	i++;
}


function ponavljanja_cifara(x) {
	var ponavljanja = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	x = x < 0 ? -x : x;

	while (x != 0) {
		var cifra = x % 10;
		ponavljanja[cifra]++;
		x = Math.floor(x / 10);
	}

	return ponavljanja;
}