/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + num (số dương có 2 chữ số)
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo biến và gán giá trị khởi tạo
 * B2: Xây dựng công thức tính toán
 * numHangDv = num % 10;
 * numHangChuc = num/10 => floor(num/10);
 * 
 * tong = numHangDv + numHangChuc;
 * 
 * 
 * B3: Hiển thị kết quả (console.log)
 * 
 * Khối 3: Output (kết quả)
 * + tong
 */

// B1:
// var num = 12;
// var numHangDv = 0;
// var numHangChuc = 0;

// // B2: 
// numHangDv = num % 10;

// numHangChuc = Math.floor(num/10);

// tong = numHangDv + numHangChuc;

// // B3:
// console.log("Tổng 2 ký số của số vừa nhập là: " +tong);


//JS2_3

function tinhTongKySo() {
    var num = document.getElementById("soHaiChuSo").value;
    var numHangDv = num % 10;
    var numHangChuc = Math.floor(num/10);


    var tong = numHangDv + numHangChuc;


    document.getElementById("thongBaoTongKySo").innerHTML = tong;
}
