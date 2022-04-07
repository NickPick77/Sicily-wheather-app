//QUERYSELECTOR & CREATE FUNCTION
const create = (selector) => document.createElement(selector);
const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);
//FETCH CALL
/*https://cors-anywhere.herokuapp.com/*/
const getMeteoData = async (lat, lon) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e5a106969b36b69f352ba20721784e1&lang=en`, {
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
const getGeoData = async (city) => {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2e5a106969b36b69f352ba20721784e1&lang=en`, {
                method: "GET",
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
//CREATE SEARCH INPUT 
const createInput = () => {
        const searchDiv = create("div");
        searchDiv.classList.add("search-container")
        const searchLabel = create("label");
        searchLabel.setAttribute("id", "search");
        searchLabel.textContent = "search city";
        const searchInput = create("input");
        searchInput.classList.add("search");
        searchInput.setAttribute("id", "search");
        searchInput.setAttribute("type", "text");
        const searchBtn = create("input");
        searchBtn.classList.add("submit");
        searchBtn.setAttribute("type", "submit");
        searchBtn.setAttribute("value", "search");
        searchDiv.append(searchLabel, searchInput, searchBtn);
        query(".form").appendChild(searchDiv);
}
//CREATE SELECT
const createSelect = () => {
        const divEl = create("div");
        divEl.classList.add("select-form");
        const selectLabel = create("label");
        selectLabel.setAttribute("for", "city");
        selectLabel.textContent = "Select city";
        const SelectEl = create("select");
        SelectEl.classList.add("cities");
        SelectEl.setAttribute("id", "city");
        const optgroupEl = create("optgroup");
        optgroupEl.setAttribute("label", "Sicily's Cities");
        SelectEl.appendChild(optgroupEl);
        divEl.append(selectLabel, SelectEl);
        query(".form").appendChild(divEl);
};
const createOption = (latLon, city) => {
        const optionEl = create("option");
                optionEl.setAttribute("value", latLon);
                optionEl.textContent = city;
        query(".cities").appendChild(optionEl);
}
const createWrongSearch = (city) => {
        const divEl = create("div");
                divEl.classList.add("wrong-container")
        const h1El = create("h1");
                h1El.classList.add("wrong")
                h1El.textContent = `${city} non è una provincia siciliana`;
                divEl.appendChild(h1El);
        query(".cards-wrapper").appendChild(divEl)
}

const removeCards = () =>{
        const cardContainer = queryAll(".card-container");
        cardContainer.forEach(element => {
          element.remove();
        });

}
export { query, queryAll, create, getMeteoData, getGeoData, createCard, createInput, createSelect, createOption, createWrongSearch, removeCards };
