const container = document.querySelector(".container");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", function (e) {
    e.preventDefault();
    container.classList.add("active");
});

showLogin.addEventListener("click", function (e) {
    e.preventDefault();
    container.classList.remove("active");
});