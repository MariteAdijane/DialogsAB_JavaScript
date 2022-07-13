// Objekta definēšana ar (rakstzīmju virknes) literāļa palīdzību

const car = {type:"Fiat", model:"500", color:"white"};
// literālis var būt arī pavisam tukšs un tad īpašīvas (un metodes) var pievienot pēc nepieciešamības
car.price = 15000.
document.getElementById("demo").innerHTML = "Mašīna: " + "<br>" + car.type ;

// Objekta definēšana ar atslēgas vārda new palīdzību:
 const airplane = new Object();
 // un tad īpašības (un metodes) var pievienot pēc nepieciešamības:
 airplane.price = 750000;

// Objekta īpašības (property) izgūšana:
console.log(car.type);
console.log(car["type"]);


// Objekts ar matodi:
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  document.getElementById("person").innerHTML = "Persona: "+ "<br>" + person.fullName() ;

  // + savs piemērs:
  function emp(id, name, costs){  
    this.id = id;  
    this.name = name;  
    this.costs = costs;  
    }  
    e = new emp(67,"Florbola pasākums",350);  
      
    
    document.getElementById("e.id").innerHTML = "Tēriņi: " + "<br>" + "Nr." + e.id + ". " + e.name + " " + e.costs + " EUR";

    // Māra piemērs, kkas ne visai strādā...:
   let prompt_value = prompt("Ievadiet valsts nosaukumu:");
   function EU_country_find (value, index, array){
    return value == this.prompt_value;}

    const EU = {
        countries: ['Latvija', 'Lietuva', 'Cehija'],
        
        EU_classification: function () {
        return this.countries.find(this.EU_country_find) == undefined ? "EU" : "Not EU"
        }
        };      

// šis neatspoguļojas, jo ir globālais objekts -->
// console.log(this.prompt_value);
// atspoguļojas ievadītā valsts
console.log(prompt_value); 
document.getElementById("countries").innerHTML = "Valsts: " + EU_country_find(prompt_value);
  

// person - definēšana
// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";