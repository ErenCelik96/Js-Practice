for(var i=0;i<10;i++) {
    if(i==5){
        break;
    }
    document.write(i+"<br>")
}

document.write("<hr>"+i+"<hr>")

for(var i=0;i<10;i++) {
    if(i==5){
        continue;
    }
    document.write(i+"<br>")
}

document.write("<hr>"+i+"<hr>")

var sayı=31;
while(sayı>0) {
    
    sayı--;
    if(sayı%5 ==0){
        continue;
    }
    document.write(sayı+"<br>")    
}