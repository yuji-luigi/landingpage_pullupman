// REFACTOR WHERE CALCULATE THE DISTANCES AND RESPONSIVE DISTANCE PART!!!

const message = document.getElementsByClassName("resize-alert")[0];
const pullmsg = document.getElementsByClassName("pullup-bar-msg")[0];
const legLeft = document.querySelector("[data-leg-l]");
const legRight = document.querySelector("[data-leg-r]");
const armLeft = document.querySelector("[data-arm-l]");
const armRight = document.querySelector("[data-arm-r]");
const positionerPerson1 = document.getElementsByClassName(
  "positioner-person-1"
)[0];

let person1CorrectPositon = window.innerWidth * 0.1 - 30;

const person1 = document.getElementsByClassName("person-1")[0];
const personPullup = document.getElementsByClassName("person-2")[0];

let { left, bottom, right } = personPullup.getBoundingClientRect();
let pullupTop = personPullup.getBoundingClientRect().top;

if (window.innerWidth > 780) {
  person1CorrectPositon += 70;
}

const land = document.getElementsByClassName("land")[0];
const landTopY = Math.floor(land.getBoundingClientRect().y);
const landBottomY = Math.floor(land.getBoundingClientRect().bottom);
const skyTop = document
  .getElementsByClassName("sky")[0]
  .getBoundingClientRect().top;

const skyBottom = Math.floor(
  document.getElementsByClassName("sky")[0].getBoundingClientRect().bottom
);
const dLandY = landTopY - landBottomY + skyBottom;
const landQuaterTop = (landTopY + 3 * landBottomY) / 3 + skyBottom;

let counter = 0;
let directionRight = true;
let legLeftRatio = counter + 310;
let legRightRatio = -(counter + 90);
let personSizeRatio;
document.addEventListener("mousemove", (e) => {
  const { x, y } = getMousePosition(e);
  showPullup(x, y);
  const person1Center = y + 100;
  const dPersonLand = e.clientY - landBottomY;
  if (person1Center > landTopY && y < landBottomY - 200) {
    person1.classList.add("in");
    removeOutClass();
    scalePerson(dPersonLand);
    setPersonOnCursor(x, y);
    walkingEffect();
  } else {
    addOutClass();
  }
});

document.addEventListener("touchmove", (e) => {
  let x, y;

  for (let i = 0; i < e.touches.length; i++) {
    x = e.touches[i].clientX;
    y = e.touches[i].clientY;
  }
  if (y > skyTop && y < landBottomY) {
    disableScroll();
    function disableScroll() {
      // Get the current page scroll position
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        // if any scroll is attempted, set this to the previous value
        (window.onscroll = function () {
          window.scrollTo(scrollLeft, scrollTop);
        });
    }
  }
  const person1Center = y + 100;
  const dPersonLand = e.clientY - landBottomY;

  if (person1Center > landTopY && y < landBottomY - 200) {
    person1.classList.add("in");

    removeOutClass();

    scalePerson(dPersonLand);

    setPersonOnCursor(x, y);

    walkingEffect();
  } else {
    addOutClass();
  }
});

const getMousePosition = (e) => {
  const x = e.pageX - person1CorrectPositon;
  const y = e.pageY - 100;
  return { x, y };
};

//  REFACTOR!!
const showPullup = (x, y) => {
  if (window.innerWidth > 780) {
    if (
      x > left - 200 &&
      x < right + 100 &&
      y > pullupTop - 100 &&
      y < bottom
    ) {
      person1.classList.add("hide");
      personPullup.classList.add("hovering");
      pullmsg.textContent = "WORKOUT!!";
    } else {
      personPullup.classList.remove("hovering");
      person1.classList.remove("hide");
      pullmsg.textContent = "Workout???";
    }
  } else {
    if (x > left && x < right && y > pullupTop && y < bottom) {
      person1.classList.add("hide");
      personPullup.classList.add("hovering");
      pullmsg.textContent = "WORKOUT!!";
    } else {
      personPullup.classList.remove("hovering");
      person1.classList.remove("hide");
      pullmsg.textContent = "Workout???";
    }
  }
};

const scalePerson = (y) => {
  personSizeRatio = (dLandY / y) * 2;
  person1.style.transform = `scale(${personSizeRatio})`;
};

const setPersonOnCursor = (x, y) => {
  positionerPerson1.setAttribute("style", "top:" + y + "px; left:" + x + "px");
};

const walkingEffect = () => {
  rotatorLeftSide(legLeft, false, legLeftRatio);
  rotatorRightSide(legRight, true, legRightRatio);
  rotatorLeftSide(armLeft, false, legLeftRatio);
  rotatorRightSide(armRight, true, legRightRatio);
};

const rotatorLeftSide = (element, rotation) => {
  let inclination = counter;

  switch (directionRight) {
    case true:
      counter += 1;
      break;
    case false:
      counter -= 1;
      break;
  }

  switch (counter) {
    case 46:
      directionRight = false;
      break;
    case 0:
      directionRight = true;
      break;
  }

  inclination = inclination;
  rotation += inclination;
  element.style.setProperty("--rotation", rotation);
};

const rotatorRightSide = (element, rotation) => {
  let inclination = -counter;
  inclination = inclination;
  rotation += inclination;
  element.style.setProperty("--rotation", rotation);
};
window.addEventListener("resize", () => {
  message.classList.add("active");
});

const addOutClass = () => {
  armLeft.classList.add("out");
  armRight.classList.add("out");
  legLeft.classList.add("out");
  legRight.classList.add("out");
};
const removeOutClass = () => {
  armLeft.classList.remove("out");
  armRight.classList.remove("out");
  legLeft.classList.remove("out");
  legRight.classList.remove("out");
};
