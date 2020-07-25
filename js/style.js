function HargaPeci() {
    var Harga  = document.getElementById("FormPeci").select1.value;
    var Peci   = document.getElementById("Peci");
    var Peci2  = document.getElementById("Peci2");

    if(Harga == "PCS")
    {
        Peci.innerHTML = "24.000";
        Peci2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Peci.innerHTML = "200.000";
        Peci2.innerHTML = "200.000";
    }
    else 
    {
        Peci.innerHTML = "0";
        Peci2.innerHTML = "0";
    }
}

function HargaHoodie() {
    var Harga    = document.getElementById("FormHoodie").select1.value;
    var Hoodie   = document.getElementById("Hoodie");
    var Hoodie2  = document.getElementById("Hoodie2");

    if(Harga == "PCS")
    {
        Hoodie.innerHTML = "24.000";
        Hoodie2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Hoodie.innerHTML = "200.000";
        Hoodie2.innerHTML = "200.000";
    }
    else 
    {
        Hoodie.innerHTML = "0";
        Hoodie2.innerHTML = "0";
    }
}

function HargaJaket() {
    var Harga    = document.getElementById("FormJaket").select1.value;
    var Jaket   = document.getElementById("Jaket");
    var Jaket2  = document.getElementById("Jaket2");

    if(Harga == "PCS")
    {
        Jaket.innerHTML = "24.000";
        Jaket2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Jaket.innerHTML = "200.000";
        Jaket2.innerHTML = "200.000";
    }
    else 
    {
        Jaket.innerHTML = "0";
        Jaket2.innerHTML = "0";
    }
}

function HargaKoko() {
    var Harga    = document.getElementById("FormKoko").select1.value;
    var Koko   = document.getElementById("Koko");
    var Koko2  = document.getElementById("Koko2");

    if(Harga == "PCS")
    {
        Koko.innerHTML = "24.000";
        Koko2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Koko.innerHTML = "200.000";
        Koko2.innerHTML = "200.000";
    }
    else 
    {
        Koko.innerHTML = "0";
        Koko2.innerHTML = "0";
    }
}

function HargaKemeja() {
    var Harga    = document.getElementById("FormKemeja").select1.value;
    var Kemeja   = document.getElementById("Kemeja");
    var Kemeja2  = document.getElementById("Kemeja2");

    if(Harga == "PCS")
    {
        Kemeja.innerHTML = "24.000";
        Kemeja2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Kemeja.innerHTML = "200.000";
        Kemeja2.innerHTML = "200.000";
    }
    else 
    {
        Kemeja.innerHTML = "0";
        Kemeja2.innerHTML = "0";
    }
}

function HargaJeans() {
    var Harga    = document.getElementById("FormJeans").select1.value;
    var Jeans   = document.getElementById("Jeans");
    var Jeans2  = document.getElementById("Jeans2");

    if(Harga == "PCS")
    {
        Jeans.innerHTML = "24.000";
        Jeans2.innerHTML = "24.000";
    } else if (Harga == "Lusin")
    {
        Jeans.innerHTML = "200.000";
        Jeans2.innerHTML = "200.000";
    }
    else 
    {
        Jeans.innerHTML = "0";
        Jeans2.innerHTML = "0";
    }
}


