function selamver() {
    document.write("Selam,Naber?<br><br>")
}

selamver();
selamver();


function selamVer(isim) {
    document.write(isim+"Naber?<br>")
}

selamVer("Lütfullah")

function Selamver(isim1,isim2="İsim Girilmedi") {
    document.write(isim1+ " ve "+isim2+ ", nasılsınız?"+"<br>");
}

Selamver("Hakan","Lütfullah")
Selamver("Lütfullah")

function yaşhesapla(isim,dogumtarihi) {
    document.write(isim+ " "+  (2021-dogumtarihi) + " yaşındadır. <br>")
}

yaşhesapla("Lütfullah",1993)

function carp(sayı1,sayı2) {
    return sayı1*sayı2;
}

document.write(carp(5,3)+"<hr>");
console.log(carp(5,7))

function tekçift(sayı) {
    if(sayı%2==0){
        return "Çift sayıdır.<br>";
    }
    else{
        return "Tek sayıdır.<br>";
    }
  
}
document.write(tekçift(15))

for(var i=0; i<19; i++) {
    document.write(i+" sayısı "+tekçift(i)+"<br>")
}