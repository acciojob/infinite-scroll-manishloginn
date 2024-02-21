//your code here!


document.addEventListener("DOMContentLoaded", function () {
  infiniteList.addEventListener("scroll", isAtEnd);
});
 
function isAtEnd() {
  const scrollTop = infiniteList.scrollTop;
  const scrollHeight = infiniteList.scrollHeight;
  const clientHeight = infiniteList.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight - 1) addListItems(2);
}
 
function addListItems(num) {
  for (let i = 1; i <= num; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = `Item ${listNumber++}`;
    infiniteList.appendChild(listItem);
  }
}
 
let listNumber = 1;
const infiniteList = document.getElementById("infi-list");
addListItems(10);