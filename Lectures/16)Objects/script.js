 /* var isim= "Lütfullah";
var yaş= 28;
var gözrengi = "Ela";

document.write(isim+ " "+yaş+" "+gözrengi+"<hr>");

var insan1 = {
    isim : "Kaan",
    yaş : 25,
    gözrengi : "MAvi"
};

document.write(insan1.isim+" "+insan1.yaş+" "+insan1.gözrengi+"<hr>");
document.write(insan1["isim"].length)  */


function insan(isim,yaş,gözrengi) {
    this.isim = isim;
    this.yaş = yaş;
    this.gözrengi = gözrengi;
    this.isimdeğiştir= isimDeğiştir;
    this.dogumyılı = dogumyilihesapla;
}

function isimDeğiştir(yeniisim) {
    this.isim = yeniisim;
}
function dogumyilihesapla() {
    return 2021-this.yaş;
}



var i1 = new insan("Lütfullah",28,"Ela")
document.write(i1.isim+" "+i1.yaş+" "+i1.gözrengi+"<br>");

i1.isimdeğiştir("Lütfü");
document.write(i1.isim+" "+i1.yaş+" "+i1.gözrengi+" "+i1.dogumyılı());
