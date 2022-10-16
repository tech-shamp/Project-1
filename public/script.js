const icon = document.getElementById("navIcon")
const navLinks = document.querySelector(".nav__links")

icon.addEventListener("click", () => {
  if (!icon.classList.contains("rotate")) icon.classList.add("rotate")
  else icon.classList.remove("rotate")

  if (icon.classList.contains("rotate")) navLinks.classList.add("responsive")
  else navLinks.classList.remove("responsive")
})

const body = document.getElementById("body")
const DarkBtn = document.getElementById("DARK_BTN")
const DarkBtn_icon = document.querySelector("#DARK_BTN svg")

DarkBtn.addEventListener("click", () => {
  if (!DarkBtn_icon.classList.contains("rotate")) {
    DarkBtn_icon.classList.add("rotate")
  } else {
    DarkBtn_icon.classList.remove("rotate")
  }

  if (!body.classList.contains("dark__mode")) {
    body.classList.add("dark__mode")
  } else {
    body.classList.remove("dark__mode")
  }
})

/* Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree */
// https://formspree.io/js/formbutton-v1.min.js"
/* paste this line in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    ;(formbutton.q = formbutton.q || []).push(arguments)
  }
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/mrgjvwjk",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "gray",
    },
    button: {
      backgroundColor: "gray",
    },
  },
})
