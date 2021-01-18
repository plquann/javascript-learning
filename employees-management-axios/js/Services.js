export class Services {
    getListEmployees() {
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
            method: 'GET',
        });

    }

    getInfoEmployee(code) {
        return axios({
            url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${code}`,
            method: 'GET',
        });
    }

    updateInfoEmployee(value) {
        return axios({
            url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${value.maNhanVien}`,
            method: 'PUT',
            data: value,
        })
    }

    addEmployee(value) {
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
            method: 'POST',
            data: value,
        });
    }

    deleteEmployee(code) {
        return axios({
            url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${code}`,
            method: 'DELETE',
        });
    }
};