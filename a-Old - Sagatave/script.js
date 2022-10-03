/*LOGIN FORM*/

function myFunction()
{
    var un_admin = document.forms["myForm"]["Uname"].value;
    var pw_admin = document.forms["myForm"]["Pass"].value;
    if(un_admin== "admin" && pw_admin=="12345");
    {
        window.location.href="./ToDo_admin.html";
    }

    if(un_marite== "marite" && pw_marite=="marite123");
    {
        window.location.href="./ToDo_marite.html";
    }

}


/*Kur šo likt un kā tas strādās???*/
localStorage.setItem('Uname', 'Pass');