import { Employee } from './Employee.js';

const arrEmployee = [];

document.getElementById('position').onchange = () => {
    let coefficient = document.getElementById('coefficient');
    let pos = {
        'Director': 3,
        'Manager': 2,
        'Employee': 1,
    };

    coefficient.value = pos[document.getElementById('position').value];
    coefficient.disabled = true;
}

document.getElementById('calc').onclick = (event) => {
    event.preventDefault();

    let employee = new Employee();
    let arrInput = document.querySelectorAll('form input, form select');

    for (let input of arrInput) {
        let value = input.value;
        let id = input.id;

        employee[id] = value;
    }
    arrEmployee.push(employee);
    displayEmployee(arrEmployee);
}

const displayEmployee = (arr) => {
    let contentTable = ``;

    for (let i = 0; i < arr.length; i++) {
        contentTable += `<tr>`;

        for (let property in arr[i]) {
            contentTable += `<td>${arr[i][property]}</td>`;
        }
        contentTable += `<td>${arr[i].calcSalary()}</td>`;
        contentTable += `</tr>`;
    }

    document.querySelector('tbody').innerHTML = contentTable;
    let arrInput = document.querySelectorAll('form input, form select');
    for (let input of arrInput) {
        input.value = '';
    }
}