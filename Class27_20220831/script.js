/*garais pieraksts - der visām pogām:*/
let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);


/* SHORT STORY - attiecās uz konkrētu pogu un nevar izsaukt display() uz visu:
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type);
});

p/s OUTPUT: 'click'
*/

/*Anonīma funkcija, īsākā versija
btn.addEventListener('click',() => {
    alert('It was clicked!');
});
*/