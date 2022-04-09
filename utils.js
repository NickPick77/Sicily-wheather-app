//QUERYSELECTOR & CREATE FUNCTION
const create = (selector) => document.createElement(selector);

const query = (selector) => document.querySelector(selector);

const queryAll = (selector) => document.querySelectorAll(selector);



//FETCH CALL FOR CITY WEATHER DATA (TEMP, MAIN, DESC, ECC..)
/*https://cors-anywhere.herokuapp.com/*/
const getMeteoData = async (lat, lon) => {
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e5a106969b36b69f352ba20721784e1&lang=en`, {
                
                method: "GET",
                
                //headers: {
                //  "Content-Type": "application/json", 
                //},
        });
        
        if (res.status >= 200 && res.status <= 299) {
        
                return await res.json();
        
        } else {
        
                create404();
        
        };

};


//FETCH CALL FOR CITY GEOLOCALIZATION DATA( LAT, LON, NAME, STATE, ECC.. /NOT WEATHER INFO)
const getGeoData = async (city) => {
        
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2e5a106969b36b69f352ba20721784e1&lang=en`, {
                
                method: "GET",
        
        })
        
        if (res.status >= 200 && res.status <= 299) {
                
                return await res.json();
        
        } else {
                
                create404();
        
        }

};


//CREATE CARD FUNCTION
const createCard = (main, desc, icon, cityName, color) => {
        console.log("color", color, desc)
        
        const divEl = create("div");
                divEl.classList.add("card-container");
                divEl.classList.add(color);
        
        const infoDiv = create("div");
                infoDiv.classList.add("weather-info");
        
        /*const hrEl = create("hr");
                hrEl.classList.add("divisor");*/
        
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
        
        infoDiv.append(cityh2, h3El, parWeathEl);
        
        divEl.append(infoDiv, imgEl);
        
        query(".cards-wrapper").appendChild(divEl);

}


//CREATE SEARCH INPUT 
const createInput = () => {
        
        const searchDiv = create("div");
                searchDiv.classList.add("search-container")

        const searchLabel = create("label");
                searchLabel.setAttribute("id", "search");
                searchLabel.textContent = "Search city";
        
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


//FUNCTION TO POPULATE SELECT
const createOption = (latLon, city) => {
        
        const optionEl = create("option");
                optionEl.setAttribute("value", latLon);
                optionEl.textContent = city;
        
        query(".cities").appendChild(optionEl);
}


//FUNCTION TO RENDER ERROR FOR WRONG SEARCH
const createWrongSearch = (city) => {
        
        const divEl = create("div");
                divEl.classList.add("wrong-container")
        
        const h1El = create("h1");
                h1El.classList.add("wrong-city")
                h1El.textContent = `${city}`;
        
        const h2El = create("h2");
                h2El.classList.add("wrong-msg")
                h2El.textContent = "non è una provincia siciliana";
        
        const pEl1 = create("p");
                pEl1.classList.add("info-msg")
                pEl1.textContent = "Puoi cercare qualsiasi città siciliana oppure usa il selettore per controllare il meteo nelle principali città"
        
        const pEl2 = create("p");
                pEl2.classList.add("info-msg")
                pEl2.textContent = "oppure"
        
        const pEl3 = create("p");
                pEl3.classList.add("info-msg")
                pEl3.textContent = "Usa il selettore per controllare il meteo nelle principali città"
        
        divEl.append(h1El, h2El, pEl1, pEl2, pEl3);
        
        query(".cards-wrapper").appendChild(divEl)

}


//FUNCTION TO REND ERROR 404
const create404 = () => {

        const h1El = create("h1");
                h1El.textContent = "404 pagina non trovata";
        
        query(".cards-wrapper").append(h1El);
}


//FUNCTION TO REMOVE PREVIOUS CARD
const removeCards = () =>{
        const cardContainer = queryAll(".card-container");
        
        cardContainer.forEach(element => {
         
                element.remove();
        
        });

}



export { query, queryAll, create, getMeteoData, getGeoData, createCard, createInput, createSelect, createOption, createWrongSearch, removeCards };
