const localStartCount = (cID, C) => {
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
};

export default localStartCount;
