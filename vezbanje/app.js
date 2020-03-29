// 3.1 Zameniti vrednost prvom i poslednjem elementu niza.
var niz = [6, 3, 4, 1, 10, 5, 23];

let prvi = niz[0];
let poslednji = niz[niz.length - 1];

niz[0] = poslednji;
niz[niz.length - 1 ] = prvi;

console.log(niz);
