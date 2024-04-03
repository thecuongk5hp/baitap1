var banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));
var chuVi = 2 * Math.PI * banKinh;
var dienTich = Math.PI * Math.pow(banKinh, 2);
console.log("Chu vi của hình tròn là: " + chuVi);
console.log("Diện tích của hình tròn là: " + dienTich);