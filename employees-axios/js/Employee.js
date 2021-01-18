class Employee {
    constructor(code, name, position, salary, hourOfMonth, coefficientPos) {
        this.maNhanVien = code;
        this.tenNhanVien = name;
        this.chucVu = position;
        this.luongCoBan = salary;
        this.soGioLamTrongThang = hourOfMonth;
        this.heSoChucVu = coefficientPos;
    }
    calcTotalSalary() {
        return this.luongCoBan * this.heSoChucVu;
    }
    rankingEmployee() {
        if (this.soGioLamTrongThang >= 120) {
            return 'Excellent';
        } else if (this.soGioLamTrongThang >= 100) {
            return 'Good';
        } else if (this.soGioLamTrongThang >= 80) {
            return 'Fair';
        } else if (this.soGioLamTrongThang >= 50) {
            return 'Poor';
        } else {
            return 'Unknown';
        }
    }
}

export { Employee };