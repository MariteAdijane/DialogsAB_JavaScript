let grades = [91, 66, 77, 84, 66];
let search = 77;

function searchGrade(grades,search){
    for (var i=0; i < grades.length; i++){
    if (grades[i] == search){
        console.log(`The grade ${search} exists!`);
        break;
     }
    }
}

/* Otrais variants
function searchGrade(grades,search){
    for (currentGrade of grades){
    if (currentGrade == search) ? {
        console.log(`The grade ${search} exists!`);
        break;
    }
    }
}
*/

// searchGrade(grades, search);

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  console.log (person1.fullName.call(person2));

  

  // Piemērs no google-mātes:
  /**call() gets invoked immediately whereas bind() returns a function that we can invoke later.
    *call() takes additional arguments but bind() does not.
    *call() doesn't make a copy of the function unlike bind().*/

    var obj = { num: 2 };

    function add(a, b){
      return this.num + a + b;
    }
    
    const resultCall  = add.call(obj, 3, 5);
    const resultApply = add.apply(obj, [3, 5]);
    const funcBind    = add.bind(obj, 3, 5)
    const resultBind  = funcBind();
    
    console.log(resultCall, resultApply, resultBind);

    console.log(add.call(obj, 3, 5));