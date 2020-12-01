/**
 * Bài 1: Tính tiền lương nhân viên
 * Mô hình 3 khối:
 * 
 * Khối 1:
 * lương một ngày: luongMotNgay
 * số ngày làm: ngayLam
 * 
 * Khối 2: 
 * Bước 1: Khai báo các biến (luongMotNgay,ngayLam,luong)
 * Bước 2: nhập giá trị cho luongMotNgay và ngayLam
 * Bước 3: Xây dựng công thức tính toán
 * luong = luongMotNgay * ngayLam;
 * Bước 4: Xuất giá trị lương cho người xem
 * 
 * Khối 3:
 * lương của nhân viên: luong 
 */

 //Bước 1: Khai báo biến
 var luongMotNgay = 0;
 var ngayLam = 0;
 var luong = 0;

 //Bước 2: nhập giá trị
luongMotNgay = 100000;
ngayLam = 30;

// Bước 3: Tính tiền lương
luong = luongMotNgay * ngayLam;

//Bước 4: In ra tiền lương cho người dùng
console.log("Tiền lương: "+ luong);

/**
 * Bài 2: Tính giá trị trung bình
 * Mô hình 3 khối
 * 
 * Khối 1:
 * 5 số thực: num1, num2, num3, num4, num5
 * 
 * Khối 2:
 * B1: Khai báo biến 
 * B2: Nhập giá trị cho 5 số thực
 * B3: Tính số trung bình
 * stb = (num1 + num2 + num3 + num4+ num5)/5;
 * B4: In stb ra cho người dùng xem
 * 
 * Khối 3:
 * số trung bình của 5 số thực: stb
 *  
 */

// B1: Khai báo biến 
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var stb = 0;

//B2: nhập giá trị
num1 = 1;
num2 = 2;
num3 = 3;
num4 = 4;
num5 = 5;

//B3: tính stb
stb = (num1 + num2 + num3 + num4+ num5)/5;
//B4: in ra cho người dùng
console.log("Số trung bình của 5 số thực: "+ stb);

/**
 * Bài 3: Quy đổi tiền
 * Khối 1:
 * tỷ giá: 23500
 * số tiền USD cần quy đổi: tienUSD
 * 
 * Khối 2:
 * B1: Khai báo biến tyGia,tienUSD,tienVND
 * B2: Nhập giá trị cho tienUSD
 * B3: Quy đổi USD sang VND 
 * tienVND = tienUSD * tyGia
 * B4: In kết qua ra màn hình cho người dùng xem
 * 
 * Khối 3:
 * số tiền việt sau khi quy đổi: tienVND
 */

// B1: Khai báo biến
var tyGia = 23500;
var tienUSD = 0;
var tienVND = 0;

//B2: nhập giá trị tienUSD
tienUSD = 100;

// B3: Quy đổi USD sang VND
tienVND = tienUSD * tyGia;

//B4: In kết quả ra
console.log("Số tiền sau quy đổi: " + tienVND + "VND");
