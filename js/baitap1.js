/**
 * Khoi 1:Input
 * luong1Ngay
 * soNgayLam
 * Khoi 2:
 * B1:tạo biến và gán giá trị
 * 
 * B2:xây dựng công thức
 * tongLuong = luong1Ngay * soNgayLam
 * 
 * B3:hiển thị kết quả
 * 
 * Khoi 3:Output
 * +tongLuong
 * 
 */

// B1
// var luong1Ngay = 100000;
// var soNgayLam = 5;
// var tongLuong = 0;

// // B2:
// tongLuong = luong1Ngay * soNgayLam

// //B3:
// // toLocaleString: hiển thị dấu chia phần ngàn cho number
// console.log("Tổng lương: " + tongLuong.toLocaleString() + " VNĐ")


//Js2-3


function tinhLuong() {
    var luong1Ngay = document.getElementById("luongngay").value;
    var soNgayLam = document.getElementById("days").value;


    var tongLuong = luong1Ngay * soNgayLam;


    document.getElementById("thongBaoTien").innerHTML = tongLuong;
}