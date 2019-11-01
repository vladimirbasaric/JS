// NAREDBE GRANANJA
// PETLJE

// 1. Napisati program koji za zadati broj poena ispisuje ocenu​.
//Primer: ako se zada​ 78​ treba ispisati​ 8​.

var ocena = 64;

if (ocena < 51) {
  console.log(5);
} else if (ocena >= 51 && ocena < 61) {
  console.log(6);
} else if (ocena >= 61 && ocena < 71) {
  console.log(7);
} else if (ocena >= 71 && ocena < 81) {
  console.log(8);
} else if (ocena >= 81 && ocena < 91) {
  console.log(9);
} else {
  console.log(10);
}

// 2. Za zadati broj ispisati odgovarajući dan u nedelji. 
//Primer: ako se zada broj​ 5​ treba ispisati ‚‚​petak​’’​.
var dan = 3;

/*
Switch je jos jedna naredba grananja. Sluzi iskljucivo za poredjenje vrednosti neke promenljive po jednakosti.
Sintaksa je sledeca. Nakon kljucne reci switch u zagradama navodimo promenljivu ciju vrednost proveravamo. 
Unutar viticastih zagrada navodimo tzv. slucajeve pomocu kljucne reci case i vrednosti pored. 
Zatim se navodi znak : i slede naredbe koje ce biti izvrsene u slucaju da promenljiva ima navedenu vrednost.
Jednom kada se pronadje poklapanje i udje se u neki od slucajeva (case-ova), izvrsavace se sve naredbe ispod dok 
se ne naidje na kraj switch-a ili do naredbe za prekid (break).
Na kraju switch-a obicno se navodi i default. To je slucaj koji obuhvata sve vrednosti koje nisu obradjene u 
nekom od prethodnih slucajeva. Takodje, jednom kada se pronadje poklapanje, bilo sa nekim od case-ova ili sa default, 
ostale slucajevi ispod se ne proveravaju. Zbog toga je bitno da se default nadje na samom kraju i da za sve 
vrednosti koje proveravamo bude jedan case.
*/
switch (dan) {
  /* 
    Vrednost promenljive dan poredi se sa 1. Ukoliko vazi jednakost, ulazi se u taj slucaj i izvrsavaju naredbe 
    do nailaska na prekid ili kraj switch-a. Ukoliko ne bismo naveli break na kraju case-a, izvrsila bi se prva sledeca 
    instrukcija u narednom case-u sve dok se ne dodje do prekida ili kraja switch-a.
  */
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Greska!");
    break;
}

// 3. Odrediti da li je zadato malo slovo suglasnik ili samoglasnik. 
// Primer: ako sezada slovo​ e​​ treba ispisati ‚‚​Samoglasnik​’’​.
// Primer: ako se zada slovo​ p​​ treba ispisati ‚‚​Suglasnik​’’​.
var x = 'a';

/*
  Propadanje kroz ostale slucajeve moze biti korisno ukoliko za vise razlicitih vrednosti zelimo da se izvrse
  iste instrukcije. Na primer, za sve samoglasnike ispisujemo istu poruku, pa cemo dozvoliti da se udje u slucaj i 
  propada do poslednjeg gde se ispisuje poruka jednom, a zatim izlazi iz switch-a zbog naredbe break.
*/
switch (x) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("Samoglasnik");
    break;
  default:
    console.log("Suglasnik");
}

// 4. Napisati program koji za zadati mesec i godinu ispisuje broj dana u mesecu.
// Primer: ako se zada ​jul 2018​ treba ispisati​ 31​.Primer: ako se zada ​februar 2016 ​treba ispisati ​29​

var mesec = "februar";
var godina = 2000;

switch (mesec) {

  //Grupisemo mesece sa 30 dana.
  case "april":
  case "jun":
  case "septembar":
  case "novembar":
    console.log("30");
    break;

  case "februar":
    // Unutar nekog case-a mozemo imati dodatna grananja ako je potrebno.
    // Na primer, februar ima razlicit broj dana u zavisnosti od toga da li godina prestupna ili ne.

    if (godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0) {
      console.log("29");
    } else {
      console.log("28");
    }

    break;
    // Na kraju, ako mesec nije nijedan od navedenih, znaci da ima 31 dan.

  default:
    console.log("31");
    break;
}

// PETLJE

// 5. Napisati program koji 5 puta ispisuje ‚‚​Zdravosvima!​’’​

var i;

