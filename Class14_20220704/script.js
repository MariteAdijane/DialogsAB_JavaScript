/*

var i = 5;
for (var i = 0; i < 10; i++) {
}
*/

console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";


text = "";
for (let i = 1; i < 5; i++) 
    text = text + i + "<br>";
document.getElementById("for_automatic_count_classic").innerHTML = text;

text = "";
var i = 1;
for (; i < 5; ) {
    text = text + i + "<br>";
    i++;
}
document.getElementById("for_automatic_count_nonclassic").innerHTML = text;


text = "";
var i = 1;
while (i < 5) {
    text = text + i + "<br>";
    i++;
}
document.getElementById("while_automatic_count").innerHTML = text;