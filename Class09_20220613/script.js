var x = 60;
document.getElementById("dec").innerHTML = x;




/*
>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar (x>>?) & 1)
*/

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;

/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 110_0_ >> 0 -> 0011 1100
        1(dec) atbilst 0000 0001(bin)
            (x >> 0) & 1 -> 0011 1100
                            0000 0001
Loģiskais reiz.pa bitiem    0000 0000(bin) -> 0(dec)
*/
console.log("0.bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1" + zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0.bits:" + bit_sequence);

var zero_th_bit = (x >> 1) & 1;

/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 11_0_0 >> 1 -> 0001 1110
        1(dec) atbilst 0000 0001(bin)
            (x >> 0) & 1 -> 0001 1110
                            0000 0001
Loģiskais reiz.pa bitiem    0000 0000(bin) -> 0(dec)
*/
console.log("1.bita attēlošana (pēc nobīdes pa 1 bitiem pa labi un 'reizināšanas' ar 1" + zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1.bits:" + bit_sequence);

var zero_th_bit = (x >> 2) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

var zero_th_bit = (x >> 3) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

var zero_th_bit = (x >> 4) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

var zero_th_bit = (x >> 5) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

var zero_th_bit = (x >> 6) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

var zero_th_bit = (x >> 7) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);
document.getElementById("bin").innerHTML = bit_sequence;

/* Kapēc to nedarīt šādi? */
var cipars = 60;
var dec2bin = cipars.toString(2);
binarais = "00000000".substr(dec2bin.length) + dec2bin;
console.log(binarais);

/*
Uzdevums 2
*/

function circle(radiuss)
{
    this.radiuss = radiuss;
    this.apkartmers = (2*Math.PI*this.radiuss).toFixed(2);
}
var funkcija = new circle(30);

var text = "Ja pieņem, ka zemes rādiuss ir " + funkcija.radiuss + " km, tad ekvatora garums ir " + funkcija.apkartmers + " km.";
document.getElementById("radiusa-teikums").innerHTML = text;
console.log(text);

/*
Uzdevums 3
*/
var vards = "Pēteris";
var uzvards = "Biezais!";
var sakuma_summa_EUR = 30542.35
var uzruna = "Cien., " + vards + " " + uzvards;
var saturs = "Veicot ikgadējo bankas datu uzrauzību, esam konstatējuši, ka Jūsu bankas kontā atrodas" +
" " + sakuma_summa_EUR + " EUR uzkrājums." + " " +"Ņemot vērā šī brīža tirgus lielu noguldījuma procentu likmi, piedāvājam Jums sekojošu: ";

var procents_1_gada = sakuma_summa_EUR * 0.01 + sakuma_summa_EUR;
var procents_2_gada = sakuma_summa_EUR * 0.02 + sakuma_summa_EUR;
var procents_3_gada = sakuma_summa_EUR * 0.03 + sakuma_summa_EUR;
var procents_4_gada = sakuma_summa_EUR * 0.04 + sakuma_summa_EUR;
var procents_5_gada = sakuma_summa_EUR * 0.05 + sakuma_summa_EUR;


document.getElementById("gada_procentu_likme").innerHTML = (uzruna + " " + saturs);

console.log(uzruna + " " + saturs);