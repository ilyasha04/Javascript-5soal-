const username = document.querySelector(".user");
const password = document.querySelector(".pass");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (username.value == "yusuf132" && password.value == "hebat") {
    alert("Login Sucess")
  } else if (username.value != "yusuf132" && password.value == "hebat") {
    alert("Username or password not corret")
  } else if (username.value == "yusuf132" && password.value != "hebat") {
    alert("Username or password not corret")
  } else {
    alert(`No have account ?`);
  }
})