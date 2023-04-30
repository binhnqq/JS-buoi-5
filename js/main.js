/**
 * Function submit form: bai tap 1
 */
function submitFormBaiTap1() {
    const diemChuan = parseFloat(document.getElementById("diem-chuan").value || 0);
    const diemMonThu1 = parseFloat(document.getElementById("diem-mon-1").value || 0);
    const diemMonThu2 = parseFloat(document.getElementById("diem-mon-2").value || 0);
    const diemMonThu3 = parseFloat(document.getElementById("diem-mon-3").value || 0);
    const diemDoiTuong = parseFloat(getValueRadio("doi-tuong"));
    const diemKhuVuc = parseFloat(getValueRadio("khu-vuc"));
    const ketQua = document.getElementById("ket-qua");
    if (diemMonThu1 < 0 || diemMonThu2 < 0 || diemMonThu3 < 0 || diemChuan < 0) {
        ketQua.innerHTML = "Dữ liệu nhập vào không hợp lệ!"
        return;
    }

    let diemTongKet = 0;
    diemTongKet = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemDoiTuong + diemKhuVuc;
    ketQua.classList.remove('d-none');
    if (diemTongKet >= diemChuan && diemMonThu1 > 0 && diemMonThu2 > 0 && diemMonThu3 > 0) {
        ketQua.innerHTML = "BẠN ĐÃ ĐẬU! TỔNG ĐIỂM: " + diemTongKet;
    } else {
        ketQua.innerHTML = "BẠN ĐÃ RỚT! TỔNG ĐIỂM: " + diemTongKet;
    }
}

/**
 * Function submit from: bai tap 2
 */
function submitFormBaiTap2() {
    const hoTen = document.getElementById("ho-ten").value || '';
    const soDien = parseFloat(document.getElementById("so-dien").value || 0);
    const ketQua = document.getElementById("ket-qua-dien");
    let tongTienDien = 0;
    ketQua.classList.remove('d-none');
    if (soDien < 0) {
        ketQua.innerHTML = "Dữ liệu nhập vào không hợp lệ!"
        return;
    }
    ketQua.innerHTML = "Họ tên: " + hoTen;
    if (soDien <= 50) {
        tongTienDien = soDien * 500;
        ketQua.innerHTML += "; Tiền điện: " + tongTienDien
        return;
    }

    if (soDien <= 100) {
        tongTienDien = 50 * 500 + (soDien - 50) * 650;
        ketQua.innerHTML += "; Tiền điện: " + tongTienDien
        return;
    }

    if (soDien <= 200) {
        tongTienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
        ketQua.innerHTML += "; Tiền điện: " + tongTienDien
        return;
    }

    if (soDien <= 350) {
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
        ketQua.innerHTML += "; Tiền điện: " + tongTienDien
        return;
    }

    tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
    ketQua.innerHTML += "; Tiền điện: " + tongTienDien
    return;
}

/**
 * Function submit form: bai tap 3
 */
function submitFormBaiTap3() {
    const hoTen = document.getElementById("ho-ten-bt-3").value || '';
    const tongThuNhap = parseFloat(document.getElementById("tong-thu-nhap").value || 0);
    const soNguoiPhuThuoc = parseFloat(document.getElementById("so-nguoi-phu-thuoc").value || 0);
    const ketQua = document.getElementById("ket-qua-thue");
    let tongTienThue = 0;
    ketQua.classList.remove('d-none');
    ketQua.innerHTML = "Họ tên: " + hoTen;
    tongTienThue = tongThuNhap - 4000000 - (soNguoiPhuThuoc * 1600000);

    if (tongTienThue < 0) {
        ketQua.innerHTML = "Dữ liệu nhập vào không hợp lệ!"
        return;
    }

    if (tongTienThue <= 60000000) {
        tongTienThue = tongTienThue * 5 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    if (tongTienThue <= 120000000) {
        tongTienThue = tongTienThue * 10 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    if (tongTienThue <= 210000000) {
        tongTienThue = tongTienThue * 15 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    if (tongTienThue <= 384000000) {
        tongTienThue = tongTienThue * 20 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    if (tongTienThue <= 624000000) {
        tongTienThue = tongTienThue * 25 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    if (tongTienThue <= 960000000) {
        tongTienThue = tongTienThue * 30 / 100;
        ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
        return;
    }

    tongTienThue = tongTienThue * 35 / 100;
    ketQua.innerHTML += "; Tiền thuế thu nhập cá nhân: " + tongTienThue;
    return;
}

/**
 * Function submit form: bai tap 4
 */
function submitFormBaiTap4() {
    const maKhachHang = document.getElementById("ma-khach-hang").value || '';
    const soKenh = parseFloat(document.getElementById("so-kenh-cung-cap").value || 0);
    const soKetNoi = parseFloat(document.getElementById("so-ket-noi").value || 0);
    const loaiKhachHang = parseInt(getValueRadio("loai-khach-hang"));
    const ketQua = document.getElementById("ket-qua-cap");
    let tongTienCap = 0;
    ketQua.classList.remove('d-none');
    if (soKenh < 0 || soKetNoi < 0) {
        ketQua.innerHTML = "Dữ liệu nhập vào không hợp lệ!"
        return;
    }

    ketQua.innerHTML = "Mã khách hàng: " + maKhachHang;
    if (loaiKhachHang === 1) {
        tongTienCap = 25 + 7.5 * soKenh;
        ketQua.innerHTML += "; Tiền cáp: $" + tongTienCap;
        return;
    }

    if (soKetNoi <= 10) {
        tongTienCap = 15 + 75 + 50 * soKenh;
        ketQua.innerHTML += "; Tiền cáp: $" + tongTienCap;
        return;
    }

    tongTienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
    ketQua.innerHTML += "; Tiền cáp: $" + tongTienCap;
    return;
}

/**
 * Hide/Show container so-ket-noi when change radio
 */
function changeRadio() {
    const loaiKhachHang = parseInt(getValueRadio("loai-khach-hang"));
    const container = document.getElementById("so-ket-noi-container");
    if (loaiKhachHang === 2) {
        container.classList.remove('d-none');
    } else {
        container.classList.add('d-none');
    }
}

/**
 * Get value from radio
 * @param string nameRadio 
 */
function getValueRadio(nameRadio) {
    const radios = document.getElementsByName(nameRadio);
    let selected;
    for (const radio of radios) {
        if (radio.checked) {
            selected = radio.value;
            break;
        }
    }
    return selected;
}