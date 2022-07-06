/*
  function summator(a, b) {
    c = a + b;
    return c;
  }
  
  function dialogs() {
    var a = Number(prompt("Ievadiet a vērtību:")),
      b = Number(prompt("Ievadiet b vērtību:"));
    document.getElementById("summator_1").innerHTML =
      a + " un " + b + " = <br>" + " summa ir " + summator(a, b);
  }
  
  dialogs();
  
function summator (a, b){
    c = a + b;
    return c;
}
*/


/*
Otrais uzdevums - pirmais variants
*/

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}
document.getElementById("demo_old").innerHTML = text;

/*
Otrais uzdevums - otrais variants
*/
text = "";
for (i = 0; i < cars.length; i++) {
text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
/*
Trešais uzdevums
*/
text = "";
let language = "Javascript"
for (let x of language) {
    text += x + "<br>";
}

document.getElementById("demo_3").innerHTML = text;

/*
Ceturtais uzdevums: Patstāvīgi:
palūgt liteotājam ierakstīt kādu tekstu (ar prompt) un saskaitīt cik tājā tekstā ir vārdi, kuru garums > 5.
*/

/*
1. Teksta rindas iegūšana
2. Skaitīt burtus vārdā, katra atsevišķo vārdu sākot no 1.
*/


text = prompt("Ievadiet kādu teikumu:");
//text = text + " ";

var burtu_skaititajs_vaardaa = 0;
var simbolu_skaititajs_teikuma = 0;
var derigu_vardu_skaits = 0;
N = 5;
for (let x of text) {
    simbolu_skaititajs_teikuma++;
    if(x == " ") {
   // console.log(x + " tā ir atstarpe");
   // console.log("Iepriekšējā vārdā bija " + burtu_skaititajs_vaardaa + " burti");
    if (burtu_skaititajs_vaardaa >= N){
    //    console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
derigu_vardu_skaits++;   
}
    burtu_skaititajs_vaardaa = 0;
}
    else {
        burtu_skaititajs_vaardaa++;
     //   console.log(x + " tas ir " + burtu_skaititajs_vaardaa + ". simbols vārdā");
        
        if (simbolu_skaititajs_teikuma == text.length) {
    //        console.log("Iepriekšējā vārdā bija " + burtu_skaititajs_vaardaa + " burti");
            if (burtu_skaititajs_vaardaa >= N) {
    //          console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
              derigu_vardu_skaits++;
            }
            burtu_skaititajs_vaardaa = 0;
    //        console.log("Un vēl vairāk šis bija pēdējais vārds teikumā");
    }
  }
}


document.getElementById("text_analysis").innerHTML = "Šajā teikumā:<br><b>" + text + "</b><br> ir " + derigu_vardu_skaits +
" vārdi, kuru" + " garums ir >=" + N;


/* Mājasdarbs:
1. Ievietot šodienas algoritnu funkcijas konstrukcijā
2. Uztaisīt sekojošā teksta analīzi - a(5), b(7), c(3),.. (switch un skaitītāju masīvi)
*/