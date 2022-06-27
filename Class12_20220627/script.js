const datums = new Date();

console.log("Datums un laiks: " + datums);

const datuma_teksts = datums.toLocaleString('lv-LV', { timeZone: 'UTC'})
console.log("Datuma teksts (ar lv-LV formātu): " + datuma_teksts);

const datuma_teksta_garums = datuma_teksts.length;
console.log("Datuma teksta garums: " + datuma_teksts);


var day = datums.getDay();
var daylist = ["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena ","Piektdiena","Sestdiena"];
console.log("Šodien ir kura diena? " + daylist[day] + ".");

document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML 
            + " " +daylist[day] + ".";

document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML 
            + datuma_teksts.slice(11,datuma_teksta_garums);



/*var x = prompt("Cien. Lietotāj, lūdzu, ievadi tekstu: ");

let arg = prompt("Enter a value?"); /*= piešķiršana. Atbilstoši frāzei būs rezultāts.*/
/*console.log(arg);*/

/* STRĀDĀ:
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3: ///tas ir strings (simbolu rinda) nevis cipars///
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
*/

/* NEKAS NESANĀK
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }
*/

