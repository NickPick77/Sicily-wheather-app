//QUERYSELECTOR & CREATE FUNCTION
const create = (selector) => document.createElement(selector);
const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);
//FETCH CALL
/*https://cors-anywhere.herokuapp.com/*/
const getMeteoData = async (lat, lon) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b9d22b5a41dc852a89e0737214e4502&lang=en`, {
      method: "GET",
      //headers: {
      //  "Content-Type": "application/json", 
      //},
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
const createCard = (main, desc, icon, cityName, color) => {
        console.log("color", color, desc)
    const divEl = create("div");
            divEl.classList.add("card-container");
            divEl.classList.add(color);
    const infoDiv = create("div");
            infoDiv.classList.add("weather-info")        
    const cityh2 = create("h2");
            cityh2.textContent = cityName;
    const h3El = create("h3");
            h3El.classList.add("main-weath")
            h3El.textContent = main;
    const parWeathEl = create("p");
            parWeathEl.classList.add("Weather");
            parWeathEl.textContent = desc;   
    const imgEl = create("img");
            imgEl.classList.add("icon");
            imgEl.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`)
    infoDiv.append(cityh2, h3El, parWeathEl)    
    divEl.append(infoDiv, imgEl);
    query(".cards-wrapper").appendChild(divEl);
}

export { query, queryAll, create, getMeteoData, createCard};