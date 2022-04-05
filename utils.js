//QUERYSELECTOR & CREATE FUNCTION
const create = (selector) => document.createElement(selector);
const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);
//FETCH CALL
/**/
const getMeteoData = async (lat, lon) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e5a106969b36b69f352ba20721784e1&lang=en`, {
      method: "GET",
      mode: "cors",
      headers: {
        //"Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
      },
    })
    if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    const h1El = create("h1");
    h1El.textContent = "404 pagina non trovata";
    document.body.append(h1El);
  }
};
//CREATE CARD FUNCTION
const createCard = (main, desc, icon, cityName) => {
    const divEl = create("div");
            divEl.classList.add("card-container");
    const cityh2 = create("h2");
            cityh2.textContent = cityName;
    const h2El = create("h2");
            h2El.classList.add("main-weath")
            h2El.textContent = main;
    const parWeathEl = create("p");
            parWeathEl.classList.add("Weather");
            parWeathEl.textContent = desc;   
    const imgEl = create("img");
            imgEl.classList.add("icon");
            imgEl.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`)

    divEl.append(cityh2, h2El, parWeathEl, imgEl);
    query(".cards-wrapper").appendChild(divEl);
}

export { query, queryAll, create, getMeteoData, createCard};