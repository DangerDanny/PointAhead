import * as bootstrap from "bootstrap";
import localStartCount from "./scripts/localStartCount";
import addOne from "./scripts/addOne";

let theParent = document.querySelector("#taskList");
global.totalCount = Number(document.getElementById("total").innerHTML);
theParent.addEventListener("click", addOne, false);

localStartCount("total", Number(localStorage.getItem("total")));
const allButtons = document.querySelectorAll("button");
allButtons.forEach((element) => {
  localStartCount(element.id, localStorage.getItem(element.id));
});
