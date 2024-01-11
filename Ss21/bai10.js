let x = 10;

// Sử dụng if/else để kiểm tra giá trị của biến x
if (x === 10) {
    console.log("Biến x có giá trị bằng 10");
} else if (x > 10) {
    console.log("Biến x lớn hơn 10");
} else {
    console.log("Biến x nhỏ hơn 10");
}

/*Câu lệnh if/else được sử dụng để kiểm tra giá trị của biến x và thực hiện các hành động
tương ứng với mỗi điều kiện.*/

let dayWeek = 4;
let day;

// Sử dụng switch/case để kiểm tra giá trị của biến dayWeek
switch (dayWeek) {
    case 8:
        day = "Chủ nhật";
        break;
    case 2:
        day = "Thứ Hai";
        break;
    case 3:
        day = "Thứ Ba";
        break;
    case 4:
        day = "Thứ Tư";
        break;
    case 5:
        day = "Thứ Năm";
        break;
    case 6:
        day = "Thứ Sáu";
        break;
    case 7:
        day = "Thứ Bảy";
        break;
    default:
        day = "Không phải ngày trong tuần";
}

console.log("Ngày trong tuần là: " + day);

/* Câu lệnh switch/case được sử dụng để kiểm tra giá trị của biến dayWeek
và thực hiện các hành động tương ứng với từng giá trị case khác nhau.*/