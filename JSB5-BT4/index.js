function hienThiNhapKetNoi() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const inputSoKetNoi = document.getElementById("soKetNoi");

  if (loaiKhachHang === "doanhNghiep") {
    inputSoKetNoi.style.display = "block";
  } else {
    inputSoKetNoi.style.display = "none";
  }
}

function tinhHoaDon() {
  const maKhachHang = document.getElementById("maKhachHang").value;
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
  const soKenhCaoCap =
    parseInt(document.getElementById("soKenhCaoCap").value) || 0;

  let phiXuLyHoaDon = 0;
  let phiDichVuCoBan = 0;
  let phiThueKenhCaoCap = 0;

  if (loaiKhachHang === "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0);
    phiThueKenhCaoCap = 50 * soKenhCaoCap;
  }

  const tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

  document.getElementById(
    "ketQua"
  ).innerText = `Mã Khách Hàng: ${maKhachHang}\nTổng Hóa Đơn: ${tongHoaDon.toFixed(
    2
  )}$`;
}
