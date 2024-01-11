let t = +prompt("điểm toán");
let v = +prompt("điểm văn");
let a = +prompt("điểm anh");
let dtb = (t+v+a)/3;
if(dtb<5) console.log("xếp loại: YẾU");
else if(5<=dtb && dtb<=6.4) console.log("xếp loại: TB");
else if(6.5<=dtb && dtb<=7.9) console.log("xếp loại: KHÁ");
else if(8<=dtb && dtb<=10) console.log("xếp loại: GIỎI");