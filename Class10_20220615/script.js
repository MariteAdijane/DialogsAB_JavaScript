var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var pelna_1 = (nauda * 0.0001) *1;
var pelna_2 = (nauda * 0.0002) *1;
var pelna_3 = (nauda * 0.0003) *3;
var pelna_4 = (nauda * 0.0004) *4;
var pelna_5 = (nauda * 0.0005) *5;

document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = pelna_1;
document.getElementById("procenti_2").innerHTML = pelna_2;
document.getElementById("procenti_3").innerHTML = pelna_3;
document.getElementById("procenti_4").innerHTML = pelna_4;
document.getElementById("procenti_5").innerHTML = pelna_5;


/*  UZDEVUMI:
1. Attēlot summas ar 2 zīmēm pēc komata
2. Palabot algoritmu (saīsināt) un papildus veikt aprēkinu, ja % izmaksa 1.gadā ir = (1.gada summa).., otrajā gadā ir = (1+2.gada sumamas).. utt
3. Pārtaisīt par masīviem un saīsināt kodu
4. Izskatīt JS Arrays līdz beigām un izprast
*/



/* Masīvs:
const cars = ["Saab", "Volvo", "BMW"];
cars;
cars.sort();
(3) ['BMW', 'Saab', 'Volvo'] -- IZMAINA oriģināju, pārliek alfabēta secībā!!!
*/

/* Masīvs masīvā:

const cars = [["BMW","Audi"], [["X3","X5"],["A2","Q7"]]];

cars[1][0]
i=0
cars[0][i] + "markas mašīnas ir:" +cars[1][i];
cars[0][1] + " markas mašīnas ir: " + cars[1][1];
*/

/* Sortēšana augošā secībā: 
    [11,2,22,1].sort((a,b) => a-b);
Sortēšana dilstošā secībā:
    [11,2,22,1].sort((a,b) => b-a);
*/



