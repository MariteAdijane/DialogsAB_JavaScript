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


/*
Uzdevums 2
*/

function circle(radius)
{
    this.radius = 60;
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
var text = c.perimeter().toFixed(2);

var text = "Ja pieņem, ka zemes rādiuss ir " + document.getElementById(text);
var text = text +" km, tad ekvatora garums ir:" + " km";


console.log(text);

/*
uzdevums 3
*/