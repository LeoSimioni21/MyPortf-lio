const url = "https://github.com/LeoSimioni21";
const btn = document.querySelector("#btn");

function openInNewTab() {
  //const win = window.open(url, "_blank")
  //win.focus()
  alert("pau");
}
btn.addEventListener("click", () => {
  openInNewTab(url);
});
