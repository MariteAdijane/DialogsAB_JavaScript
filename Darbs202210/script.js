/*LOGIN FORM*/

function myFunction()
{
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un== "admin" && pw=="12345");
    {
        window.location.href="./ToDo.html";
    }
   
}