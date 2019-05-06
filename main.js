let elem = document.querySelector(".inner");
let cross = document.querySelector(".item");
let moveDuration = 3;
let rotateDuraton = 0.5;

function moveElement (keyframe, side, elemClass, moveDuration) {
  elem.style.animationName = keyframe;
  elem.style.animationDuration = moveDuration + "s";
  elem.style.left = side.left;
  elem.style.top = side.top;
  cross.classList.toggle(elemClass);
}

function rotateElement (keyframe, transformOrigin, side, elemClass, rotateDuraton) {
  elem.style.animationName = keyframe;
  elem.style.animationDuration = rotateDuraton + "s";
  elem.style.left = side.left;
  elem.style.top = side.top;
  cross.classList.toggle(elemClass);
  elem.style.transformOrigin = transformOrigin;
}

moveElement ("moveCircle", {left: "-10px", top: "-20px"}, "cross", moveDuration);
setTimeout(rotateElement.bind (this, "rotate2", "center bottom", {left: "190px", top: "-20px"}, "cross", rotateDuraton), 3000);
setTimeout(moveElement.bind(this, "moveCircle2", {left: "200px", top: "-10px"}, "cross", moveDuration), 3500);
setTimeout(rotateElement.bind (this, "rotate2", "left center", {left: "200px", top: "190px"}, "cross", rotateDuraton), 6500);
setTimeout(moveElement.bind(this, "moveCircle3", {left: "-10px", top: "200px"}, "cross", moveDuration), 7000);
setTimeout(rotateElement.bind (this, "rotate2", "center top", {left: "-10px", top: "200px"}, "cross", rotateDuraton), 10000);
setTimeout(moveElement.bind(this, "moveCircle4", {left: "-20px", top: "190px"}, "cross", moveDuration), 10500);
setTimeout(rotateElement.bind (this, "rotate2", "right center", {left: "-20px", top: "-10px"}, "cross", rotateDuraton), 13500);
