// Áldás, békesség !

export const forditasok = {
  KNB: "Káldi-Neovulgáta (katolikus)",
  SZIT: "Szent István Társulati Biblia (katolikus)",
  KG: "Károli Gáspár revideált fordítása (protestáns)",
  UF: "Magyar Bibliatársulat újfordítású Bibliája 1990 (protestáns)",
  RUF: "Magyar Bibliatársulat újfordítású Bibliája 2014 (protestáns)",
  BD: "Békés-Dalos Újszövetség (katolikus)",
  STL: "Simon Tamás László Újszövetség-fordítása (katolikus)",
}

const ask = domain => view => (query = "") => fetch(domain + query)
  .then(r => r.json())
  .then(json => view(json))
  .catch(err => view({}, err));

const szentirasApiDomain = "https://szentiras.hu/api/"
const idezet = ask(szentirasApiDomain + "idezet/");
export const kereses = ask(szentirasApiDomain + "search/");