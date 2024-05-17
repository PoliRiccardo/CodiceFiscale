
function generazioneCarta(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let data = new Date (document.getElementById("calendar").value);
    let maschio = document.getElementById("maschio");
    let femmina = document.getElementById("femmina");
    let comune = document.getElementById("comuni").value;
    document.getElementById("carta").innerHTML="";
    var consonanti_nome = [];
    var vocali_nome = [];
    var consonanti_cognome = [];
    var vocali_cognome = [];
    var n_cons_cognome=0;
    var n_voc_cognome=0;
    var n_cons_nome=0;
    var n_voc_nome=0;
    var char_lista = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var vettore_comuni =[
    "Acquafredda",
    "Adro",
    "Agnosine",
    "Alfianello",
    "Anfo",
    "Angolo Terme",
    "Artogne",
    "Azzano Mella",
    "Bagnolo Mella",
    "Bagolino",
    "Barbariga",
    "Barghe",
    "Bassano Bresciano",
    "Bedizzole",
    "Berlingo",
    "Berzo Demo",
    "Berzo Inferiore",
    "Bienno",
    "Bione",
    "Borgo San Giacomo",
    "Borgosatollo",
    "Borno",
    "Botticino",
    "Bovegno",
    "Bovezzo",
    "Brandico",
    "Braone",
    "Breno",
    "Brescia",
    "Brione",
    "Caino",
    "Calcinato",
    "Calvagese della Riviera",
    "Calvisano",
    "Capo di Ponte",
    "Capovalle",
    "Capriano del Colle",
    "Capriolo",
    "Carpenedolo",
    "Castegnato",
    "Castel Mella",
    "Castelcovati",
    "Castenedolo",
    "Casto",
    "Castrezzato",
    "Cazzago San Martino",
    "Cedegolo",
    "Cellatica",
    "Cerveno",
    "Ceto",
    "Cevo",
    "Chiari",
    "Cigole",
    "Cimbergo",
    "Cividate Camuno",
    "Coccaglio",
    "Collebeato",
    "Collio",
    "Cologne",
    "Comezzano-Cizzago",
    "Concesio",
    "Corte Franca",
    "Corteno Golgi",
    "Corzano",
    "Darfo Boario Terme",
    "Dello",
    "Desenzano del Garda",
    "Edolo",
    "Erbusco",
    "Esine",
    "Fiesse",
    "Flero",
    "Gambara",
    "Gardone Riviera",
    "Gardone Val Trompia",
    "Gargnano",
    "Gavardo",
    "Ghedi",
    "Gianico",
    "Gottolengo",
    "Gussago",
    "Idro",
    "Incudine",
    "Irma",
    "Iseo",
    "Isorella",
    "Lavenone",
    "Leno",
    "Limone sul Garda",
    "Lodrino",
    "Lograto",
    "Lonato del Garda",
    "Longhena",
    "Losine",
    "Lozio",
    "Lumezzane",
    "Maclodio",
    "Magasa",
    "Mairano",
    "Malegno",
    "Malonno",
    "Manerba del Garda",
    "Manerbio",
    "Marcheno",
    "Marmentino",
    "Marone",
    "Mazzano",
    "Milzano",
    "Moniga del Garda",
    "Monno",
    "Monte Isola",
    "Monticelli Brusati",
    "Montichiari",
    "Montirone",
    "Mura",
    "Muscoline",
    "Nave",
    "Niardo",
    "Nuvolento",
    "Nuvolera",
    "Odolo",
    "Offlaga",
    "Ome",
    "Ono San Pietro",
    "Orzinuovi",
    "Orzivecchi",
    "Ospitaletto",
    "Ossimo",
    "Padenghe sul Garda",
    "Paderno Franciacorta",
    "Paisco Loveno",
    "Paitone",
    "Palazzolo sull'Oglio",
    "Paratico",
    "Paspardo",
    "Passirano",
    "Pavone del Mella",
    "Pertica Alta",
    "Pertica Bassa",
    "Pezzaze",
    "Pian Camuno",
    "Piancogno",
    "Pisogne",
    "Polaveno",
    "Polpenazze del Garda",
    "Pompiano",
    "Poncarale",
    "Ponte di Legno",
    "Pontevico",
    "Pontoglio",
    "Pozzolengo",
    "Pralboino",
    "Preseglie",
    "Prestine",
    "Prevalle",
    "Provaglio d'Iseo",
    "Provaglio Val Sabbia",
    "Puegnago sul Garda",
    "Quinzano d'Oglio",
    "Remedello",
    "Rezzato",
    "Roccafranca",
    "Rodengo Saiano",
    "Roè Volciano",
    "Roncadelle",
    "Rovato",
    "Rudiano",
    "Sabbio Chiese",
    "Sale Marasino",
    "Salò",
    "San Felice del Benaco",
    "San Gervasio Bresciano",
    "San Paolo",
    "San Zeno Naviglio",
    "Sarezzo",
    "Saviore dell'Adamello",
    "Sellero",
    "Seniga",
    "Serle",
    "Sirmione",
    "Soiano del Lago",
    "Sonico",
    "Sulzano",
    "Tavernole sul Mella",
    "Temù",
    "Tignale",
    "Torbole Casaglia",
    "Toscolano-Maderno",
    "Travagliato",
    "Tremosine",
    "Trenzano",
    "Treviso Bresciano",
    "Urago d'Oglio",
    "Vallio Terme",
    "Valvestino",
    "Verolanuova",
    "Verolavecchia",
    "Vestone",
    "Vezza d'Oglio",
    "Villa Carcina",
    "Villachiara",
    "Villanuova sul Clisi",
    "Vione",
    "Visano",
    "Vobarno",
    "Zone"
]; 
    var codici_comuni = [
        "A034",
"A060",
"A082",
"A188",
"A288",
"A293",
"A451",
"A529",
"A569",
"A578",
"A630",
"A661",
"A702",
"A729",
"A799",
"A816",
"A817",
"A861",
"A878",
"B035",
"B040",
"B054",
"B091",
"B100",
"B102",
"B120",
"B124",
"B149",
"B157",
"B184",
"B365",
"B394",
"B436",
"B450",
"B664",
"B676",
"B698",
"B711",
"B817",
"C055",
"C208",
"C072",
"C293",
"C330",
"C332",
"C408",
"C417",
"C439",
"C549",
"C585",
"C591",
"C618",
"C685",
"C691",
"C760",
"C806",
"C850",
"C883",
"C893",
"C925",
"C948",
"D058",
"D064",
"D082",
"D251",
"D270",
"D284",
"D391",
"D421",
"D434",
"D576",
"D634",
"D891",
"D917",
"D918",
"D924",
"D940",
"D999",
"E010",
"E116",
"E271",
"E280",
"E297",
"E325",
"E333",
"E364",
"E497",
"E526",
"E596",
"E652",
"E654",
"M312",
"E673",
"E698",
"E706",
"E738",
"E787",
"E800",
"E841",
"E851",
"E865",
"E883",
"E884",
"E928",
"E961",
"E967",
"F063",
"F216",
"F373",
"F375",
"F532",
"F672",
"F471",
"F680",
"F806",
"F820",
"F851",
"F884",
"F989",
"F990",
"G001",
"G006",
"G061",
"G074",
"G149",
"G150",
"G170",
"G179",
"G213",
"G217",
"G247",
"G248",
"G264",
"G327",
"G354",
"G361",
"G391",
"G474",
"G475",
"G529",
"G546",
"G549",
"G710",
"G779",
"G801",
"G815",
"G818",
"G844",
"G859",
"G869",
"G959",
"G977",
"H043",
"H050",
"H055",
"H078",
"H077",
"H086",
"H140",
"H230",
"H256",
"H410",
"H477",
"H484",
"H525",
"H598",
"H630",
"H650",
"H699",
"H717",
"H838",
"H865",
"G407",
"I412",
"I433",
"I476",
"I588",
"I607",
"I631",
"I633",
"I782",
"I831",
"L002",
"C698",
"L094",
"L169",
"L210",
"L312",
"L339",
"L372",
"L380",
"L406",
"L494",
"L626",
"L468",
"L777",
"L778",
"L812",
"L816",
"L919",
"L923",
"L995",
"M065",
"M070",
"M104",
"M188"
];
    var codiceFiscale="";
    var somma_dispari=0;
    var somma_pari=0;
    var somma_controllo =0;
    //controlli
    {
      if (nome=="") {
        document.getElementById("carta").innerHTML="nome non inserito";
        throw new "exit";
      }
      if (cognome=="") {
        document.getElementById("carta").innerHTML="cognome non inserito";
        throw new "exit";
      }
      if (!femmina.checked && !maschio.checked){
        document.getElementById("carta").innerHTML="sesso non inserito";
        throw new "exit";
      }
    }
    

    //cognome
    {
        for (let i = 0; i < cognome.length; i++) {
            if (cognome.charAt(i) == 'A' || cognome.charAt(i) == 'E'|| cognome.charAt(i) == 'I' || cognome.charAt(i) == 'O' || cognome.charAt(i) == 'U'){
                vocali_cognome[n_voc_cognome] = cognome.charAt(i).toUpperCase();
                n_voc_cognome++;
            }
            else {
                consonanti_cognome[n_cons_cognome] = cognome.charAt(i).toUpperCase();
                n_cons_cognome++;
            }
        }
    if (cognome.length<3){
        if (n_cons_cognome>0) {
            codiceFiscale+=consonanti_cognome[0];
            codiceFiscale+=vocali_cognome[0];
        }
        else{
            codiceFiscale+=vocali_cognome[0];
            codiceFiscale+=vocali_cognome[1];
        }
        codiceFiscale+='X';
    }
    else {
        if (n_cons_cognome>=3){
            codiceFiscale+=consonanti_cognome[0];
            codiceFiscale+=consonanti_cognome[1];
            codiceFiscale+=consonanti_cognome[2];
        }
        else if (n_cons_cognome==2){
            codiceFiscale+=consonanti_cognome[0];
            codiceFiscale+=consonanti_cognome[1];
            codiceFiscale+=vocali_cognome[0];
        }
        else if (n_cons_cognome==1){
            codiceFiscale+=consonanti_cognome[0];
            codiceFiscale+=vocali_cognome[0];
            codiceFiscale+=vocali_cognome[1];
        }
    }
    }
    //nome
    {
        for (let i = 0; i < nome.length; i++) {
            if (nome.charAt(i) == 'A' || nome.charAt(i) == 'E'|| nome.charAt(i) == 'I' || nome.charAt(i) == 'O' || nome.charAt(i) == 'U'){
                vocali_nome[n_voc_nome] = nome.charAt(i).toUpperCase();
                n_voc_nome++;
            }
            else{
                consonanti_nome[n_cons_nome] = nome.charAt(i).toUpperCase();
                n_cons_nome++;
            }
        }
        if (nome.length<3){
            if (n_cons_nome>0) {
                codiceFiscale+=consonanti_nome[0];
                codiceFiscale+=vocali_nome[0];
            }
            else{
                codiceFiscale+=vocali_nome[0];
                codiceFiscale+=vocali_nome[1];
            }
            codiceFiscale+='X';
        }
        else {
            if (n_cons_nome>=4){
                codiceFiscale+=consonanti_nome[0];
                codiceFiscale+=consonanti_nome[2];
                codiceFiscale+=consonanti_nome[3];
            }
            else if (n_cons_nome==3){
                codiceFiscale+=consonanti_nome[0];
                codiceFiscale+=consonanti_nome[1];
                codiceFiscale+=consonanti_nome[2];
            }
            else if (n_cons_nome==2){
                codiceFiscale+=consonanti_nome[0];
                codiceFiscale+=consonanti_nome[1];
                codiceFiscale+=vocali_nome[0];
            }
            else if (n_cons_nome==1){
                codiceFiscale+=consonanti_nome[0];
                codiceFiscale+=vocali_nome[0];
                codiceFiscale+=vocali_nome[1];
            }
        }
    }
    //anno
    {
        var anno =data.getFullYear().toString();
        codiceFiscale+=anno.charAt(2);
        codiceFiscale+=anno.charAt(3);
    }
    //mese
    {
        var cod_mese = ['A', 'B', 'C', 'D', 'E','H', 'L', 'M', 'P', 'R', 'S', 'T'];
        var mese =data.getMonth();
        codiceFiscale+= cod_mese[mese];
    }
    //giorno & sesso
    {
        var giorno =data.getDate();
        if (maschio.checked){
            if (giorno<=9) codiceFiscale+='0';
            codiceFiscale+= giorno;
        } 
        else if (femmina.checked) codiceFiscale+=giorno + 40;
    }
    //comuni bresciani
    {
      for (let i = 0; i < vettore_comuni.length; i++) {
        if (vettore_comuni[i]==comune) codiceFiscale+=codici_comuni[i];
    }
    }
    //ultima cifra di controllo
    {
      for (var i = 0; i < codiceFiscale.length; i++) {

        //somma cifre pari
        if (i % 2 != 1) {
          switch (codiceFiscale.charAt(i)) {
            case '0': case 'A': somma_dispari += 1;
              break;
            case '1': case 'B': somma_dispari += 0;
              break;
            case '2': case 'C': somma_dispari += 5;
              break;
            case '3': case 'D': somma_dispari += 7;
              break;
            case '4': case 'E': somma_dispari += 9;
              break;
            case '5': case 'F': somma_dispari += 13;
              break;
            case '6': case 'G': somma_dispari += 15;
              break;
            case '7': case 'H': somma_dispari += 17;
              break;
            case '8': case 'I': somma_dispari += 19;
              break;
            case '9': case 'J': somma_dispari += 21;
              break;
            case 'K': somma_dispari += 2;
              break;
            case 'L': somma_dispari += 4;
              break;
            case 'M': somma_dispari += 18;
              break;
            case 'N': somma_dispari += 20;
              break;
            case 'O': somma_dispari += 11;
              break;
            case 'P': somma_dispari += 3;
              break;
            case 'Q': somma_dispari += 6;
              break;
            case 'R': somma_dispari += 8;
              break;
            case 'S': somma_dispari += 12;
              break;
            case 'T': somma_dispari += 14;
              break;
            case 'U': somma_dispari += 16;
              break;
            case 'V': somma_dispari += 10;
              break;
            case 'W': somma_dispari += 22;
              break;
            case 'X': somma_dispari += 25;
              break;
            case 'Y': somma_dispari += 24;
              break;
            case 'Z': somma_dispari += 23;
              break;
          }
        }
        //somma cifre dispari
        else {
          switch (codiceFiscale.charAt(i)) {
            case '0': case 'A': somma_pari+= 0;
              break;
            case '1': case 'B': somma_pari+= 1;
              break;
            case '2': case 'C': somma_pari+= 2;
              break;
            case '3': case 'D': somma_pari+= 3;
              break;
            case '4': case 'E': somma_pari+= 4;
              break;
            case '5': case 'F': somma_pari+= 5;
              break;
            case '6': case 'G': somma_pari+= 6;
              break;
            case '7': case 'H': somma_pari+= 7;
              break;
            case '8': case 'I': somma_pari+= 8;
              break;
            case '9': case 'J': somma_pari+= 9;
              break;
            case 'K': somma_pari+= 10;
              break;
            case 'L': somma_pari+= 11;
              break;
            case 'M': somma_pari+= 12;
              break;
            case 'N': somma_pari+= 13;
              break;
            case 'O': somma_pari+= 14;
              break;
            case 'P': somma_pari+= 15;
              break;
            case 'Q': somma_pari+= 16;
              break;
            case 'R': somma_pari+= 17;
              break;
            case 'S': somma_pari+= 18;
              break;
            case 'T': somma_pari+= 19;
              break;
            case 'U': somma_pari+= 20;
              break;
            case 'V': somma_pari+= 21;
              break;
            case 'W': somma_pari+= 22;
              break;
            case 'X': somma_pari+= 23;
              break;
            case 'Y': somma_pari+= 24;
              break;
            case 'Z': somma_pari+= 25;
              break;
          }
        }
    }
    
    //somma cifre dispari e pari
    somma_controllo=(somma_dispari + somma_pari) % 26;
    //codifica ultima cifra
    codiceFiscale+=char_lista[somma_controllo];
    }
    //visualizzazione del codice fiscale in html
    document.getElementById("carta").innerHTML=codiceFiscale;
            

}

//settaggio come giorno massimo del calendario html l'attuale giorno
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("calendar").setAttribute("max", today);
document.getElementById("calendar").setAttribute("value", today);
//Settaggio input maiuscolo
document.getElementById("nome").setAttribute("oninput","this.value = this.value.toUpperCase()");
document.getElementById("cognome").setAttribute("oninput","this.value = this.value.toUpperCase()");