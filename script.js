const textContianer = document.querySelector(".love-texts");
// const filter = document.getElementById("1");
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

const getData = async (data) => {
  try {
    const response = await fetch("data.json");

    const data = await response.json();

    data.forEach((item) => {
      const textBox = document.createElement("div");
      textBox.classList.add("love-text", `${item.category}`);

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

// const filter = async () => {
// const data = getData();
// console.log(data);
// };

// filter();

const filterText = async (category) => {
  const loveTexts = document.querySelectorAll(".love-text");
  loveTexts.forEach(function (text) {
    const categories = text.classList; // Get all classes of the element
    if (categories.contains(category)) {
      // Check if the desired category exists
      text.style.display = "block"; // If yes, display it\
      text.style.backgroundColor = "lightblue";
    } else {
      text.style.display = "none"; // If not, hide it
    }
  });
};

filterText("romance");

function resetFilters() {
  var loveTexts = document.querySelectorAll(".love-text");
  loveTexts.forEach(function (text) {
    text.style.display = "block";
  });
}
