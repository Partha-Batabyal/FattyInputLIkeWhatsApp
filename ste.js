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
  } else if (e.key === "Backspace" || e.key === "Delete") {
    let text = input.value.split("\n");
    console.log(text);

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
  // ***********************************************************
  let prevHeight = null;
  let newHeight = input.scrollHeight;
  // checkAndUpdateHeight(newHeight);

  // function checkAndUpdateHeight(newHeight) {
  //   if (newHeight !== prevHeight && newHeight >= 33 && newHeight <= 200) {
  //     prevHeight = newHeight;
  //     if (count < 5) {
  //       count++;
  //       updateHeight(count);
  //     }
  //   }
  // }
  // ***********************************************************

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
  // let content = input.value;
  let caretPos = input.selectionStart;
  let inputWidth = input.clientWidth;
  console.log(caretPos, inputWidth);
  if (
    caretPos == 32 ||
    caretPos == 64 ||
    caretPos == 96 ||
    caretPos == 128 ||
    caretPos == 160
  ) {
    count++;
    updateHeight(count);
  }
});

input.addEventListener("paste", (pasteEvent) => {
  let text = pasteEvent.clipboardData.getData("text/plain");
  if (text) {
    count = 5;
    updateHeight(count);
  }
});

function updateHeight(count) {
  let heights = ["88%", "86%", "84%", "82%", "80%"];
  let twosHeight = 12 + count * 2;
  one.style.height = heights[count];
  two.style.height = `${twosHeight}%`;
}
