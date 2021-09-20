import * as bootstrap from "bootstrap";
let theParent = document.querySelector("#taskList");
global.totalCount = Number(document.getElementById("total").innerHTML);
theParent.addEventListener("click", addOne, false);

function localStartCount(cID, C) {
  if (localStorage.getItem(cID) === null) {
    return;
  } else {
    if (cID === "total") {
      document.getElementById(cID).innerHTML = C;
      totalCount = C;
    } else {
      document.getElementById(cID).firstElementChild.innerHTML = C;
    }
    localStorage.setItem(cID, C);
  }
}

function addOne(t) {
  if (t.target !== t.currentTarget) {
    let clickedItem = t.target.id;
    let count = Number(
      document.getElementById(clickedItem).firstElementChild.innerHTML
    );
    count++;
    document.getElementById(clickedItem).firstElementChild.innerHTML = count;
    localStorage.setItem(clickedItem, count);
    if (clickedItem === "Goal Tasks") {
      totalCount += 2;
    } else {
      totalCount++;
    }
    document.getElementById("total").innerHTML = totalCount;
    localStorage.setItem("total", totalCount);
  }
}

localStartCount("total", Number(localStorage.getItem("total")));
console.log(totalCount);
const allButtons = document.querySelectorAll("button");
allButtons.forEach((element) => {
  localStartCount(element.id, localStorage.getItem(element.id));
});
