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

// Tes kesehatan Mental Start
function toggleCheckmark(button, index, questionId) {
  const buttons = document.querySelectorAll(`#${questionId} .button`);
  const isActive = button.classList.contains('active');

  buttons.forEach((btn) => {
    btn.innerHTML = '';
    btn.classList.remove('active');
    btn.style.backgroundColor = 'white';
    btn.style.borderColor = getOriginalBorderColor(btn);
  });

  if (!isActive) {
    const svgIcon = `
      <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.89632 24.02L0 12.6342L2.47408 9.78778L9.89632 18.3271L25.8259 0L28.3 2.84645L9.89632 24.02Z" fill="${index === 3 ? '#000000' : '#FAFCFC'}"/>
      </svg>
    `;
    button.innerHTML = svgIcon;
    button.classList.add('active');

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
}

function getOriginalBorderColor(button) {
  if (button.classList.contains('border-[#195964]')) {
    return '#195964';
  } else if (button.classList.contains('border-[#9DBDC1]')) {
    return '#9DBDC1';
  } else if (button.classList.contains('border-[#38ACB2]')) {
    return '#38ACB2';
  }
  return '#000'; // default color
}

// Tes Kesehatan Mental End

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
    delay: 1500,
    disableOnInteraction: false,
  },
});

// track your mood start
function changeToImage(buttonId, imageUrl) {
  // Reset all buttons
  const buttons = document.querySelectorAll('.moodButton');
  buttons.forEach((button) => {
    // Remove any images and restore the original SVG
    while (button.firstChild) {
      button.removeChild(button.firstChild);
    }

    // Get the original SVG content from a data attribute and restore it
    const originalSVG = button.getAttribute('data-original-svg');
    if (originalSVG) {
      button.innerHTML = originalSVG;
    }
  });

  // Update the clicked button with the new image
  const button = document.getElementById(buttonId);
  const img = document.createElement('img');
  img.src = imageUrl;
  img.width = 80; // Set the image width
  img.height = 80; // Set the image height

  // Remove existing SVG inside the button
  while (button.firstChild) {
    button.removeChild(button.firstChild);
  }

  // Add the new image inside the button
  button.appendChild(img);
}

// Store the original SVG content in a data attribute
document.querySelectorAll('.moodButton').forEach((button) => {
  button.setAttribute('data-original-svg', button.innerHTML);
});

function showDiv(divId) {
  const allDivs = document.querySelectorAll('.moodContent');
  allDivs.forEach((div) => div.classList.add('hidden'));

  document.getElementById(divId).classList.remove('hidden');
}

function toggleButton(button) {
  if (button.style.backgroundColor === 'rgb(46, 108, 118)') {
    // #2E6C76
    button.style.backgroundColor = '#C4D7DA';
    button.style.color = '#195964';
  } else {
    button.style.backgroundColor = '#2E6C76';
    button.style.color = '#FAFCFC';
  }
}
// track your mood end

// Scroll smooth konsul start
document.querySelectorAll('.scroll-link').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    document.getElementById(targetID).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
// scroll smooth konsul end
