let uname = document.getElementById("uname");
let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let c_pswd = document.getElementById("c_pswd");
const arr = [uname, email, pswd, c_pswd];
let msg = document.createElement("h4");
msg.style.color = "red";
let flag = false;

document.getElementById("submit").addEventListener("click", function () {
  for (let i of arr) {
    if (i.value == "") {
      // Check if any entry is left blank
      i.style.border = "2px solid red";
      msg.innerText = "required!";
      i.parentElement.appendChild(msg);
      return 1;
    } else i.style.border = "none";
  }
  if (email.value.includes("@") == false) {
    // Check if email is missing '@' sign
    email.style.border = "2px solid red";
    msg.innerText = "Email must contain '@'";
    email.parentElement.appendChild(msg);
    return 1;
  } else email.style.border = "none";
  for (let i = 0; i < 10; i++) {
    // Check if password contains digits
    if (pswd.value.includes(i)) flag = true;
  }
  if (!flag) {
    pswd.style.border = "2px solid red";
    msg.innerText = "Password must contain numbers!";
    pswd.parentElement.appendChild(msg);
    return 1;
  } else pswd.style.border = "none";
  if (c_pswd.value != pswd.value) {
    // Check if password matches
    c_pswd.style.border = "2px solid red";
    msg.innerText = "Password doesn't match, please check!";
    c_pswd.parentElement.appendChild(msg);
    return 1;
  } else c_pswd.style.border = "none";
  for (let i of arr) i.value = "";
  msg.innerText = "Congrats! Your form is submitted."; // Final message
  msg.style.color = "green";
  msg.style.fontSize = "1.4em";
  document.querySelector("form").appendChild(msg);
  setTimeout(disappear, 2000); // Disappears after 2 seconds
});

function disappear() {
  msg.style.display = "none";
}
