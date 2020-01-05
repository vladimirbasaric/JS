/* SADRZAJ:
    ARITMETICKI OPERATORI - 12
    KONVERZIJE            - 32
    PROMENJIVE            - 56
    TIPOVI                - 71
    IF NAREDBA            - 143
    NIZOVI                - 171
    STRINGOVI             - 220
*/


/* ARITMETICKI OPERATORI

Operator radi operaciju nad jednim ili vise podataka koje zovemo argumentima operatora.
Arnost operatora predstavlja broj argumenata na koji se taj operator primenjuje.
    unarni - operator sa jednim argumentom
    binarni - operator sa dva argumenta ...

Aritmeticki operatori: +, -, *, /, %, ++, --

% - ostatak pri celobrojnom deljenju
++ - operator inkrementacije (uvecanje za 1)
-- - operator dekrementacije (umanjenje za 1)

Prioritet:  *, /  imaju medjusobno isti prioritet, a visi prioritet u odnosu na +, -
Asocijativnost: leva (redosled primene medju operatorima istog prioriteta)
*/
var izraz = (5 + 2) * 10 % 2
console.log(izraz)
// -> 0

/* KONVERZIJE

 JavaScript je programski jezik koji može da "proguta" razne programske izraze 
 koji uključuju osnovne tipove i da izračuna od njih nekakve vrednosti, 
 koje možda ne bismo očekivali, kao na primer:

 Vrednost izraza "5" − 1 je 4 . 
 Vrednost izraza "5" + 1 je "51" . 
 Vrednost izraza "pet" * 2 je NaN . 
 Vrednost izraza !"" je true . 

 Objašnjenje za ovakvo ponašanje leži u implicitnoj konverziji. 
 Naime, kada se nekom operatoru proslede tipovi koji su različiti ili tip koji on ne očekuje, 
 JavaScript će pokušati da, nekim komplikovanim mehanizmom, konvertuje tipove tako da može da 
 primeni operator na njih. 

 Testirati u konzoli prethodno navedene primere.
 
*/

console.log("2" + 1);
//-> 21

/* PROMENJIVE

 Uvodjenje promenljivih:
 ime mora da pocinje slovom ili _ 
 ne smeju se koristi kljucne reci JS jezika

 domet: globalno (izvan funkcije u skriptu) / lokalno (u okviru funkcije)

 */
var ime; // deklaracija bez inicijalizacije
var broj = 5; // deklaracija sa inicijalizacijom
var niska;
niska = "Dobar dan";
var br1, br2;

/* TIPOVI

Brojevi - numerički tip (engl. number). Svi numerički tipovi su zapisani u 64 bita. 
Nad numeričkim tipovima su defnisani standardni binarni operatori
 + , −, * , / , % , < , <= , > , >= i unarni operator −.

JavaScript podržava: 
    • celobrojne vrednosti — 0 , 7 , −42 , ... 
    • razlomljene vrednosti — 9.81 , 2.998e8 (= 2.998·108), ...
    • "beskonačnosti" — Infinity , −Infinity 
    • NaN — označava da "nije broj" (skr. Not a Number), iako je njegov tip numerički. 
    Ovaj rezultat možemo dobiti ako, na primer, pokušamo da izračunamo 0 / 0 ili Infinity − Infinity,
    ili bilo koju drugu nedenisanu operaciju. 
*/

var broj = 10;
console.log(broj); // metod za prikaz zadatog izraza na tekstualni izlaz, u nasem slucaju konzolu/terminal

/*
Niske (engl. string). Niske se koriste za reprezentaciju teksta. Kodna shema koja se koristi je Unicode. 
Možemo konstruisati literal ovog tipa pomoću jednostrukih ili dvostrukih navodnika, kao i "nakošenih" navodnika 
(tzv. šablon-literali (engl. template literals)). 
Na primer: 
    • 'Programiranje u JavaScript−u!' 
    • "Srecno na obuci!" 
    • `A tek da vidis nastavak kursa!` 
    
Treba voditi računa o tome da kad započnemo literal niske jednim od ova tri karaktera navodnika, prvi sledeći put kada
se naiđe na taj karakter, to će se smatrati krajem niske. Zato ne možemo direktno ugnežđavati, na primer, dvostruke 
navodnike, već ih moramo označiti (engl. escape). Označavanje se vrši stavljanjem karaktera \ ispred karaktera koji 
želimo da označimo. Primer, prva linija predstavlja neispravno, a druga linija ispravno ugnežđavanje navodnika: 

 "A onda je rekao: "Uradicu to!"" 
 
 "A onda je rekao: \"Uradicu to!\"" 

Viselinijske niske: upotreba \n ili sablon-literala
    "Ovo je sve prva linija\nA odavde krece druga linija"

    `Ovo je sve prva linija 
    A odavde krece druga linija`
*/

var niska1 = "dobro ";
var niska2 = "jutro";

var niska3 = niska1 + niska2; // niske se mogu nadovezivati operatorom +

