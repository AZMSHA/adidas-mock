function hide(menuID) {
  menu = document.getElementById(menuID);
  if (!menu.classList.contains("hide")) {
    menu.classList.add("hide");
  } else {
  }
}

function show(menuID) {
  menu = document.getElementById(menuID);
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  } else {
  }
}

const statesByCountry = {
  USA: ["Washington", "California", "Florida", "New York", "Texas"],
  Canada: ["Alberta", "British Columbia", "Ontario", "Quebec"],
  Australia: ["New South Wales", "Queensland", "Victoria", "Western Australia"],
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");

function updateStates(country) {
  stateSelect.innerHTML = '<option value="">Then Select a state</option>'; // Clear previous options
  if (statesByCountry[country]) {
    statesByCountry[country].forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  } else {
    stateSelect.innerHTML = "";
  }
}

countrySelect.addEventListener("change", function () {
  const selectedCountry = countrySelect.value;
  updateStates(selectedCountry);
});

updateStates("Select a country first");

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(document).ready(function () {
  $(".owl-carousel.hero").owlCarousel({
    dots: true,
    autoplay: true,
    dotsEach: 1,
    nav: true,
    navSpeed: 700,
    dragEndSpeed: 700,
    dotsSpeed: 700,
    navText: ["", ""],
    autoplayHoverPause: true,
    margin: 700,
    items: 1,
    responsive: {
      0: {
        nav: false,
      },
      1101: {
        nav: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel.featured").owlCarousel({
    dots: true,
    autoplay: true,
    nav: true,
    navSpeed: 350,
    dragEndSpeed: 350,
    dotsSpeed: 350,
    center: false,
    loop: true,
    margin: 28,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
        dotsEach: 1,
        nav: false,
      },
      768: {
        center: true,
        items: 3,
        dotsEach: 1,
        nav: false,
      },
      1101: {
        items: 4,
        dotsEach: 1,
        nav: true,
      },
      2000: {
        items: 6,
        dotsEach: 1,
        nav: true,
      },
    },
  });
});
