// JavaScript parentNode
let note = document.querySelector('.note');
console.log("...parentNode",note.parentNode);

// JS Get Child Elements
let content = document.getElementById('menu');
let firstChild = content.firstChild;
console.log("...firstChild",firstChild);
console.log("...firstChild",firstChild.nodeType);
console.log("...firstChild",firstChild.nodeName);

// https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);
console.log("siblings: ",siblings);
console.log("children of parent: ",document.querySelector('.current').parentElement.children);
console.log("siblings texts: ",siblingText);