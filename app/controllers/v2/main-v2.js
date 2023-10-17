import https from "../../service/service.js";
import { takeInfoFromForm } from "../v1/controllers-v1.js";
import { renderFoodList, showDataForm } from "./controllers-v2.js";

let fetchFoodList = () => {
  https
    .get(`/food`)
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();

function xoa(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fetchFoodList();
    })
    .catch((err) => {
      console.log("Xóa thất bại");
    });
}

window.xoa = xoa;

window.addFood = () => {
  let food = takeInfoFromForm();

  https
    .post(`/food`, food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      Swal.fire('Thêm món thành công')
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.sua = (id) => {
  $("#exampleModal").modal("show")

  https
    .get(`/food/${id}`)
    .then((res) => {
      showDataForm(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

window.capNhat = () => {
  let food = takeInfoFromForm()
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      console.log(res)
      $("#exampleModal").modal("hide")
      fetchFoodList()
    })
    .catch((err) => {
      console.log(err)
    })
}
