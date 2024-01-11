let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");
let min, mid, max;
if(a>b){
    max = a;
    mid = b;
    if(a>c){
        max = a;
        if(b>c){
            min = c;
            mid = b;
        }else{
            mid = c;
            min = b;
        }
    }else{
        max = c;
        mid = a;
        min = b;
    }
}else if(b>c){
    max = b;
    if(a>c){
        mid = a;
        min = c;
    }else{
        mid = c;
        min = a;
    }
}else{
    max = c;
    mid = b;
    min = a;
}
console.log(min, mid, max);