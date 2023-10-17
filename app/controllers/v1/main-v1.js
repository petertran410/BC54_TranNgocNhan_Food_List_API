import { takeInfoFromForm } from "./controllers-v1.js";

let themMon = () => {
  const data = takeInfoFromForm();

  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa } = data;

  document.querySelector("#spMa").innerText = ma;
  document.querySelector("#spTenMon").innerText = ten;
  document.querySelector("#spLoaiMon").innerText = loai == "loai1" ? "Chay" : "Mặn";
  document.querySelector("#spGia").innerText = gia;
  document.querySelector("#spKM").innerText = khuyenMai + "%";
  document.querySelector("#spTT").innerText = tinhTrang == "0" ? "Hết" : "Còn";
  document.querySelector("#spMoTa").innerText = moTa;
  document.querySelector("#imgMonAn").src = hinhAnh;
  document.querySelector("#spGiaKM").innerText = data.tinhGKM();
};

window.themMon = themMon;
