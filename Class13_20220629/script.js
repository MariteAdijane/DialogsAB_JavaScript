console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let text = "";

//for ( ; ; ){}
//for ( sākums: darbības ciklu uzsākot ; nosacījums: nosacījums/i cikla turpināšanai ; solis:"soļa/u" veikšana )
//sākuns--> nosacījums(tiek pārbaudīts vai nosacījums ir spēkā)--> {} --> soļa veikšana --> nosacījuma pārbaude -->{} vai izpildās ciklā --> un atkal uz nosacījumu ()   ;
// ja nosacījums nav spēkā --> pārejam pie nākamās darbības aiz cikla;

// Pāra skaitļiem 2 un 2, nepāra i mainam uz 1:

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text = text + i + " - pāra skaitlis<BR>";
  } else {
    text = text + i + " - nepāra skaitlis<BR>";
  }
}

document.getElementById("automatic_count").innerHTML = text;


/*Dalīt ar 2, 3, 5, 7:
2 - dalās ar 2
3 - dalās ar 3
4 - dalās ar 4
5 - dalās ar 5
6 - dalās ar 2 un 3
7 - dalās ar 7
8 - dalās ar 2
9 - ..
--.
15 - daļas ar 3 un 5
..
25 - dalās ar 5
*/
// 1.skaitīt no 1 līdz 25
// 2.pārbaudīt vai dalās ar 2 (3,5,7)
// 3.=> ņemt kārtējo skaitli cikla ietvaros un secīgi dalīt ar 2, 3, 5, 7

text = "";
var dalit = [2,3,4,6,7];

for (let dalam = 1; dalam < 25; dalam++) 
{
  let flag = 1;
  text = text + dalam;
  for (var k = 0; k < dalit.length; k++ ) {
    if (dalam % dalik[k] == 0) {
     if flag = 0){
    text = text + " pāra skaitlis "
  } else {
    test = text + " nepāra skaitlis "
  }

    text = text + "<BR>";
}
document.getElementById("count3").innerHTML = text;


/*
text += cars[0] + "<br>";
IT MEANS:
text = text + cars[0] + "<br>";
*/
