// location:
console.log(window.location);
console.log(document.location);
console.log(location);

// URL ("pilnā adrese")
console.log(location.href);

// protokols (http un https - datu izgūšanai caur interneta tīklu, var būt arī lolālu aplikāciju darbināšanai)
console.log(location.protocol);

// host (IT vai "vārdiskā" IP adrese)
// ~ mājasdarbs - palaīst par DN serveriem
console.log(location.host);
// host satur: hostname un port

// port
// ~ mājasdarbs - palasīt par portiem un to pielietošanu (portu numuru diapazoni)
console.log(location.port);

// pathname - Web-servisa ceļš - lokālais ceļš aplikācijas ietvaros (līdz pirmai slīpai svītrai aiz hosta)
// */* aiz host'a - web-servisa "ceļu sakne".
console.log(location.pathname);

// search - meklēšanas kritēriji
// aiz "?" zīmes, tie var būt vairāki - savā starpā atdalīti ar "&" zīmi
console.log(location.search);
// piemērs:   https://www.ltab.lv/meklesana/?keyword=l%C4%ABdzek%C4%BCi&type=

// hash - dokumenta apakšsadaļas nosaukums, kas sākas ar #
console.log(location.hash);
// piemērs:  https://www.lmt.lv/lv/dazadi#sadarbibas-partneriem

// lietotāja vārds un parole
// pirms hostname pirms "@" zīmes
// https://developer.mozilla.org/en-US/docs/Web/API/URL/username
// https://developer.mozilla.org/en-US/docs/Web/API/URL/password
// const url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username');
// console.log(url.username) // Logs "anonymous"
// console.log(url.password) // Logs "flabada"

alert('Tulīt ielādēsies cita lapa');

// assign(), replace(), reload()
// svarīgi vai ir vai nav ieraksts iekš History - attiecīgi iespēja pārviettotes ar Back/Next pogām
//         vai notiek lapas satura izgūšana no servera vai no pārluka Cache
location.replace('http://127.0.0.1:5500/Class21_20220727/index.html');