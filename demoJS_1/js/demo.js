console.log("hello world!");

//khai bao bien
//keyword var
var fullName = "Pham Luong Quan";
console.log(fullName);

var age = 23;
console.log(age);
/**
 * Author: ABC
 * Release: 09/11/2020
 * Function: DemoJS
 */
/**
 * Demo toan tu 
 */
var num1 = 0;
var num2 = 0;

num1 = 3;
num2 = 4;
var sum = num1 + num2;
console.log(sum);

var hieu = num1 - num2;
console.log(hieu);

var tich = num1 * num2;
console.log(tich);

var thuong = num1 / num2;
console.log(thuong);

var phanDu = num2 % num1;
console.log(phanDu);

/**
 * Tang giam bien
 */
var num3 = 0;
var num4 = 0;

num4 = ++num3;
console.log('num4 = ' + num4);

var num5 = 0;
var num6 = 0;
num6 = num5++;
console.log('num6 = ' + num6);

var x = 1;
var y = 1;

x = x + y;
x += y
console.log('x = ' + x);

/**
 * const
 */
const PI = 3.14;

/**
 * Pytago
 */
var edge1 = 3;
var edge2 = 4;
var edge3 = 0;
edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);
console.log('edge3 = ' + edge3);

/**
 * Tong hai ky so
 */
var n = 0;
var unit = 0;
var ten = 0;
var hundered = 0;
var sum = 0;

n = 589;
hundered = Math.floor(n / 100);
ten = Math.floor(n % 100 / 10);
unit = n % 10;

sum = hundered + ten + unit;
console.log('result = ' + sum);

/**
 * Tinh ve phim 
 */

var tenPhim = '';
var giaVeNguoiLon = 0;
var giaVeTreEm = 0;
var soVeNguoiLon = 0;
var soVeTreEm = 0;
var phanTram = 0;
var tongDoanhThu = 0;
var tienTuThien = 0;
var tienConLai = 0;
var tongVe = 0;

tenPhim = 'Toy Story';
giaVeNguoiLon = 85000;
giaVeTreEm = 55000;
soVeNguoiLon = 780;
soVeTreEm = 1236;
phanTram = 10;

tongVe = soVeNguoiLon + soVeTreEm
tongDoanhThu = giaVeNguoiLon*soVeNguoiLon + giaVeTreEm*soVeTreEm;
tienTuThien = tongDoanhThu/100*phanTram;
tienConLai = tongDoanhThu-tienTuThien;

console.log('Ten Phim: ' + tenPhim);
console.log('So ve ban ra: '+ tongVe);
console.log('Doanh thu: ' + tongDoanhThu);
console.log('Trich phan tram tu thien: ' + phanTram + '%');
console.log('Tong tien trich tu thien: ' + tienTuThien);
console.log('Tong thu duoc sau khi tu thien: ' + tienConLai);