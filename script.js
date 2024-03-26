const textContianer = document.querySelector(".love-texts");
console.log(textContianer);

function copyText(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Text copied to clipboard!");

  // Add love effect
  createLoveParticle();
}

const getData = async () => {
  try {
    const response = await fetch("goodnight.json");
    const data = await response.json();

    data.forEach((item) => {
      const textBox = document.createElement("div");
      textBox.classList.add("love-text", "romance");

      const title = document.createElement("h3");
      title.textContent = item.title;

      const text = document.createElement("p");
      text.textContent = item.text;

      const button = document.createElement("button");
      button.classList.add("copy-btn");
      button.textContent = "Copy";
      button.addEventListener("click", () => copyText(text.textContent));

      textBox.appendChild(title);
      textBox.appendChild(text);
      textBox.appendChild(button);

      textContianer.appendChild(textBox);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();

// textContianer.addEventListener("mouseover", () => {
//   console.log("Text box");
//   getData();
// });

// Function to create love particles
function createLoveParticle() {
  const loveParticle = document.createElement("div");
  loveParticle.classList.add("love-particle");
  loveParticle.style.left = Math.random() * window.innerWidth + "px";
  loveParticle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(loveParticle);

  setTimeout(() => {
    loveParticle.remove();
  }, 5000);
}

// Generate love particles every 0.5 seconds
setInterval(createLoveParticle, 500);

function filterText(category) {
  var loveTexts = document.querySelectorAll(".love-text");
  loveTexts.forEach(function (text) {
    if (text.classList.contains(category)) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}

function resetFilters() {
  var loveTexts = document.querySelectorAll(".love-text");
  loveTexts.forEach(function (text) {
    text.style.display = "block";
  });
}
