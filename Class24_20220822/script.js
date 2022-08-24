/*
Uzdevums (uz ~ 30 minūtēm):
pajautāt lietotājam (confirm()) - vai viņš grib pāriet uz kādu citu lapu.
ja jā - tad uz kādu (prompt())
un ja jā - tad kā pariet (prompt) - jaunais logs, jaunais tabs, ši taba satura nomaiņa
un tad ar setInterval() skaitīt sekundes līdz pārejai - 5 ... 4 ... 3 ... 2 ... 1... pārējax
*/

function myFunction() {
    let text = "Atvērsies jauns tabs, lūdzu to apstiprināt:";
    if (confirm(text) == true) {
      text = "Aiziet!";
      let prompt = window.open(
        "http://127.0.0.1:5500/Class14_20220704/index.html");
    } else {
      text = "Ir atcelts!";
    }
window.location.replace(('https://stackoverflow.com/questions/3846935/how-can-i-change-the-current-url'), 3000);

   document.getElementById("demo").innerHTML = text;  
  }

  /* Skaitīšana uz priekšu, ar globālā mainīgā palīdzību:
  counter = 1;
  var x = setInterval(my_function, 1000);
  
  document.getElementById("demo1").innerHTML = `Intervāla Id ${x}`;
  
  function my_function() {
  document.getElementById("demo2").innerHTML = counter;
  counter--;
  if (counter < 5){clearInterval(x);}
  }
  */