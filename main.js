import latLonValue from "./data.js"
import { query, getMeteoData, getGeoData, createCard, createInput, createSelect, createOption, createWrongSearch, removeCards } from "./utils.js";
// ON PAGE LOAD//
createInput();
createSelect();
latLonValue.map((result) => {
  createOption(result.latLon, result.name);
})
//RENDER ALL CARD
latLonValue.slice(1).map((result) => {
  const coordinate = result.latLon.split(",")
  getMeteoData(coordinate[0], coordinate[1]).then((resultAPI) => { //Ask data from api using Latitude e Longitude then create a card with&for data
    const APIdata = resultAPI.weather;
    const cityName = resultAPI.name
    APIdata.map((weather) => {
      const weatherColor = weather.description.split(" ").join("-");
      createCard(
        weather.main,
        weather.description,
        weather.icon,
        cityName,
        weatherColor
      )

    })
  })
})

//AT SELECT EVENT//
const selectEl = query(".cities")
selectEl.addEventListener("change", () => {
  const selectedOption = selectEl.value
  if (selectedOption == "All") {
    //DELETE PREVIOUS ELEMENTS
    removeCards();
    //RENDER ALL CARD
    latLonValue.slice(1).map((result) => {
      const coordinate = result.latLon.split(",")
      getMeteoData(coordinate[0], coordinate[1]).then((resultAPI) => { //Ask data from api using Latitude e Longitude then create a card with&for data
        const APIdata = resultAPI.weather;
        const cityName = resultAPI.name
        APIdata.map((weather) => {
          const weatherColor = weather.description.split(" ").join("-");
          createCard(
            weather.main,
            weather.description,
            weather.icon,
            cityName,
            weatherColor
          )

        })
      })
    })
  }
  else {
    removeCards()
    const latLon = selectedOption.split(",");
    console.log(selectedOption, latLon)
    getMeteoData(latLon[0], latLon[1]).then((resultAPI) => {
      const APIdata = resultAPI.weather;
      const cityName = resultAPI.name
      APIdata.map((weather) => {
        const weatherColor = weather.description.split(" ").join("-");
        createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName,
          weatherColor
        )
      })
    })
  }
})
//SEARCH FUNCTION
const searchInput = query(".search");
query(".submit").addEventListener("click", () => {
try{
const divWrong =  query(".wrong-container")
const cardWrapper = query(".cards-wrapper");
cardWrapper.removeChild(divWrong);
}
finally{
  removeCards()
  getGeoData(searchInput.value).then((resultAPI) => {
    console.log(searchInput.value, resultAPI)
    resultAPI.map((city) => {
      const lat = city.lat
      const lon = city.lon
      console.log(lat, lon)
      if (city.state === "Sicily") {
        getMeteoData(lat, lon).then((resultAPI) => {
          const APIdata = resultAPI.weather;
          const cityName = resultAPI.name
          APIdata.map((weather) => {
            const weatherColor = weather.description.split(" ").join("-");
            createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName,
              weatherColor
            )
          })
        })
      }
      else {
        createWrongSearch(searchInput.value)
      }
    })
  })
}
})



