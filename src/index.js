import * as bootstrap from "bootstrap";
import localStartCount from "./scripts/localStartCount";
import addOne from "./scripts/addOne";
import clear from "./scripts/clear";
let theParent = document.querySelector("#taskList");
let theClear = document.querySelector("#clear");
global.totalCount = Number(document.getElementById("total").innerHTML);
theParent.addEventListener("click", addOne, false);
theClear.addEventListener("click", clear, false);

localStartCount("total", Number(localStorage.getItem("total")));
const allButtons = document.querySelectorAll("button");
allButtons.forEach((element) => {
  localStartCount(element.id, localStorage.getItem(element.id));
});
