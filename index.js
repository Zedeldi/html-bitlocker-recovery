document.getElementById("key-id").innerText = crypto.randomUUID().toUpperCase();

[("mousedown", "contextmenu")].forEach((event) =>
  document.body.addEventListener(event, (event) => event.preventDefault()),
);

document.body.addEventListener("keydown", async (event) => {
  event.preventDefault();

  const SEGMENT_SEPARATOR = "-";
  const SEGMENT_LENGTH = 6;
  const SEGMENT_COUNT = 8;
  const TOTAL_LENGTH = SEGMENT_LENGTH * SEGMENT_COUNT;

  const input = document.getElementById("recovery-key");
  const getLength = () => input.value.replaceAll(SEGMENT_SEPARATOR, "").length;
  if (event.key === "Backspace") {
    let end = -1;
    if (input.value.endsWith(SEGMENT_SEPARATOR)) {
      end = -2;
    }
    input.value = input.value.slice(0, end);
    return;
  } else if (event.key === "Enter") {
    if (getLength() < TOTAL_LENGTH) {
      return;
    }
    input.value = "";
  } else if (event.key === "Escape") {
    input.value = "";
  }

  if (getLength() >= TOTAL_LENGTH) {
    return;
  }

  if (/^[0-9]$/.test(event.key)) {
    input.value += event.key;
  } else if (/^F[1-9]0?$/.test(event.key)) {
    input.value += event.key.substring(event.key.length - 1);
  }

  if (
    getLength() !== 0 &&
    getLength() % SEGMENT_LENGTH === 0 &&
    getLength() < TOTAL_LENGTH &&
    !input.value.endsWith(SEGMENT_SEPARATOR)
  ) {
    input.value += SEGMENT_SEPARATOR;
  }
});
