function tinhTienDien() {
  const hoTen = document.getElementById("hoTen").value;
  const soDien = parseFloat(document.getElementById("soDien").value);

  if (isNaN(soDien) || soDien < 0) {
    document.getElementById("ketQua").innerText =
      "Vui lòng nhập số điện hợp lệ.";
    return;
  }

  let tongTien = 0;

  if (soDien <= 50) {
    tongTien = soDien * 500;
  } else if (soDien <= 100) {
    tongTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }

  const formattedTongTien = new Intl.NumberFormat("en-US").format(tongTien);
  document.getElementById(
    "ketQua"
  ).innerText = `${hoTen},Tổng tiền điện phải trả là: ${formattedTongTien} VNĐ`;
}
