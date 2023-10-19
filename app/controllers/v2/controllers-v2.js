export let renderFoodList = (foodArr) => {
  var contentHTML = "";

  foodArr.forEach((food) => {
    let { ma, ten, gia, khuyenMai, loai, tinhTrang } = food;
    var trString = `<tr>
                    <td>${ma}</td>
                    <td>${ten}</td>
                    <td>${loai}</td>
                    <td>${gia}</td>
                    <td>${khuyenMai}</td>
                    <td>0</td>
                    <td>${tinhTrang}</td>
                    <td>
                      <button class="btn btn-danger" onclick="xoa(${ma})">Xóa</button>
                      <button class="btn btn-success" onclick="sua(${ma})">Sửa</button>
                    </td>
                  </tr>`;

    contentHTML += trString;
  });

  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

const monChay = "loai1";
const monMan = "loai2";
const chay = true;

export let showDataForm = (food) => {
  document.getElementById("foodID").value = food.ma;
  document.getElementById("tenMon").value = food.ten;
  document.getElementById("giaMon").value = food.gia;
  document.getElementById("khuyenMai").value = food.khuyenMai;
  document.getElementById("loai").value = food.loai == chay ? monChay : monMan;
  document.getElementById("tinhTrang").value = food.tinhTrang;
  document.getElementById("hinhMon").value = food.hinhAnh;
  document.getElementById("moTa").value = food.moTa;
};
