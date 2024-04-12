let take = (selector) => {
  return document.querySelector(selector);
};

let one = take(".I");
let two = take(".II");
let input = take("textarea");

let count = 0;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (count <= 5) {
      count++;

      updateHeight(count);
    }
  } else if (e.key === "Backspace") {
    let text = input.value.split("\n");
    // console.log(text);
    if (
      (text[0] === "" ||
        text[1] === "" ||
        text[2] === "" ||
        text[3] === "" ||
        text[4] === "") &&
      count > 0
    ) {
      count--;
      updateHeight(count);
    }
  }
  if (e.key.toLowerCase() === "v" && e.ctrlKey) {
    count = 5;
    updateHeight(count);
  }
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    count = 0;
    updateHeight(count);
  }
});
function updateHeight(count) {
  let heights = ["88%", "86%", "84%", "82%", "80%"];
  let twosHeight = 12 + count * 2;
  one.style.height = heights[count];
  two.style.height = `${twosHeight}%`;
}