/*
Bulove vrednosti JS podržava izračunavanja koja proizvode Bulove vrednosti — true (tačno) i false (netačno). 
Binarni operatori poređenja regularno proizvode Bulove vrednosti nakon izračunavanja. 
Kao i u drugim programskom jezicima, Bulove vrednosti se najčešće koriste kao uslovi u naredbama grananja, petlji, i dr. 
Baratanje Bulovim vrednostima se može jednostavno obaviti korišćenjem standardnih binarnih operatora:
    && (konjukcije)
    || (disjunkcije)
    unarnog operatora ! (negacije)
    ternarnog operatora ?: (uslovni operator)

Prazne vrednosti - postoje dve specijalne vrednosti, null i undefined, koje se koriste da označe odsustvo 
"vrednosti koje ima značenje". One same predstavljaju vrednosti, ali ne nose nikakvu informaciju. 

Primer: promenljiva bez inicijalizacije ima vrednost undefined.
        promenljivoj se moze dodeliti objekat null, ali onda ona ne nosi nikakvu informaciju.
*/

// typeof operator sluzi za dobijanje tipa 
typeof (2);
var ime = "Stefan";
typeof (ime);
var prezime;
typeof (prezime);

// IF NAREDBA
/* 
sintaksa za if:
if (uslov) {
    // neke naredbe
}

sintaksa za if-else:
if (uslov) {
    // neke naredbe
} else {
    // neke naredbe
}

mozemo imati vise uslova u sklopu ifa:
if (uslov1) {
    // neke naredbe
} else if (uslov2) {
    // neke naredbe
}
} else if (uslov3) {
    // neke naredbe
// poslednji else moze i sa if ako ima uslov, a moze i bez
} else {
    // neke naredbe
}
*/

// NIZOVI
// nizovi kompaktnije zapisuju navodjenje vise promenljivih
var vocka1 = "jabuka";
var vocka2 = "kruska";
var vocka3 = "sljiva";
// ovako izgleda zapis nekog niza (moze biti proizvoljne duzine)
// ovde su u nizu stringovi, a moze biti bilo sta
var voce = ["jabuka", "kruska", "sljiva"];

// elementima niza se pristupa preko niz[0], niz[1], ...
console.log(voce[0] + " " + voce[2]);

// elementi mogu imati indekse od 0 do broj elemenata-1
// ovo ce ispisati undefined:
console.log(voce[3]);

// duzina niza
duzina = voce.length;

// poslednjem elementu se moze pristupiti sa indeksom duzina-1
poslednjiElement = voce[duzina - 1];
console.log(poslednjiElement);

// push metod dodaje element na kraj niza
voce.push("dunja");
console.log(voce);


// pop metod brise element sa kraja niza
voce.pop();
console.log(voce);


// vrednosti elemenata niza se jednostavno mogu promeniti
// potrebno je samo preko indeksa pristupiti clanu niza
voce[0] = "grozdje";
voce[2] = "dinja";
console.log(voce);

// dvostruki niz je zapravo niz u nizu
// primetimo da elementi i jednosturkog i dvostrukog niza mogu biti bilo sta
// gotovo sve sto se radi s jednostrukim moze i sa dvostrukim nizom
var godine = [
    ["Ana", 35],
    ["Mirko", 29],
    ["Jovana", 43]
];
console.log(godine);

// STRINGOVI

// stringovi mogu biti zapisani preko jednostrukih ili dvostrukih navodnika
var str1 = "Ovo je prvi string";
var str2 = 'Ovo je drugi string';
// moze jednostruki biti ubacen u dvostruki i obrnuto
var str3 = "Ovo je prvi 'izmenjeni' string";
var str4 = 'Ovo je prvi "izmenjeni" string';

console.log(str1 + "\n" + str2 + "\n" + str3 + "\n" + str4);

// karakteri ", ' i \ mogu biti zapisani u stringu pomocu prethodnog znaka \
var str5 = "Znak \\ je backslash";
var str6 = 'Znak \' je jednostruki navodnik';
var str7 = "Znak \" je dvostruki navodnik";
console.log(str5 + "\n" + str6 + "\n" + str7);

var str8 = "abcdefghijklmnopqrstuvwxyz";

// pristup nekom elementu stringa, indeksiranje krece od nule
// promeniti 0 u neki veci broj
var c1 = str8.charAt(0);
console.log(c1);

// duzina stringa
var duzina = str8.length;
console.log(duzina);

// nadovezivanje (konkatenacija) stringova
var str9 = 'Zdravo';
var str10 = "svima!"
var str11 = str9 + " " + str10;
console.log(str11);

var str12 = "jabuka, kruska, sljiva";

// funkcijom substr se izdvaja podstring stringa
// prvi argument je indeks podstringa, a drugi njegova duzina
var str13 = str12.substr(8, 6);
console.log(str13);

// funkcijom replace se menja deo stringa nekim drugim sadrzajem
var str14 = str12.replace("kruska", "grozdje");
console.log(str14);