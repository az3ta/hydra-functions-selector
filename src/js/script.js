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
      const span = document.createElement("span");
      const a = document.createElement("a");

      span.textContent = `${key}`;
      a.setAttribute("href", item.url);
      a.textContent = `${item.name}`;

      a.addEventListener("click", function (event) {
        event.preventDefault();
        const iframe = document.getElementById("myIframe");
        if (iframe) {
          iframe.src = "";
          iframe.src = item.url;
        }
      });

      li.classList.add("grid", "grid-cols-2", "gap-4");
      span.classList.add("font-bold", "col-span-1");
      a.classList.add(
        "hover:text-blue-500",
        "underline",
        "col-span-1"
      );
      li.appendChild(span);
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
