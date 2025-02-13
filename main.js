const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const btn = document.querySelector(".btn");
const inp = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  if (password.value === confirmPassword.value) {
    console.log("object");
    inp.forEach((inp) => (inp.value = ""));
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
});
