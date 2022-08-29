// https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
const p = document.getElementById('demo1');
console.log(p);
console.log("p.innerHTML: "+p.innerHTML);
p.innerHTML = "1. Paragrāfa teksts (mainīts 1. reizi.)";
console.log("p.innerText: "+p.innerText);
p.innerText = "1. Paragrāfa teksts (mainīts 2. reizi.)";
console.log("p.firstChild.nodeType: "+p.firstChild.nodeType);
console.log("p.firstChild.textContent: "+p.firstChild.textContent);
p.firstChild.textContent = "1. Paragrāfa teksts (mainīts 3. reizi.)";

console.log(document.querySelectorAll('*[id]'));

// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/

let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

let radio_btns = document.getElementById('btn-group');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        //console.log(rate);
        console.log(rate.value + ' ' + rate.checked);
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    alert("Continue!");
    });
});

radio_btns.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        //console.log(rate);
        console.log(rate.value + ' ' + rate.checked);
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    alert("Continue!");
    });
});