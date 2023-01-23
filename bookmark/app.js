//  working with local storage still remains

document.getElementById("submit").addEventListener("click", createBookmark);

function createBookmark() {
  let name = document.getElementById("name");
  let url = document.getElementById("url");

  if (name.value == "" || url.value == "") return alert("no blank entry");

  //  Outer div
  let bookmark = document.createElement("div");
  bookmark.style.display = "flex";
  bookmark.style.flexDirection = "column";
  bookmark.style.alignItems = "center";
  //  Pin emoji
  let pin = document.createElement("span");
  pin.innerText = String.fromCodePoint(128204);
  pin.style.position = "relative";
  pin.style.left = "0.5em";
  pin.style.top = "1px";
  bookmark.appendChild(pin);
  //  Rotating part
  let rotating = document.createElement("div");
  rotating.setAttribute("id", "rotating");
  rotating.style.display = "flex";
  rotating.style.flexDirection = "column";
  rotating.style.alignItems = "center";
  // Thread
  let hanger = document.createElement("div");
  hanger.style.border = "1px solid #002604";
  hanger.style.height = "1.4em";
  rotating.appendChild(hanger);
  //  link
  let entry = document.createElement("a");
  entry.innerHTML = name.value;
  if (url.value.includes("http")) entry.setAttribute("href", url.value);
  else entry.setAttribute("href", "https://" + url.value);
  entry.setAttribute("target", "_blank");
  rotating.appendChild(entry);
  bookmark.appendChild(rotating);

  document.querySelector(".bottom").appendChild(bookmark);
}
