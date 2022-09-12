// Source - http://www.quirksmode.org/js/cookies.html
/*
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

setCookie('ppkcookie','testcookie',7);

var x = getCookie('ppkcookie');
if (x) {
    [x+1]
}
*/


// https://www.javascripttutorial.net/web-apis/javascript-cookies/
/*
expires = new Date('2022-09-12T20:40:00.000');

document.cookie = `username=admin; path=/; expires=${expires.toGMTString()}`;

let intervalID = setInterval(check_cookie, 1000);

function check_cookie(){
  var current = new Date();
  console.log(current);
  const str = document.cookie;
  console.log(str);
  if(str==''){
    clearInterval(intervalID);
  }
}
*/