let getData = (idValue) => document.querySelector(idValue).value;

export let takeInfoFromForm = () => {
  let ma = getData("#foodID");
  let ten = getData("#tenMon");
  let loai = getData("#loai");
  let gia = getData("#giaMon");
  let khuyenMai = getData("#khuyenMai");
  let tinhTrang = getData("#tinhTrang");
  let hinhAnh = getData("#hinhMon");
  let moTa = getData("#moTa");

  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
    tinhGKM: function () {
      return this.gia * (1 - this.khuyenMai);
    },
  };
};
