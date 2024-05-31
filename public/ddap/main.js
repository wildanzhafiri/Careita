// navbar
function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownButton = document.getElementById('dropdownButton');
  dropdownMenu.classList.toggle('hidden');
  dropdownButton.classList.toggle('bg-green-50');
  dropdownButton.classList.toggle('rounded-t-md');
  dropdownButton.classList.toggle('rounded-none');

  // Toggle SVG icon
  const arrowIcon = document.getElementById('arrowIcon');
  if (arrowIcon.getAttribute('d') === 'M5 0L10 8L0 8L5 0Z') {
    arrowIcon.setAttribute('d', 'M5 8L0 0L10 0L5 8Z');
  } else {
    arrowIcon.setAttribute('d', 'M5 0L10 8L0 8L5 0Z');
  }
}
// Close the dropdown if clicked outside
window.onclick = function (event) {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownButton = document.getElementById('dropdownButton');

  if (!event.target.matches('.relative button') && !event.target.matches('.absolute a')) {
    if (!dropdownMenu.classList.contains('hidden')) {
      dropdownMenu.classList.add('hidden');
    }
    // Mengembalikan warna latar belakang dan border-radius button "fitur" ke semula
    dropdownButton.classList.remove('bg-green-50');
    dropdownButton.classList.remove('rounded-t-md');
    dropdownButton.classList.remove('rounded-none');
  }
};

// Our Features
let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;
let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

let currentIndex = 0;

function prev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

function next() {
  if (currentIndex < cards.length - elementsToShow) {
    currentIndex++;
    updateSliderPosition();
  }
}

function updateSliderPosition() {
  slider.style.marginLeft = -currentIndex * cardWidth + 'px';
}

let selectedAnswers = {
  question1: false,
  question2: false,
  question3: false,
};

function toggleCheckmark(button, index, questionId) {
  const buttons = document.querySelectorAll(`#${questionId} button`);

  const svgIcon = `
    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.89632 24.02L0 12.6342L2.47408 9.78778L9.89632 18.3271L25.8259 0L28.3 2.84645L9.89632 24.02Z" fill="${index === 3 ? '#000000' : '#FAFCFC'}"/>
    </svg>
  `;

  button.innerHTML = svgIcon;

  if (index < 3) {
    button.style.backgroundColor = '#195964';
    button.style.borderColor = '#195964';
  } else if (index > 3) {
    button.style.backgroundColor = '#38ACB2';
    button.style.borderColor = '#38ACB2';
  } else {
    button.style.backgroundColor = '#9DBDC1';
    button.style.borderColor = '#9DBDC1';
  }
}

function selectEmoji(element) {
  // Remove active class from all emojis
  document.querySelectorAll('.emoji').forEach((emoji) => emoji.classList.remove('opacity-100'));
  document.querySelectorAll('.emoji').forEach((emoji) => emoji.classList.add('opacity-50'));
  // Add active class to the clicked emoji
  element.classList.add('opacity-100');
  element.classList.remove('opacity-50');
}

function toggleButton(element) {
  // Toggle the active state of the button
  element.classList.toggle('bg-gray-200');
  element.classList.toggle('bg-gray-800');
  element.classList.toggle('text-black');
  element.classList.toggle('text-white');
}

//artikel
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
