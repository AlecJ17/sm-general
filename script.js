let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};
document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // time in milliseconds (3 seconds)
    disableOnInteraction: false, // keep autoplay after user interaction
  },
});

// var swiper = new Swiper(".blogs-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },
// });

const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  fetch("https://formspree.io/f/mldlvygo", {
    method: "POST",
    body: new FormData(contactForm),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        formMessage.textContent = "✅ Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        contactForm.reset();

        // Fade out message after 5 seconds
        setTimeout(() => {
          formMessage.textContent = "";
        }, 5000);
      } else {
        formMessage.textContent =
          "⚠️ Oops! There was a problem submitting your form.";
        formMessage.style.color = "red";
      }
    })
    .catch((error) => {
      formMessage.textContent =
        "⚠️ Oops! There was a problem submitting your form.";
      formMessage.style.color = "red";
      console.error(error);
    });
});
