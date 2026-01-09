const cards = document.querySelectorAll(".reveal");

function revealCards() {
  const windowHeight = window.innerHeight;

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < windowHeight - 80) {
      setTimeout(() => {
        card.classList.add("active");
      }, index * 120); // efeito cascata
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards();
