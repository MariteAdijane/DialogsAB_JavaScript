// UDZEVUMS
// Uzrakstīt kodu ar visiem (trim) mainīgajiem - decimāla skaitļa pārveidošana par bināro secību
var x = 45;
document.getElementById("dec").innerHTML = x;


// Mana ņemšanās: string to binary
var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);

// Atbilde būs:
// y = '0b00101101'
document.getElementById("bin").innerHTML = z;




// Mainīgo treniņš konsolē:
a = 45;
b = 5;
d = 5;
f = a-b;
e = f + a;
console.log(e);
console.log(f);
console.log(a+b+e**d);

let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

// 'scope' - skripta bloks, nodalāms ar šādām iekavā - {}

// var atslēgas vārds ļauj nodefinēt globālo mainīgo - pieejams visā koda garumā
var k = 50;
console.log("k vērtība (no 'galvenā zara'pirms scope): "+k);
{
    console.log("k vērtība (no 'scope'): "+k)
    var k = 46;
    console.log("k vērtība pēc pārdefinēšanas (no 'scope'): "+k);
}
console.log("k vērtība (no 'galvenā zara' pēc scope): "+k);

// let atslēgas vārds ļauj nodefinēt lokālo mainīgo - pieejams koda blokā norobežotā ar {} - scope vērtība nevar tikti mainīta
let j = 50;
console.log("j vērtība (no 'galvenā zara'pirms scope): "+j);
{
    // console.log("j vērtība (no 'scope'): "+j)
    let j = 46;
    console.log("j vērtība pēc pārdefinēšanas (no 'scope'): "+j);
}
console.log("j vērtība (no 'galvenā zara' pēc scope): "+j);

// const atslēgas vārds ļauj nodefinēt lokālo konstan - pieejams koda blokā norobežotā ar {} - scope vērtība nevar tikti mainīta
const m = 50;
console.log("m vērtība (no 'galvenā zara'pirms scope): "+m);
{
    // console.log("m vērtība (no 'scope'): "+m)
    const m = 46;
    console.log("m vērtība pēc pārdefinēšanas (no 'scope'): "+m);
}
console.log("m vērtība (no 'galvenā zara' pēc scope): "+m);