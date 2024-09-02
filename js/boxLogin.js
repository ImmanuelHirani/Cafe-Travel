const LoginRegisterBox = document.getElementById("LoginRegisterBox"),
  loginRegisterTrigger = document.getElementById("loginRegisterTrigger"),
  LoginBox = document.getElementById("LoginBox"),
  RegisterBox = document.getElementById("RegisterBox"),
  RegisterBoxOpen = document.getElementById("RegisterBoxOpen"),
  LoginBoxOpen = document.getElementById("LoginBoxOpen"),
  closeloginBox = document.querySelectorAll(".closeloginBox"); // Added missing class selector

loginRegisterTrigger.addEventListener("click", () => {
  LoginRegisterBox.classList.add("box-registLogin-active");
});

RegisterBoxOpen.addEventListener("click", () => {
  RegisterBox.classList.add("RegisterBox-Active");
  LoginBox.classList.remove("LoginBox-Active");
});

LoginBoxOpen.addEventListener("click", () => {
  LoginBox.classList.add("LoginBox-Active");
  RegisterBox.classList.remove("RegisterBox-Active");
});

closeloginBox.forEach((element) => {
  element.addEventListener("click", () => {
    // Added event listener for each close button
    LoginRegisterBox.classList.remove("box-registLogin-active");
    RegisterBox.classList.remove("RegisterBox-Active");
    LoginBox.classList.remove("LoginBox-Active");
  });
});
