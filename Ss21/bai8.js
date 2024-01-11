var w = +prompt("nhập cân nặng");
var h = +prompt("nhập chiều cao");
var bmi = w/(h*h);
type = (bmi<18.5) ? console.log("gầy") : (18.5<=bmi && bmi<=24.9) ? console.log("Bình thường") : (bmi>=25 && bmi<=29.9) ? console.log("Tiền béo phì") : (bmi>=30 && bmi<=34.9) ? console.log("Béo phì độ I") : (bmi>=35 && bmi<=39.9) ? console.log("Béo phì độ II") : console.log("Béo phì độ III");