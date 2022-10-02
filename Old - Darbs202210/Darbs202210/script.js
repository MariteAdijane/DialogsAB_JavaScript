/* Pieteikšanās formas loģika */

function pieteiksanas()
{
    var lietotajs = document.forms["pieteiksanasForma"]["lietotajs"].value;
    var parole = document.forms["pieteiksanasForma"]["parole"].value;

    if (lietotajs && parole) { /* Pārbaudam vai vispār ir ievadīts lietotājvārds un parole */
        if(lietotajs=== "admin" && parole==="admin123" || lietotajs==="marite" && parole==="marite123")  /* Pārbaudam vai administrators */
            {
                localStorage.setItem('lietotajvards', lietotajs);  /* Uzstādam lietotāju iekš LocalStorage */
                window.location.href="./uzdevumu_saraksts.html";  /* Pārsūtam uz administratora sadaļu */
            }
        else alert("Nepareizs lietotājvārds vai parole!");  /* Parādam kļūdu ja ievadītais lietotājs un parole nesakrīt ne ar vienu no definētajiem */
    }
    else alert("Nav ievadīts lietotājvārds vai parole!");   /* Parādam kļūdu ja nav ievadīts lietotājs vai parole */

}

function iziet()
{
    localStorage.setItem('lietotajvards', null); 
    window.location.replace("index.html");
}
