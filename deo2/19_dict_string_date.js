info = {
  "Stefan": 4.56,
  "Milica": 4.44,
  "Nikola": 3.21,
  "Natasa": 4.2,
  "Nemanja": 4.5,
  "Olivera": 5.0,
};

// Provera da li postoji kljuc "Olivera"?
if ("Olivera" in info) {
  console.log("Informacije o Oliveri postoje i prosek je: " + info["Olivera"]);
} else {
  console.log("Ne postoji informacije o Oliveri.");
}

if ("Milan" in info) {
  console.log("Informacije o Milanu postoje i prosek je: " + info["Milan"]);
} else {
  console.log("Ne postoji informacije o Milanu.");
}


// String je primitivni tip koji predstavlja tekst.
var x = "Danas je divan dan!";
var y = "español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית";

console.log(x);
console.log(y);

// String u vise linija
var longStr = "Lorem ipsum dolor sit amet, pri iriure " +
    "eripuit lucilius ut, saepe accusam hendrerit an eam. " +
    "Vidit errem sententiae nam ea, has ut nibh dissentiunt, " +
    "congue verear sea ea. Ei usu soleat delenit, pri primis " +
    "similique contentiones in. Id mel ullum noster, id vim cibo " +
    "legere elaboraret, tota autem prompta et nam. Vim quot nullam in, " +
    "his cu dicam meliore, habeo commodo lucilius mea ne."

// Ili bolje (backslash na kraj):
var longStr = "Lorem ipsum dolor sit amet, pri iriure\
    eripuit lucilius ut, saepe accusam hendrerit an eam.\
    Vidit errem sententiae nam ea, has ut nibh dissentiunt,\
    congue verear sea ea. Ei usu soleat delenit, pri primis\
    similique contentiones in. Id mel ullum noster, id vim cibo\
    legere elaboraret, tota autem prompta et nam. Vim quot nullam in,\
    his cu dicam meliore, habeo commodo lucilius mea ne."

// Citanje karaktear
console.log(x[0]);
console.log(x.charAt(0));


// Rad sa datumima je podrzan od strane klase Date u okviru JS jezika.

var date1 = new Date('December 17, 1995 03:24:00');
var date2 = new Date('1995-12-17T03:24:00');
var date3 = new Date(2002, 5, 24, 18, 30);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date1 === date2);
console.log(date1 - date2);
