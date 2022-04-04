const create = (selector) => document.createElement(selector);
const query = (selector) => document.querySelector(selector);
const getMeteoData = async (lat, lon) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b9d22b5a41dc852a89e0737214e4502`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    // Redirect
    // window.location.href = "/";

    const h1El = create("h1");
    h1El.textContent = "404 pagina non trovata";

    document.body.append(h1El);

    //throw new Error("La pagina non è stata trovata");
  }
};


const createCard = (main, desc, icon) => {
    const divEl = create("div");
            divEl.classList.add("card-container");
    const h2El = create("h2");
            h2El.textContent = main;
    const parWeathEl = create("p");
            parWeathEl.classList.add("Weather");
            parWeathEl.textContent = desc;   
    const imgEl = create("img");
            imgEl.classList.add("icon");
            imgEl.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`)

    divEl.append(h2El,parWeathEl, imgEl);
    query(".cards-wrapper").appendChild(divEl);
}
//"lon": 13.35976,
//"lat": 38.115822 palermo

getMeteoData(38.115822, 13.35976).then((resultAPI) => {
  const result = resultAPI.weather
  console.log(result)
     
     result.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon
      )
  })
}); 
//console.log(getMeteoData(38.115822, 13.35976))