let container = document.querySelector("#bubbles");
let number = 256;

function init() {
  createBubbles(number);
}

function createBubbles(number) {
  for (counter = 0; counter < number; counter++) {
    createBubble();
  }
}

function createBubble() {
  let bubble = document.createElement("div");
  container.appendChild(bubble);
}

init();
colorBubbles();

function colorBubbles() {
  for (counter = 0; counter < number; counter++) {
    colorBubble(0, 16, 1, "green");
    colorBubble(16, 32, 1, "red");
    colorBubble(32, 40, 1, "lightgreen");
    colorBubble(46, 50, 1, "lightblue");
    colorBubble(56, 128, 3, "pink");
    colorBubble(56, 128, 5, "orange");
    colorBubble(56, 128, 7, "black");
    colorBubble(64, 256, 16, "purple");
    colorBubble(8, 256, 16, "hotpink");
    colorBubble(0, 256, 17, "cyan");
    colorBubbleYellow(1, 256, 2, "yellow");
  }
}

function colorBubble(start, end, step, color) {
  let arr = container.children;
  console.log(arr);
  for (let i = start; i < end; i += step) {
    arr[i].style.backgroundColor = color;
  }
}

function colorBubbleYellow(start, end, step, color) {
  let arr = container.children;
  console.log(arr);
  for (let i = start; i < end; i *= step) {
    arr[i].style.backgroundColor = color;
  }
}
