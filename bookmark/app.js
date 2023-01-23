showData();

document.getElementById("submit").addEventListener("click", function () {
  let name = document.getElementById("name");
  let url = document.getElementById("url");

  if (name.value == "" || url.value == "") return alert("no blank entry");
  else localStorage.setItem(name.value, url.value); // Adding user input to local storage

  showData();
});

function showData() {
  document.querySelector(".bottom").innerHTML = ""; // Clear screen before showing data
  if (localStorage.length != 0) {
    for (i = 0; i < localStorage.length; i++) {
      //  Outer div
      let bookmark = document.createElement("div");
      bookmark.style.display = "flex";
      bookmark.style.flexDirection = "column";
      bookmark.style.alignItems = "center";

      //  Pinned part
      let still = document.createElement("div");
      still.style.display = "flex";
      //  Emoji
      let pin = document.createElement("span");
      pin.innerText = String.fromCodePoint(128204);
      pin.style.position = "relative";
      pin.style.left = "1em";
      pin.style.top = "0.07em";
      still.appendChild(pin);
      //  Cross
      let del = document.createElement("span");
      del.innerText = String.fromCodePoint(9938);
      del.setAttribute("onclick", `delItem("${localStorage.key(i)}")`);
      del.style.position = "relative";
      del.style.left = "1.5em";
      del.style.bottom = "0.5em";
      del.style.color = "#ff671f";
      del.style.cursor = "pointer";
      still.appendChild(del);
      bookmark.appendChild(still);

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
      entry.innerHTML = localStorage.key(i); // KEY
      if (url.value.includes("http"))
        entry.setAttribute("href", localStorage.getItem(localStorage.key(i)));
      else
        entry.setAttribute(
          "href",
          "https://" + localStorage.getItem(localStorage.key(i))
        ); // VALUE
      entry.setAttribute("target", "_blank");
      rotating.appendChild(entry);
      bookmark.appendChild(rotating);

      document.querySelector(".bottom").appendChild(bookmark);
    }
  }
}

function delItem(key) {
  localStorage.removeItem(key); // Delete selected bookmark
  document.querySelector(".bottom").innerHTML = "";
  showData();
}
