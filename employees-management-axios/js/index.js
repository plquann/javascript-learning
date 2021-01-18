import { Employee } from './Employee.js';
import { Services } from './Services.js';
import { Validation } from './Validation.js';

const server = new Services();
const validator = new Validation();

const getDataFromServer = async () => {
    try {
        const res = await server.getListEmployees();
        console.log(res.data);
        displayTableEmployees(res.data);
    } catch (err) {
        console.log(err);
    }
}

const addEmployee = async (data) => {
    try {
        await server.addEmployee(data);
        getDataFromServer();
    } catch (err) {
        console.log(err);
    }
}

const deleteEmployee = async (code) => {
    try {
        await server.deleteEmployee(code);
        getDataFromServer();
    } catch (err) {
        console.log(err);
    }
}
window.deleteEmployee = deleteEmployee;

const editEmployee = async (code) => {
    try {
        const res = await server.getInfoEmployee(code);
        let emEdit = res.data;
        document.getElementById('codeID').value = emEdit.maNhanVien;
        document.getElementById('name').value = emEdit.tenNhanVien;
        document.getElementById('position').value = emEdit.heSoChucVu;
        document.getElementById('hourOfMonth').value = emEdit.soGioLamTrongThang;
        document.getElementById('salary').value = emEdit.luongCoBan;
    } catch (err) {
        console.log(err);
    }
}
window.editEmployee = editEmployee;

const updateEmployee = async (data) => {
    try {
        await server.updateInfoEmployee(data);
        getDataFromServer();
    } catch (err) {
        console.log(err);
    }
}

const displayTableEmployees = (arrEmployees) => {
    let contentTable = ``;
    for (let i = 0; i < arrEmployees.length; i++) {
        let em = new Employee(arrEmployees[i].maNhanVien, arrEmployees[i].tenNhanVien, arrEmployees[i].chucVu, arrEmployees[i].luongCoBan, arrEmployees[i].soGioLamTrongThang, arrEmployees[i].heSoChucVu);
        contentTable += `
            <tr>    
                <td>${em.maNhanVien}</td>
                <td>${em.tenNhanVien}</td>
                <td>${em.chucVu}</td>
                <td>${em.luongCoBan}</td>
                <td>${em.calcTotalSalary()}</td>
                <td>${em.soGioLamTrongThang}</td>
                <td>${em.rankingEmployee()}</td>
                <td>
                    <button class = "btn btn-danger" onclick = "deleteEmployee('${em.maNhanVien}')">Delete</button>
                </td>
                <td>
                    <button class = "btn btn-success" onclick = "editEmployee('${em.maNhanVien}')">Edit</button>
                </td>
            </tr>`;
    }
    document.getElementById('addBody').innerHTML = contentTable;
}

document.getElementById('btnAdd').onclick = () => {
    let em = new Employee();
    em.maNhanVien = document.getElementById('codeID').value;
    em.tenNhanVien = document.getElementById('name').value;
    em.chucVu = document.getElementById('position').options[document.getElementById('position').selectedIndex].text;
    em.soGioLamTrongThang = document.getElementById('hourOfMonth').value;
    em.luongCoBan = document.getElementById('salary').value;
    em.heSoChucVu = document.getElementById('position').value;

    //console.table(em);

    let valid = true;

    valid &= validator.checkNull(em.maNhanVien, 'validCode', 'Employee Code') & validator.checkNull(em.tenNhanVien, 'validName', 'Full Name') & validator.checkNull(em.luongCoBan, 'validSalary', 'Salary') & validator.checkNull(em.soGioLamTrongThang, 'validHour', 'Amount hour working of month');
    valid &= validator.checkLength(em.maNhanVien, 'validCode', 'Employee Code', 4, 6) & validator.checkAllNumber(em.maNhanVien, 'validCode', 'Employee Code');
    valid &= validator.checkAllCharacters(em.tenNhanVien, 'validName', 'Full Name');
    valid &= validator.checkAllNumber(em.luongCoBan, 'validSalary', 'Salary') & validator.checkValue(+em.luongCoBan, 'validSalary', 'Salary', 1000, 1000000000);
    valid &= validator.checkAllNumber(em.soGioLamTrongThang, 'validHour', 'Amount hour working of month') & validator.checkValue(+em.soGioLamTrongThang, 'validHour', 'Amount hour working of month', 1, 168);

    if (valid) {
        addEmployee(em);
    }
}

document.getElementById('btnSave').onclick = () => {
    let em = new Employee();
    em.maNhanVien = document.getElementById('codeID').value;
    em.tenNhanVien = document.getElementById('name').value;
    em.chucVu = document.getElementById('position').options[document.getElementById('position').selectedIndex].text;
    em.soGioLamTrongThang = document.getElementById('hourOfMonth').value;
    em.luongCoBan = document.getElementById('salary').value;
    em.heSoChucVu = document.getElementById('position').value;
    let valid = true;

    valid &= validator.checkNull(em.maNhanVien, 'validCode', 'Employee Code') & validator.checkNull(em.tenNhanVien, 'validName', 'Full Name') & validator.checkNull(em.luongCoBan, 'validSalary', 'Salary') & validator.checkNull(em.soGioLamTrongThang, 'validHour', 'Amount hour working of month');
    valid &= validator.checkLength(em.maNhanVien, 'validCode', 'Employee Code', 4, 6) & validator.checkAllNumber(em.maNhanVien, 'validCode', 'Employee Code');
    valid &= validator.checkAllCharacters(em.tenNhanVien, 'validName', 'Full Name');
    valid &= validator.checkAllNumber(em.luongCoBan, 'validSalary', 'Salary') & validator.checkValue(+em.luongCoBan, 'validSalary', 'Salary', 1000, 1000000000);
    valid &= validator.checkAllNumber(em.soGioLamTrongThang, 'validHour', 'Amount hour working of month') & validator.checkValue(+em.soGioLamTrongThang, 'validHour', 'Amount hour working of month', 1, 168);

    if (valid) {
        updateEmployee(em);
    }
}

getDataFromServer();