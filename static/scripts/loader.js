const SCRIPTS_TO_LOAD = [
  "scripts/vendor/jquery.swipebox.min.js",
  "scripts/vendor/flickity.pkgd.js",
  "scripts/main.js",
  "scripts/intro-slider.js",
  "scripts/vendor/countdown.js",
];

// Load a script from given `url`
const loadScript = function (url) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script');
    script.src = url;
    script.addEventListener('load', function () {
      resolve(true);
    });
    document.body.appendChild(script);
  });
};

async function start() {
  for (const url of SCRIPTS_TO_LOAD) {
    await loadScript(url);
  }
  console.info('Page is ready!');
}

window.addEventListener('SveltePageReady', e => {
  start();
});
