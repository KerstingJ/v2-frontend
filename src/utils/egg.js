const hexValue = () => Math.floor(Math.random() * 256).toString(16);

function randomColor() {
  const html = document.querySelector("html");
  let color = `#${hexValue()}${hexValue()}${hexValue()}`;
  if (color.length < 7) color += "0";

  html.style.setProperty("--main-color", color);
}

export default function code(winFunction = null) {
  winFunction = winFunction || randomColor;
  let active = false;
  let cache = [];
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

    cache.push(event.key);

    if (cache[cache.length - 1] === code[cache.length - 1]) {
      if (event.key === "Enter") {
        active = true;
        winFunction();
      }
    } else {
      cache = [];
      active = false;
    }
  };
}
