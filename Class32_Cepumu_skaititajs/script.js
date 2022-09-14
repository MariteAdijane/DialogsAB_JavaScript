var cName = "apmeklejumuSkaits";
var cValue = 1, expDays = 10;
let cookies = document.cookie;

function izveidotCepumu(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function uzstaditSakumaReizes() {
    izveidotCepumu(cName, cValue = 1, expDays);
    document.getElementById("skaititajs").innerHTML=('Šī ir pirmā reize apmeklējot no šī datora');
}

function izrekinatApmeklejumus() {
    if (!cookies) {
        uzstaditSakumaReizes();
    } else {
        if (cValue >= 1) {
            cValue = +document.cookie.split("; ")[0].split("=")[1] + 1;
            izveidotCepumu(cName, cValue, expDays);
            document.getElementById("skaititajs").innerHTML=('Lapa no šī datora apmeklēta ' + cValue + ' reizes');
        }
    }
}

izrekinatApmeklejumus();