/*
  Petlje nam sluze za ponavljanje istih instrukcija odredjen broj puta. Ponavljaju se instrukcije zadate unutar 
  bloka petlje (unutar viticastih zagrada). Jedno izvrsavanje bloka nazivamo iteracija petlje, a broj iteracija 
  odredjen je uslovima koje postavimo u petlji.
  Naredba for je jedna od petlji. Njena sintaksa je sledeca:
  for(naredba1; naredba2; naredba3) {
    ... instrukcije...
  }

  Svaka od tri naredbe unutar zagrada ima svoju ulogu i vreme kada ce biti izvrsena. Prva naredba odnosi se na 
  inicijalizaciju promenljivih koje koristimo za kontrolu izvrsavanja petlje - tzv. brojaci petlje. 
  Ova naredba se izvrsava tacno jednom na samom pocetku petlje tj. pre prve iteracije. 

  Druga naredba predstavlja uslov petlje. Uslov koji postavimo odredjuje koliko ce iteracija biti izvrseno. 
  Provera uslova vrsi se pre pocetka svake iteracije. Ako je uslov ispunjen instrukcije se izvrsavaju, u suprotom se 
  prekida petlja, a izvrsavanje programa nastavlja ispod petlje.

  Treca naredba sluzi za promenu vrednosti brojaca petlje. Obicno je to neka inkrementacija ili dekrementacija, 
  a mogu biti i drugacije izmene vrednosti. Ova naredba izvrsava se na kraju svake iteracije.
*/
for (i = 1; i <= 5; i++)
  console.log("Zdravo svima!");

// 6. Napisati program koji ispisuje brojeve u rasponu od 1 do zadatog broja​ x​.
// Primer: ako se zada broj​ 5 ​treba ispisati ​12345​. 
// Primer: ako se zada broj​ 17 ​treba ispisati ​1234567891011121314151617​.
var x = 5;

// Brojaci mogu biti i deklarisani i inicijalizovani unutar petlje. Vrednost brojaca i sadrzi vrednosti 
// od 1 do x i mozemo je koristiti i za ispis tih brojeva.

for (var i = 1; i <= x; i++)
  console.log(i);

// 7. Napisati program koji ispisuje zbir neparnih brojeva u rasponu od 1 do zadatog broja ​x​.
// Primer: ako se zada broj​ 9 ​treba ispisati​ 25​. 
// Primer: ako se zada broj​ 16​ treba ispisati ​64​.

var x = 17;
/*
  Da bismo racunali zbir koristimo promenljivu u kojoj pamtimo trenutni zbir dok ne pronadjemo 
  sve brojeve ciji zbir racunamo. Bitno je da promenljiva bude inicijalizovana pre koriscenja, 
  inace ce imati vrednost undefined i necemo moci da je koristimo za sabiranje.
*/
var zbir = 0;

for (var i = 1; i <= x; i++) {

  // Broj je neparan ako pri deljenju sa 2 daje ostatak 1.
  if (i % 2 == 1) {
    // Na trenutni zbir dodajemo vrednost broja koji smo pronasli u ovoj iteraciji.
    zbir += i;
  }
}

console.log("Zbir brojeva od 1 do " + x + " je: " + zbir);

// 8. Napisati program koji ispisuje redom sve elemente zadatog niza.
// Primer, za niz​[3,6,88,2,11,9]​ treba ispisati​ 368822119​

var a = [3, 6, 88, 2, 11, 9];
// Ukoliko brojac i krene od 0 i dozvolimo da se vrednost uvecava do duzine nize, mozemo ga 
// koristiti kao indeks niza i na taj nacin pristupati pojedinacnim elementima niza.

for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// 9. Napisati program koji ispisuje broj elemenata zadatog niza koji su parni.
// Primer, za niz​[3,6,88,2,11,92,81] ​treba ispisati ​4​.

var a = [3, 6, 88, 2, 11, 92, 81];
// Slicno kao kod zbira, mozemo koristiti posebnu promenljivu da pamtimo koliko smo pronasli 
// elemenata koji zadovoljavaju neki uslov.

var broj_parnih = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {

    // Svaki put kada pronadjemo element cija je vrednost paran broj uvecavamo brojac za jedan.
    broj_parnih++;
  }
}

console.log(broj_parnih);

// 10. Napisati program koji ispisuje da li niska sadrži karakter​ a​.
// Primer, za nisku ​informatika ​treba ispisati ‚‚​Da​‘’.
// Primer, za nisku ​predmet​ treba ispisati ‚‚​Ne​‘’.

var niska = "informatika";

// Promenljivu sadrzi koristicemo kao indikator da li je pronadjeno slovo 'a' u niski.
// Na pocetku je postavljamo na false, a onda u petlji proveravamo za svaki karakter da li je jednak karakteru 'a'.
// Ako ga pronadjemo menjamo vrednost promenljive sadrzi na true i kasnije na osnovu te vrednosti ispisujemo 
// odgovarajucu poruku. 

var sadrzi = false;

for (var i = 0; i < niska.length; i++) {
  if (niska.charAt(i) == 'a') {
    sadrzi = true;
  }
}

// Posto if zahteva da vrednost izraza koji koristimo kao uslov bude true ili false, mozemo iskoristiti bas 
// promenljivu sadrzi kao uslov obzirom da je njena vrednost boolean tipa.

if (sadrzi) {
  console.log("Da.");
} else {
  console.log("Ne.");
}