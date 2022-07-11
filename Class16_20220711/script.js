// Funkcijas definēšana ar apgalvojuma palīdzību:
function square_statement(number){
    return number * number;
}
const x = square_statement(8);
console.log(x);


// Funkcijas definēšana ar izteiksmes palīdzību:
// "anonīmas" funkcijas piemērs
const square_expression = function (number) {
    return number * number;
  }
  const y = square_expression(4); // x gets the value 16

  console.log(y);


// Rekursīvā funkcija:
  const factorial = function fact(n) {
    return n < 2 ? 1 : n * fact(n - 1);
    /* i f daram - ? 1 = true gadījums
    else - daram visu aiz kola = false gadījums
    */
  }
  
  // console.log(fact(4)); būs kļūda //
  console.log(factorial(3))
  /*piemērs:
  n = 5;
  n > 7 ? "lielāks par 7" : (n > 6 ? "arī lielāks par 6": "mazāks par 6");
  atbilde: 'mazāks par 6'
  */


  // Piemērs ar funkciju, kuras arguments (viens no) arī ir funkcija:
  function map(f, a) {
    const result = [];
    // i = 0;
    for (const v of a) {
     //  result[i] = f(v);
     // i++;
     result.push (f(v));
     // rezultāts tiks pušots masīvā result!
    }
    return result;
  }
  
  const square_for_array_each_element = function (x) {
    return x * x;
  }
  const cube_for_array_each_element = function (x) {
    return x * x * x;
  }

  const numbers = [0, 1, 2, 5, 10];

  const squares = map(square_for_array_each_element, numbers);
  console.log(squares);
  const cubes = map(cube_for_array_each_element, numbers);
  console.log(cubes);

  document.getElementById("demo").innerHTML = " bla bla " + x + " " + y + "<br>" + squares + "<br>" + cubes;

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
   document.getElementById("demo3").innerHTML = "The temperature is " + toCelsius(77) + " Celsius";

   // Mājasdarbs:
   // 1. Sarežģīts funkcijas kods, ne pārāk sarežgīts. Mācēt paskaidrot kodu.