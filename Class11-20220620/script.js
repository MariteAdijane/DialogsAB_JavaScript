var c=11,
   d=20,
   e=21;

if (c>d && c>e)
   {
    console.log("Vislielākais ir c=" +c )
    if (d>e)
        {
          console.log("Nākamais ir d=" +d )
          console.log("Mazākais ir e=" +e )
        }
        else
        {
            console.log("Nākamais ir e=" +e )
            console.log("Mazākais ir d=" +d )
        }
   }
else if (d>e && d>e)
   {
    console.log("Vislielākais ir d=" +d )
    if (c>e)
        {
          console.log("Nākamais ir c=" +c )
          console.log("Mazākais ir e=" +e )
        }
        else 
        {
          console.log("Nākamais ir e=" +e )
          console.log("Mazākais ir c=" +c )
        }
   }
   else
   {
    console.log("Vislielākais ir e=" +e )
    if (d>c)
        {
          console.log("Nākamais ir d=" +d )
          console.log("Mazākais ir c=" +c )
        }
        else
        { 
          console.log("Nākamais ir c=" +c )
          console.log("Mazākais ir d=" +d )
        }
   }

   

   document.getElementById("vestule_ka_ir").innerHTML = [c,d,e];
   document.getElementById("vestule_jauna").innerHTML = [e,d,c];

/*Šo var pārbaudīt Inspektēt - Consolē*/

/*
if (time < 10)
{greeting = "Good morning";
}
else if (time < 20) 
{greeting = "Good day";
}
else 
{greeting "Good evening";
}*/