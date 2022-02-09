const addOne = (t) => {
  if (t.target !== t.currentTarget) {
    let clickedItem = t.target.id;
    let count = Number(
      document.getElementById(clickedItem).firstElementChild.innerHTML
    );
    count++;
    document.getElementById(clickedItem).firstElementChild.innerHTML = count;
    localStorage.setItem(clickedItem, count);
    if (clickedItem === "Goal Tasks" || clickedItem === "Coding Tasks") {
      global.totalCount += 2;
    } else {
      global.totalCount++;
    }
    document.getElementById("total").innerHTML = global.totalCount;
    localStorage.setItem("total", global.totalCount);
  }
};

export default addOne;
