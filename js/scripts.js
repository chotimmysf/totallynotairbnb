// select the floating button in the UI.

const floatingBTN = document.querySelector(".footerBtn");

// attach an event listener
floatingBTN.addEventListener("click", e => {
  //select footer
  const footer = document.querySelector(".footer");

  //check if class exists (active) then remove
  if ((footer, classList.contains("active"))) {
    //remove class
    footer.classList.remove("active");

    //return original text
    e.target.innerText = "Terms, Privacy, Currency";
  } else {
    //add active class into footer
    footer.classList.add("active");

    //add the close text
    e.target.innerText = "X Close";
  }
});
