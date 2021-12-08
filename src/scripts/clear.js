const clear = () => {
  if (confirm("Clear out all points?")) {
    window.localStorage.clear();
    location.reload();
  } else {
    return;
  }
};

export default clear;
