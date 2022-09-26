let currentTime = new Date();
let year = currentTime.getFullYear();

function updateYear(year){
    document.getElementById("yearPlaceholder").innerHTML = year;
}
updateYear(year + '.gada');
alert(year + '.gads');
