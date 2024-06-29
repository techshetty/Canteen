function loadHide(del) {
  setTimeout(() => {
  document.querySelector("#preloader").style.display="none";
  }, del);
}

export default loadHide;