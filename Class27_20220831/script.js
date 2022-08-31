/*garais pieraksts - der visām pogām:*/
let btn = document.querySelector('#btn');

/*function display(event) {
    alert('It was clicked!');
    console.log(event.type);   
    console.log(event.bubbles);    
    console.log(event.cancelable); //noklusēto rīcību var atcelt, statuss true - ir iespējams
    console.log(event.currentTarget);
    event.currentTarget.innerText = 'Ouch'
}
*/

//btn.addEventListener('click',display);

/* SHORT STORY - attiecās uz konkrētu pogu un nevar izsaukt display() uz visu:
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type);
});

p/s OUTPUT: 'click'
*/

//Anonīma funkcija, īsākā versija
btn.addEventListener('click',(event) => {
    // alert('It was clicked!');
    console.log(event.type);  
    console.log(event.cancelable); 
    console.log(event.currentTarget);  
    console.log(event.defaultPrevented);
    console.log(event.detail);
});

//Anonīma funkcija, īsākā versija
btn.addEventListener('mouseup',(event) => {
    // Uzbraucot ar peli reakcijas, diezgan bezjēdzīga, ja vien redzēt, kad klients domā - klikšķināt vai nē..
});