const cookieBox = document.querySelector(".wrapper")
buttons = cookieBox.querySelectorAll(".button");

const executeCodes = () => {
  cookieBox.classList.add("show");
}

// executeCodes function will be called on webpage load;
window.addEventListener("load", executeCodes)