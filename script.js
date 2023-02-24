const faqBoxes = document.querySelectorAll(".faq__box");

faqBoxes.forEach((faqBox) => {
  const btn = faqBox.querySelector(".question");

  btn.addEventListener("click", function () {
    faqBoxes.forEach((box) => {
      if (box !== faqBox) {
        box.classList.remove("open");
        box.querySelector(".question").setAttribute("aria-expanded", false);
      }
    });

    faqBox.classList.toggle("open");
    if (faqBox.classList.contains("open")) {
      btn.setAttribute("aria-expanded", true);
    } else {
      btn.setAttribute("aria-expanded", false);
    }
  });
});
