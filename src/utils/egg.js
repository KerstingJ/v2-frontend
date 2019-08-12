function randomColor() {
  const html = document.querySelector("html");
  html.style.setProperty(
    "--main-color",
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
}

export default function code(winFunction = null) {
  winFunction = winFunction || randomColor;
  let active = false;
  let queue = [];
  const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter"
  ];
  return event => {
    if (active && event.key === "Enter") {
      winFunction();
      return;
    }

    queue.push(event.key);

    if (queue[queue.length - 1] === code[queue.length - 1]) {
      if (event.key === "Enter") {
        active = true;
        winFunction();
      }
    } else {
      queue = [];
      active = false;
    }
  };
}
