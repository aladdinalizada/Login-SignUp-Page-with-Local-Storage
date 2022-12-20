let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (loginevent) {
  loginevent.preventDefault();
  //   Local Storageden datalar kecir
  let allUsersArr = JSON.parse(localStorage.getItem("usersData"));
  allUsersArr.some(
    (inputFromLocal) =>
      inputFromLocal.email === email.value &&
      inputFromLocal.password === password.value
  )
    ? (window.location.href = "../Home-Section/home.html")
    : alert("I don't find This user!");
});
