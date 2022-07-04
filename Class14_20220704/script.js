/*

var i = 5;
for (var i = 0; i < 10; i++) {
}
*/

/*console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "manual count:<br> 1<br>2<br>3<br>4<br>";


text = "for classic: <br>";
for (let i = 1; i < 5; i++) {
    text = text + i + "<br>";
    if (i == 3) {
     break; 
    }
  }
document.getElementById("for_automatic_count_classic").innerHTML = text;

text = "for nonclassic: <br>";
var i = 1;
for (; i < 5; ) {
    text = text + i + "<br>";
    i++;
}
document.getElementById("for_automatic_count_nonclassic").innerHTML = text;


text = "while: <br>";
var i = 1;
while (i < 5) {
    text = text + i + "<br>";
    i++;
}
document.getElementById("while_automatic_count").innerHTML = text;

text = "do while: <br>";
var i = 1;
do {
    text = text + i + "<br>";
    i++;
} while (i <5 && i ==2);
document.getElementById("do_while_automatic_count").innerHTML = text;
*/

/// augošās secības uzskaite:

text = "for count until " + 5 + ":<br>";
for (let i = 1; i < 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_1").innerHTML = text;

text = "for count until " + 10 + ":<br>";
for (let i = 1; i <= 10; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_2").innerHTML = text;

text = "for count until " + 15 + ":<br>";
for (let i = 1; i <= 15; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_3").innerHTML = text;

/**
 * @name counter
 * @description Counting from 1 to N.
 * @param {*} N 
 * @param {*} html_el_id_nr 
 * 
 * @retuns {void} counter
 */

// alternatīvais risinājums:
function counter (N,html_el_id_nr){
  text = "for count until " + N + ":<br>";
  for (let i = 1; i <=N; i++){
    text = text + i + "<br>";
  }
  document.getElementById("count_"+html_el_id_nr).innerHTML = text;
}

counter(20,4);

/* koda fragments */

counter(25,5);

/*
for ( var x in windos) {
  if (window[x] instanceof Function) consile.log[x];
}
*/
