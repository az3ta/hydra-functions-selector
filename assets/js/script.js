(() => {
  // src/js/dataFunctions.js
  var functions = {
    source: {
      0: {
        name: "noise",
        url: "https://hydra.ojack.xyz/api/#functions/noise/0"
      },
      1: {
        name: "voronoi",
        url: "https://hydra.ojack.xyz/api/#functions/voronoi/0"
      },
      2: {
        name: "OSC",
        url: "https://hydra.ojack.xyz/api/#functions/osc/0"
      },
      3: {
        name: "shape",
        url: "https://hydra.ojack.xyz/api/#functions/shape/0"
      },
      4: {
        name: "gradient",
        url: "https://hydra.ojack.xyz/api/#functions/gradient/0"
      },
      5: {
        name: "src",
        url: "https://hydra.ojack.xyz/api/#functions/src/0"
      },
      6: {
        name: "solid",
        url: "https://hydra.ojack.xyz/api/#functions/solid/0"
      }
    },
    geometry: {
      0: {
        name: "rotate",
        url: "https://hydra.ojack.xyz/api/#functions/rotate/0"
      },
      1: {
        name: "scale",
        url: "https://hydra.ojack.xyz/api/#functions/scale/0"
      },
      2: {
        name: "pixelate",
        url: "https://hydra.ojack.xyz/api/#functions/pixelate/0"
      },
      3: {
        name: "repeat",
        url: "https://hydra.ojack.xyz/api/#functions/repeat/0"
      },
      4: {
        name: "repeatX",
        url: "https://hydra.ojack.xyz/api/#functions/repeatX/0"
      },
      5: {
        name: "repeatY",
        url: "https://hydra.ojack.xyz/api/#functions/repeatY/0"
      },
      6: {
        name: "kaleid",
        url: "https://hydra.ojack.xyz/api/#functions/kaleid/0"
      },
      7: {
        name: "scroll",
        url: "https://hydra.ojack.xyz/api/#functions/scroll/0"
      },
      8: {
        name: "scrollX",
        url: "https://hydra.ojack.xyz/api/#functions/scrollX/0"
      },
      9: {
        name: "scrollY",
        url: "https://hydra.ojack.xyz/api/#functions/scrollY/0"
      }
    },
    color: {
      0: {
        name: "posterize",
        url: "https://hydra.ojack.xyz/api/#functions/posterize/0"
      },
      1: {
        name: "shift",
        url: "https://hydra.ojack.xyz/api/#functions/shift/0"
      },
      2: {
        name: "invert",
        url: "https://hydra.ojack.xyz/api/#functions/invert/0"
      },
      3: {
        name: "contrast",
        url: "https://hydra.ojack.xyz/api/#functions/contrast/0"
      },
      4: {
        name: "brightness",
        url: "https://hydra.ojack.xyz/api/#functions/brightness/0"
      },
      5: {
        name: "luma",
        url: "https://hydra.ojack.xyz/api/#functions/luma/0"
      },
      6: {
        name: "thresh",
        url: "https://hydra.ojack.xyz/api/#functions/thresh/0"
      },
      7: {
        name: "color",
        url: "https://hydra.ojack.xyz/api/#functions/color/0"
      },
      8: {
        name: "saturate",
        url: "https://hydra.ojack.xyz/api/#functions/saturate/0"
      },
      9: {
        name: "hue",
        url: "https://hydra.ojack.xyz/api/#functions/hue/0"
      },
      10: {
        name: "colorama",
        url: "https://hydra.ojack.xyz/api/#functions/colorama/0"
      }
    },
    blend: {
      0: {
        name: "add",
        url: "https://hydra.ojack.xyz/api/#functions/add/0"
      },
      1: {
        name: "sub",
        url: "https://hydra.ojack.xyz/api/#functions/sub/0"
      },
      2: {
        name: "layer",
        url: "https://hydra.ojack.xyz/api/#functions/layer/0"
      },
      3: {
        name: "blend",
        url: "https://hydra.ojack.xyz/api/#functions/blend/0"
      },
      4: {
        name: "mult",
        url: "https://hydra.ojack.xyz/api/#functions/mult/0"
      },
      5: {
        name: "diff",
        url: "https://hydra.ojack.xyz/api/#functions/diff/0"
      },
      6: {
        name: "mask",
        url: "https://hydra.ojack.xyz/api/#functions/mask/0"
      }
    },
    modulate: {
      0: {
        name: "modulateRepeat",
        url: "https://hydra.ojack.xyz/api/#functions/modulateRepeat/0"
      },
      1: {
        name: "modulateRepeatX",
        url: "https://hydra.ojack.xyz/api/#functions/modulateRepeatX/0"
      },
      2: {
        name: "modulateRepeatY",
        url: "https://hydra.ojack.xyz/api/#functions/modulateRepeatY/0"
      },
      3: {
        name: "modulateKaleid",
        url: "https://hydra.ojack.xyz/api/#functions/modulateKaleid/0"
      },
      4: {
        name: "modulateScrollX",
        url: "https://hydra.ojack.xyz/api/#functions/modulateScrollX/0"
      },
      5: {
        name: "modulateScrollY",
        url: "https://hydra.ojack.xyz/api/#functions/modulateScrollY/0"
      },
      6: {
        name: "modulate",
        url: "https://hydra.ojack.xyz/api/#functions/modulate/0"
      },
      7: {
        name: "modulateScale",
        url: "https://hydra.ojack.xyz/api/#functions/modulateScale/0"
      },
      8: {
        name: "modulatePixelate",
        url: "https://hydra.ojack.xyz/api/#functions/modulatePixelate/0"
      },
      9: {
        name: "modulateRotate",
        url: "https://hydra.ojack.xyz/api/#functions/modulateRotate/0"
      },
      10: {
        name: "modulateHue",
        url: "https://hydra.ojack.xyz/api/#functions/modulateHue/0"
      }
    }
  };

  // src/js/script.js
  var randomizeButton = document.getElementById(
    "randomizeButton"
  );
  var instructions = document.getElementById("instructions");
  function selectRandom(value) {
    function getRandomItem(obj) {
      const keys = Object.keys(obj);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
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
        a.addEventListener("click", function(event) {
          event.preventDefault();
          const iframe = document.getElementById("myIframe");
          if (iframe) {
            iframe.src = "";
            iframe.src = item.url;
          }
        });
        li.classList.add("grid", "grid-cols-2", "gap-4");
        span.classList.add("font-bold", "w-2");
        a.classList.add("hover:text-blue-500", "underline");
        li.appendChild(span);
        li.appendChild(a);
        instructions.appendChild(li);
      }
    );
    return randomSelections;
  }
  var randomFunction = selectRandom(functions);
  console.log(randomFunction);
  randomizeButton.addEventListener(
    "click",
    selectRandom(functions)
  );
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2pzL2RhdGFGdW5jdGlvbnMuanMiLCAiLi4vLi4vc3JjL2pzL3NjcmlwdC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgc291cmNlOiB7XG4gICAgMDoge1xuICAgICAgbmFtZTogXCJub2lzZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL25vaXNlLzBcIixcbiAgICB9LFxuICAgIDE6IHtcbiAgICAgIG5hbWU6IFwidm9yb25vaVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3Zvcm9ub2kvMFwiLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgbmFtZTogXCJPU0NcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9vc2MvMFwiLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgbmFtZTogXCJzaGFwZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3NoYXBlLzBcIixcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgIG5hbWU6IFwiZ3JhZGllbnRcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9ncmFkaWVudC8wXCIsXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICBuYW1lOiBcInNyY1wiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3NyYy8wXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcInNvbGlkXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvc29saWQvMFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgZ2VvbWV0cnk6IHtcbiAgICAwOiB7XG4gICAgICBuYW1lOiBcInJvdGF0ZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3JvdGF0ZS8wXCIsXG4gICAgfSxcbiAgICAxOiB7XG4gICAgICBuYW1lOiBcInNjYWxlXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvc2NhbGUvMFwiLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgbmFtZTogXCJwaXhlbGF0ZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3BpeGVsYXRlLzBcIixcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIG5hbWU6IFwicmVwZWF0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvcmVwZWF0LzBcIixcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgIG5hbWU6IFwicmVwZWF0WFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3JlcGVhdFgvMFwiLFxuICAgIH0sXG4gICAgNToge1xuICAgICAgbmFtZTogXCJyZXBlYXRZXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvcmVwZWF0WS8wXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcImthbGVpZFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL2thbGVpZC8wXCIsXG4gICAgfSxcbiAgICA3OiB7XG4gICAgICBuYW1lOiBcInNjcm9sbFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3Njcm9sbC8wXCIsXG4gICAgfSxcbiAgICA4OiB7XG4gICAgICBuYW1lOiBcInNjcm9sbFhcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9zY3JvbGxYLzBcIixcbiAgICB9LFxuICAgIDk6IHtcbiAgICAgIG5hbWU6IFwic2Nyb2xsWVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3Njcm9sbFkvMFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgY29sb3I6IHtcbiAgICAwOiB7XG4gICAgICBuYW1lOiBcInBvc3Rlcml6ZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3Bvc3Rlcml6ZS8wXCIsXG4gICAgfSxcbiAgICAxOiB7XG4gICAgICBuYW1lOiBcInNoaWZ0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvc2hpZnQvMFwiLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgbmFtZTogXCJpbnZlcnRcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9pbnZlcnQvMFwiLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgbmFtZTogXCJjb250cmFzdFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL2NvbnRyYXN0LzBcIixcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgIG5hbWU6IFwiYnJpZ2h0bmVzc1wiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL2JyaWdodG5lc3MvMFwiLFxuICAgIH0sXG4gICAgNToge1xuICAgICAgbmFtZTogXCJsdW1hXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbHVtYS8wXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcInRocmVzaFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3RocmVzaC8wXCIsXG4gICAgfSxcbiAgICA3OiB7XG4gICAgICBuYW1lOiBcImNvbG9yXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvY29sb3IvMFwiLFxuICAgIH0sXG4gICAgODoge1xuICAgICAgbmFtZTogXCJzYXR1cmF0ZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3NhdHVyYXRlLzBcIixcbiAgICB9LFxuICAgIDk6IHtcbiAgICAgIG5hbWU6IFwiaHVlXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvaHVlLzBcIixcbiAgICB9LFxuICAgIDEwOiB7XG4gICAgICBuYW1lOiBcImNvbG9yYW1hXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvY29sb3JhbWEvMFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgYmxlbmQ6IHtcbiAgICAwOiB7XG4gICAgICBuYW1lOiBcImFkZFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL2FkZC8wXCIsXG4gICAgfSxcbiAgICAxOiB7XG4gICAgICBuYW1lOiBcInN1YlwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL3N1Yi8wXCIsXG4gICAgfSxcbiAgICAyOiB7XG4gICAgICBuYW1lOiBcImxheWVyXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbGF5ZXIvMFwiLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgbmFtZTogXCJibGVuZFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL2JsZW5kLzBcIixcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgIG5hbWU6IFwibXVsdFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL211bHQvMFwiLFxuICAgIH0sXG4gICAgNToge1xuICAgICAgbmFtZTogXCJkaWZmXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvZGlmZi8wXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcIm1hc2tcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9tYXNrLzBcIixcbiAgICB9LFxuICB9LFxuXG4gIG1vZHVsYXRlOiB7XG4gICAgMDoge1xuICAgICAgbmFtZTogXCJtb2R1bGF0ZVJlcGVhdFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL21vZHVsYXRlUmVwZWF0LzBcIixcbiAgICB9LFxuICAgIDE6IHtcbiAgICAgIG5hbWU6IFwibW9kdWxhdGVSZXBlYXRYXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbW9kdWxhdGVSZXBlYXRYLzBcIixcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIG5hbWU6IFwibW9kdWxhdGVSZXBlYXRZXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbW9kdWxhdGVSZXBlYXRZLzBcIixcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIG5hbWU6IFwibW9kdWxhdGVLYWxlaWRcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9tb2R1bGF0ZUthbGVpZC8wXCIsXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICBuYW1lOiBcIm1vZHVsYXRlU2Nyb2xsWFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL21vZHVsYXRlU2Nyb2xsWC8wXCIsXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICBuYW1lOiBcIm1vZHVsYXRlU2Nyb2xsWVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL21vZHVsYXRlU2Nyb2xsWS8wXCIsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICBuYW1lOiBcIm1vZHVsYXRlXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbW9kdWxhdGUvMFwiLFxuICAgIH0sXG4gICAgNzoge1xuICAgICAgbmFtZTogXCJtb2R1bGF0ZVNjYWxlXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9oeWRyYS5vamFjay54eXovYXBpLyNmdW5jdGlvbnMvbW9kdWxhdGVTY2FsZS8wXCIsXG4gICAgfSxcbiAgICA4OiB7XG4gICAgICBuYW1lOiBcIm1vZHVsYXRlUGl4ZWxhdGVcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9tb2R1bGF0ZVBpeGVsYXRlLzBcIixcbiAgICB9LFxuICAgIDk6IHtcbiAgICAgIG5hbWU6IFwibW9kdWxhdGVSb3RhdGVcIixcbiAgICAgIHVybDogXCJodHRwczovL2h5ZHJhLm9qYWNrLnh5ei9hcGkvI2Z1bmN0aW9ucy9tb2R1bGF0ZVJvdGF0ZS8wXCIsXG4gICAgfSxcbiAgICAxMDoge1xuICAgICAgbmFtZTogXCJtb2R1bGF0ZUh1ZVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vaHlkcmEub2phY2sueHl6L2FwaS8jZnVuY3Rpb25zL21vZHVsYXRlSHVlLzBcIixcbiAgICB9LFxuICB9LFxufTtcbiIsICJpbXBvcnQgeyBmdW5jdGlvbnMgfSBmcm9tIFwiLi9kYXRhRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCIuL2RhdGFTZXR0aW5ncy5qc1wiO1xuXG5jb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJyYW5kb21pemVCdXR0b25cIlxuKTtcbmNvbnN0IGluc3RydWN0aW9ucyA9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuXG5mdW5jdGlvbiBzZWxlY3RSYW5kb20odmFsdWUpIHtcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbShvYmopIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCByYW5kb21LZXkgPVxuICAgICAga2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCldO1xuICAgIHJldHVybiBvYmpbcmFuZG9tS2V5XTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbVNlbGVjdGlvbnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IFtpdGVtTmFtZSwgaXRlbVVybF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgcmFuZG9tU2VsZWN0aW9uc1tpdGVtTmFtZV0gPSBnZXRSYW5kb21JdGVtKGl0ZW1VcmwpO1xuICB9XG5cbiAgT2JqZWN0LmVudHJpZXMocmFuZG9tU2VsZWN0aW9ucykuZm9yRWFjaChcbiAgICAoW2tleSwgaXRlbV0pID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gYCR7a2V5fWA7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaXRlbS51cmwpO1xuICAgICAgYS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuXG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlmcmFtZVwiKTtcbiAgICAgICAgaWYgKGlmcmFtZSkge1xuICAgICAgICAgIGlmcmFtZS5zcmMgPSBcIlwiO1xuICAgICAgICAgIGlmcmFtZS5zcmMgPSBpdGVtLnVybDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ3JpZC1jb2xzLTJcIiwgXCJnYXAtNFwiKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImZvbnQtYm9sZFwiLCBcInctMlwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LmFkZChcImhvdmVyOnRleHQtYmx1ZS01MDBcIiwgXCJ1bmRlcmxpbmVcIik7XG4gICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgaW5zdHJ1Y3Rpb25zLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJhbmRvbVNlbGVjdGlvbnM7XG59XG5cbmNvbnN0IHJhbmRvbUZ1bmN0aW9uID0gc2VsZWN0UmFuZG9tKGZ1bmN0aW9ucyk7XG5jb25zb2xlLmxvZyhyYW5kb21GdW5jdGlvbik7XG5cbnJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIHNlbGVjdFJhbmRvbShmdW5jdGlvbnMpXG4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBTyxNQUFNLFlBQVk7QUFBQSxJQUN2QixRQUFRO0FBQUEsTUFDTixHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUVBLFVBQVU7QUFBQSxNQUNSLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLElBQUk7QUFBQSxRQUNGLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFFQSxVQUFVO0FBQUEsTUFDUixHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLEdBQUc7QUFBQSxRQUNELE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxHQUFHO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsSUFBSTtBQUFBLFFBQ0YsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjs7O0FDcE1BLE1BQU0sa0JBQWtCLFNBQVM7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFDQSxNQUFNLGVBQ0osU0FBUyxlQUFlLGNBQWM7QUFFeEMsV0FBUyxhQUFhLE9BQU87QUFDM0IsYUFBUyxjQUFjLEtBQUs7QUFDMUIsWUFBTSxPQUFPLE9BQU8sS0FBSyxHQUFHO0FBQzVCLFlBQU0sWUFDSixLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUM5QyxhQUFPLElBQUksU0FBUztBQUFBLElBQ3RCO0FBRUEsVUFBTSxtQkFBbUIsQ0FBQztBQUUxQixlQUFXLENBQUMsVUFBVSxPQUFPLEtBQUssT0FBTyxRQUFRLEtBQUssR0FBRztBQUN2RCx1QkFBaUIsUUFBUSxJQUFJLGNBQWMsT0FBTztBQUFBLElBQ3BEO0FBRUEsV0FBTyxRQUFRLGdCQUFnQixFQUFFO0FBQUEsTUFDL0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNO0FBQ2YsY0FBTSxLQUFLLFNBQVMsY0FBYyxJQUFJO0FBQ3RDLGNBQU0sT0FBTyxTQUFTLGNBQWMsTUFBTTtBQUMxQyxjQUFNLElBQUksU0FBUyxjQUFjLEdBQUc7QUFFcEMsYUFBSyxjQUFjLEdBQUcsR0FBRztBQUN6QixVQUFFLGFBQWEsUUFBUSxLQUFLLEdBQUc7QUFDL0IsVUFBRSxjQUFjLEdBQUcsS0FBSyxJQUFJO0FBRTVCLFVBQUUsaUJBQWlCLFNBQVMsU0FBVSxPQUFPO0FBQzNDLGdCQUFNLGVBQWU7QUFDckIsZ0JBQU0sU0FBUyxTQUFTLGVBQWUsVUFBVTtBQUNqRCxjQUFJLFFBQVE7QUFDVixtQkFBTyxNQUFNO0FBQ2IsbUJBQU8sTUFBTSxLQUFLO0FBQUEsVUFDcEI7QUFBQSxRQUNGLENBQUM7QUFFRCxXQUFHLFVBQVUsSUFBSSxRQUFRLGVBQWUsT0FBTztBQUMvQyxhQUFLLFVBQVUsSUFBSSxhQUFhLEtBQUs7QUFDckMsVUFBRSxVQUFVLElBQUksdUJBQXVCLFdBQVc7QUFDbEQsV0FBRyxZQUFZLElBQUk7QUFDbkIsV0FBRyxZQUFZLENBQUM7QUFDaEIscUJBQWEsWUFBWSxFQUFFO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUFNLGlCQUFpQixhQUFhLFNBQVM7QUFDN0MsVUFBUSxJQUFJLGNBQWM7QUFFMUIsa0JBQWdCO0FBQUEsSUFDZDtBQUFBLElBQ0EsYUFBYSxTQUFTO0FBQUEsRUFDeEI7IiwKICAibmFtZXMiOiBbXQp9Cg==
