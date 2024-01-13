import { functions } from "./dataFunctions.js";
import { settings } from "./dataSettings.js";

const randomizeButton = document.getElementById(
  "randomizeButton"
);
const instructions =
  document.getElementById("instructions");

function selectRandom(value) {
  function getRandomItem(obj) {
    const keys = Object.keys(obj);
    const randomKey =
      keys[Math.floor(Math.random() * keys.length)];
    return obj[randomKey];
  }

  const randomSelections = {};

  for (const [itemName, itemUrl] of Object.entries(value)) {
    randomSelections[itemName] = getRandomItem(itemUrl);
  }

  Object.entries(randomSelections).forEach(
    ([key, item]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.setAttribute("href", item.url);
      a.textContent = item.name;

      a.addEventListener("click", function (event) {
        event.preventDefault();
        const iframe = document.getElementById("myIframe");
        if (iframe) {
          iframe.src = "";
          iframe.src = item.url;
        }
      });

      li.appendChild(a);
      instructions.appendChild(li);
    }
  );

  return randomSelections;
}

const randomFunction = selectRandom(functions);
console.log(randomFunction);

randomizeButton.addEventListener(
  "click",
  selectRandom(functions)
);
