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
