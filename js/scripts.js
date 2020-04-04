// select the floating button in the UI.

const floatingBTN = document.querySelector(".footerBtn");

// attach an event listener
floatingBTN.addEventListener("click", e => {
  //select footer
  const footer = document.querySelector(".footer");
  //add active class to footer
  if (footer.classList.contains("active")) {
    //remove class
    footer.classList.remove("active");
    //return original text
    e.target.innerText = "Terms, Privacy, Currency";
  } else {
    //add active class to footer
    footer.classList.add("active");
    //add close text
    e.target.innerText = "X Close";
  }
});
