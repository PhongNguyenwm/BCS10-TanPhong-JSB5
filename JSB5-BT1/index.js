function tinhDiem() {
  // Lấy giá trị từ các ô nhập liệu
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemToan = parseFloat(document.getElementById("diemToan").value);
  const diemLy = parseFloat(document.getElementById("diemLy").value);
  const diemHoa = parseFloat(document.getElementById("diemHoa").value);
  const khuVuc = document.getElementById("khuVuc").value.trim().toLowerCase();
  const doiTuong = parseInt(document.getElementById("doiTuong").value);

  // Kiểm tra điều kiện và tính tổng điểm
  let tinhDiem = true;

  if (diemToan === 0 || diemLy === 0 || diemHoa === 0) {
    document.getElementById("ketQua").innerText = "Rớt: Có môn thi có điểm 0.";
    tinhDiem = false;
  }

  if (
    tinhDiem &&
    !isNaN(diemChuan) &&
    !isNaN(diemToan) &&
    !isNaN(diemLy) &&
    !isNaN(diemHoa) &&
    !isNaN(doiTuong) &&
    (khuVuc === "x" || khuVuc === "a" || khuVuc === "b" || khuVuc === "c")
  ) {
    // Tính tổng điểm 3 môn
    const tongDiemMon = diemToan + diemLy + diemHoa;

    // Tính điểm ưu tiên
    let diemCongKhuVuc = 0;
    if (khuVuc === "a") diemCongKhuVuc = 2;
    else if (khuVuc === "b") diemCongKhuVuc = 1;
    else if (khuVuc === "c") diemCongKhuVuc = 0.5;

    let diemCongDoiTuong = 0;
    if (doiTuong === 1) diemCongDoiTuong = 2.5;
    else if (doiTuong === 2) diemCongDoiTuong = 1.5;
    else if (doiTuong === 3) diemCongDoiTuong = 1;

    // Tính tổng điểm
    const tongDiem = tongDiemMon + diemCongKhuVuc + diemCongDoiTuong;

    // Kiểm tra xem thí sinh đậu hay rớt
    const ketQua = tongDiem >= diemChuan ? "Đậu" : "Rớt";

    // Hiển thị kết quả
    const thongBao = `Tổng điểm: ${tongDiem}, Kết quả: ${ketQua}`;
    document.getElementById("ketQua").innerText = thongBao;
  } else if (tinhDiem) {
    document.getElementById("ketQua").innerText =
      "Vui lòng nhập đúng thông tin.";
  }
}
