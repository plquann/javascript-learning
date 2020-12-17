var listEmployees = [];

getLocal();
displayListEmployees(listEmployees);

document.getElementById("btnThem").addEventListener("click", function(){
    document.getElementById("msnv").disabled = false;
    document.getElementById("formNV").reset();
    document.getElementById("header-title").innerHTML = "Thêm nhân viên";
    document.getElementById("btnThemNV").style.display = "block";
    document.getElementById("btnCapNhat").style.display = "none";

});

document.getElementById("btnThemNV").addEventListener("click", function () {
    var _code = document.getElementById("msnv").value;
    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _password = document.getElementById("password").value;
    var _dateStart = document.getElementById("datepicker").value;
    var _position = document.getElementById("chucvu").value;

    var employee = new Employee(_code, _name, _email, _password, _dateStart, _position);
    listEmployees.push(employee);
    saveLocal();
    displayListEmployees(listEmployees);
});

function displayListEmployees(listEm) {
    var contentTbody = ``;
    for (var i = 0; i < listEm.length; i++) {
        var employee = listEm[i];
        contentTbody += `
        <tr>
            <td>${employee.codeEmployee}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.dateStart}</td>
            <td>${employee.position}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick = "handleUpdate('${employee.codeEmployee}')">Sửa</button>
                <button class="btn btn-danger" onclick = "handleDelete('${employee.codeEmployee}')">Xóa</button>
            </td>
        </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = contentTbody;
};

function handleDelete(codeEmployee) {
    var index = listEmployees.findIndex(function (employee) {
        return employee.codeEmployee === codeEmployee;
    });

    listEmployees.splice(index, 1);
    saveLocal();
    displayListEmployees(listEmployees);
};

function handleUpdate(codeEmployee){
    document.getElementById("header-title").innerHTML = "Sửa nhân viên";
    document.getElementById("btnThemNV").style.display = "none";
    document.getElementById("btnCapNhat").style.display = "block";
    document.getElementById("msnv").disabled = true;
    var index = listEmployees.findIndex(function (employee) {
        return employee.codeEmployee === codeEmployee;
    });

    document.getElementById("msnv").value = listEmployees[index].codeEmployee;
    document.getElementById("name").value = listEmployees[index].name;
    document.getElementById("email").value = listEmployees[index].email;
    document.getElementById("password").value = listEmployees[index].password;
    document.getElementById("datepicker").value = listEmployees[index].dateStart;
    document.getElementById("chucvu").value = listEmployees[index].position;
}

document.getElementById("btnCapNhat").addEventListener("click", function(){
    var _code = document.getElementById("msnv").value;
    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _password = document.getElementById("password").value;
    var _dateStart = document.getElementById("datepicker").value;
    var _position = document.getElementById("chucvu").value;

    var index = listEmployees.findIndex(function (employee) {
        return employee.codeEmployee === _code;
    });

    listEmployees[index] = new Employee(_code, _name, _email, _password, _dateStart, _position);
    saveLocal();
    displayListEmployees(listEmployees);
});

function saveLocal(){
    localStorage.setItem("listEmployees",JSON.stringify(listEmployees));
};

function getLocal(){
    if(localStorage.getItem("ListEmployees")){
        listEmployees = JSON.parse(localStorage.getItem("ListEmployees"));
    }
};

document.getElementById("searchName").addEventListener("keyup", function(event){
    // var keyWord = document.getElementById("searchName").value; //WAY1
    var keyWord = event.target.value;

    // var listEmployeesSearch = [];
    // for(var i = 0 ; i < listEmployees.length ; i++){
    //     var employee  = listEmployees[i];
    //     if(employee.name.includes(keyWord)){
    //         listEmployeesSearch.push(employee);
    //     }
    // }
    var listEmployeesSearch = listEmployees.filter(employee => employee.name.includes(keyWord));
  
    console.log(listEmployeesSearch);
    displayListEmployees(listEmployeesSearch);
});