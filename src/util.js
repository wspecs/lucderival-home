export const BASE_API_URL = "https://lucderival.wspecs.com/items";

export async function fetchJSON(url) {
  let apiEndpoint = url;
  if (url[0] === '/') {
    apiEndpoint = BASE_API_URL + url;
  }
  const response = await fetch(apiEndpoint);
  return response.json();
}

export function getLink(imageId) {
  if (imageId.indexOf("/") > -1) {
    return imageId;
  }
  return "https://lucderival.nyc3.digitaloceanspaces.com/" + imageId;
}

export async function fetchData(url) {
  return (await fetchJSON(url)).data;
}

function matchesLang(x, lang) {
  return x.languages_id === lang || x.languages_code === lang;
}

export function setTranslation(item, lang) {
  if (!item.translations) {
    return;
  }

  item.translation = item.translations.find((x) => matchesLang(x, lang)) ||
    item.translations.find((x) => matchesLang(x, 'en'));
}

export function translateList(list, lang) {
  list.forEach(x => setTranslation(x, lang));
  return list;
}

export function getTranslation(stringLookup, key) {
  const match = stringLookup[key];
  if (match) {
    return match.value;
  }
  return '';
}

export function initializeSlider(isSliderLoaded, jquery, slideName, callbackFn) {
  if (
    !isSliderLoaded &&
    jquery &&
    jquery(`[data-slider="${slideName}"] .slick-slide`).length > 0
  ) {
    callbackFn();
  }
}

export function sendJSONResponse(res, json) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(json));
}