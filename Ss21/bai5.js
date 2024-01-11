let month = +prompt("Nhập tháng?");
switch(month){
    case 1: case 3: case 5: case 7: case 11:
        console.log("31 ngày");
        break;
    case 4: case 6: case 8: case 10:
        console.log("30 ngày");
        break;
    case 2:
        console.log("28 hoặc 29 ngày");
        break;
}