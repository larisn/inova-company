
const cards = document.querySelectorAll(".container-services-cards article");

// responsive height
const heights = {
  mobile: {
    initial: 240,
    final: 480,
  },
  tablet: {
    initial: 210,
    final: 330,
  },
  desktop: {
    initial: 210,
    final: 400,
  },
  desktop2: {
    initial: 240,
    final: 450,
  }
};


// setting the initial and final height of the card related to the window size
const getWindowSize = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    return "mobile";
  } else if (windowWidth < 1024 && windowWidth < 1269) {
    return "tablet";
  } else if (windowWidth > 1270 && windowWidth < 1433) {
    return "desktop2";
  } else {
    return "desktop";
  }
};

const toggleDisplay = (card, descriptionServices, button, finalHeight, initialHeight) => {
  const isHidden = descriptionServices.style.display === "none" || descriptionServices.style.display === "";
  descriptionServices.style.display = isHidden ? "block" : "none";
  card.style.height = isHidden ? `${finalHeight}px` : `${initialHeight}px`;
  button.textContent = isHidden ? "Ler menos" : "Ler mais";
};

cards.forEach((card) => {
  const descriptionServices = card.querySelector(".p-services");
  const button = card.querySelector(".btn-toggle");
  const windowSize = getWindowSize();
  const {initial, final} = heights[windowSize];

  card.style.height = `${initial}px`;

  button.addEventListener("click", () =>
    toggleDisplay(card, descriptionServices, button, final, initial)
  );
});
