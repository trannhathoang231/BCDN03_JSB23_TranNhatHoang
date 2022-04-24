/**
 * Khoi 1:input
 * var num1... num5
 * 
 * Khoi 2
 * tb = (num1 + num2 + num3 +num4 +num5) / 5;
 * 
 * Khoi 3
 * + tb
 */

// var num1 = 5.5;
// var num2 = 10.435;
// var num3 = 4.345;
// var num4 = 6.765;
// var num5 = 7.345;
// var tb = 0;

// tb = (num1 + num2 + num3 +num4 +num5) / 5;

// console.log("So trung binh : " + tb)

// console.log("Làm tròn " + Math.round(tb))

// console.log("Làm tròn, lấy bao nhiêu số sau dấu . " + tb.toFixed(1))

// js2_3

function tinhTrungBinh() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    console.log(num1,num2,num3,num4,num5);

    var tb = (Number(num1) + Number(num2) + Number(num3) +Number(num4) +Number(num5)) / 5;

    document.getElementById("thongBaoTrungBinh").innerHTML = Math.round(tb);
}