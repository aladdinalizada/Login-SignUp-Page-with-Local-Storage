let form = document.querySelector("form");
let allinputs = document.querySelectorAll(".form-control");
// Refresh olan Localdaki datalar silinmesin deye
let allUsersData =
  JSON.parse(localStorage.getItem("usersData")) == null
    ? []
    : JSON.parse(localStorage.getItem("usersData"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   Bos inputlar oldugu zaman alert cixacaq
  allinputs.forEach((emptyinput) => {
    emptyinput.value === "" && alert("Plase fill the empty pieces");
  });

  //   Local storagede  ucun bos obyekt yaradiriq
  let userObj = {
    email: "",
    password: "",
    username: "",
    number: "",
  };

  //   Inputlardan gelen valueler, yaratdigimiz bos obyekte yazilmasi
  userObj.email = allinputs[0].value;
  userObj.password = allinputs[1].value;
  userObj.username = allinputs[2].value;
  userObj.username = allinputs[3].value;

  // eyni userler qeydiyyat elemesin deye
  allUsersData.some((emptyinput) => emptyinput.email === allinputs[0].value) ||
  allUsersData.some((emptyinput) => emptyinput.username === allinputs[2]) ||
  allUsersData.some((emptyinput) => emptyinput.number === allinputs[3])
    ? alert("This user is already registered")
    : allUsersData.push(userObj);

  // Desteklemesi ucun Json Formatina ceviririk ve Local Storagede userData Adli sahe aciriq
  localStorage.setItem("usersData", JSON.stringify(allUsersData));
  ////////////////////////////////////////////////////////////////
  allinputs.forEach((input) => (input.value = ""));
});
