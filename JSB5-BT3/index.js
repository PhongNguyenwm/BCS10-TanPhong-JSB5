function tinhThue() {
  const hoTen = document.getElementById("hoTen").value;
  const tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
  const soNguoiPhuThuoc = parseInt(
    document.getElementById("soNguoiPhuThuoc").value
  );

  if (
    isNaN(tongThuNhap) ||
    tongThuNhap < 0 ||
    isNaN(soNguoiPhuThuoc) ||
    soNguoiPhuThuoc < 0
  ) {
    document.getElementById("ketQua").innerText =
      "Vui lòng nhập thông tin hợp lệ.";
    return;
  }

  // Tính thu nhập chịu thuế
  const thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;

  // Tính thuế theo bảng thuế
  let thue = 0;
  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thue =
      60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (thuNhapChiuThue - 210000000) * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  }

  // Hiển thị kết quả
  const formattedThue = new Intl.NumberFormat("en-US").format(thue);
  document.getElementById(
    "ketQua"
  ).innerText = `${hoTen}, Thuế Thu Nhập Cá Nhân Phải Trả: ${formattedThue} VNĐ`;
}
