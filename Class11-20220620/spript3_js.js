var x= [1,3,2];

document.getElementById("vestule_ka_ir").innerHTML = "Pirms: " + x[0] + " " + x[1] + " " + x[2];
if (x[1]>x[0])
    {
   [x[0],x[1]] = [x[1],x[0]];
    }
if (x[2]>x[0])
    {
        x[0]=x[0]+x[2];
        x[2]=x[0]-x[2];
        x[0]=x[0]-x[2];
    }
if (x[2]>x[1])
    {
        x[1]=x[1]^x[2];
        x[2]=x[1]^x[2];
        x[1]=x[1]^x[2];
    }

    document.getElementById("vestule_jauna").innerHTML = "Pēc: " + x[0] + " " + x[1] + " " + x[2];

   

