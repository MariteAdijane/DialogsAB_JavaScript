
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
for (i=0; i<cars.lenhth; i++) {
text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;