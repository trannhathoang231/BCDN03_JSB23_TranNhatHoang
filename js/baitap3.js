/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + giá USD
 * + số tiền USD
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo biến và gán giá trị khởi tạo
 * B2: Xây dựng công thức tính toán
 * + số tiền VND = giá USD  * số tiền USD
 * 
 * B3: Hiển thị kết quả (console.log)
 * 
 * Khối 3: Output (kết quả)
 * + số tiền VND
 */

// B1:
// var giaUsd = 23500;
// var soTienUsd = 2;
// var soTienVnd = 0;

// // B2:
// soTienVnd = giaUsd * soTienUsd; 

// // B3: 

// console.log("Số tiền sau quy đổi VND: " + soTienVnd);

//js2_3

function tinhTienVND() {
    var soTienUsd = document.getElementById("soTienUSD").value;
    var giaUsd = 23500;

    var soTienVnd = soTienUsd * giaUsd;

    document.getElementById("thongBaoTienVND").innerHTML = new Intl.NumberFormat('vn-VN').format(soTienVnd);
}
