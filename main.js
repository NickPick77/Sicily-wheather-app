import { Palermo, Agrigento, Caltanissetta, Catania, Enna, Messina, Ragusa, Siracusa, Trapani } from "./data.js";
import { query, queryAll, getMeteoData, createCard } from "./utils.js";
// ON PAGE LOAD//
//PALERMO CARD
getMeteoData(38.115822, 13.35976).then((resultAPI) => { //Ask data from api using Latitude e Longitude then create a card with&for data
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
})/*.catch((reject)=> { //cacth error when the promise get rejected
  console.log(reject)
  console.log( Palermo.weather[0].main)
  const weatherColor = Palermo.weather[0].description
  weatherColor.split("")
  createCard(
    Palermo.weather[0].main, // Value for main weather
    Palermo.weather[0].description, //Value for weather description
    Palermo.weather[0].icon, //Value for weather icon
    Palermo.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//AGRIGENTO CARD
getMeteoData(37.320839, 13.58876).then((resultAPI) => {
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
}).catch((reject)=> {
  console.log(reject)
  console.log( Agrigento.weather[0].main)
  const weatherColor = Agrigento.weather[0].description
  console.log(weatherColor)
  createCard(
    Agrigento.weather[0].main, // Value for main weather
    Agrigento.weather[0].description, //Value for weather description
    Agrigento.weather[0].icon, //Value for weather icon
    Agrigento.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});
//CALTANISSETTA CARD
getMeteoData(37.48774, 14.04497).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Caltanissetta.weather[0].main)
  const weatherColor = Caltanissetta.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Caltanissetta.weather[0].main, // Value for main weather
    Caltanissetta.weather[0].description, //Value for weather description
    Caltanissetta.weather[0].icon, //Value for weather icon
    Caltanissetta.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//CATANIA CARD
getMeteoData(37.502129, 15.08719).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Catania.weather[0].main)
  const weatherColor = Catania.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Catania.weather[0].main, // Value for main weather
    Catania.weather[0].description, //Value for weather description
    Catania.weather[0].icon, //Value for weather icon
    Catania.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//ENNA CARD
getMeteoData (37.558849, 14.28917).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Enna.weather[0].main)
  const weatherColor = Enna.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Enna.weather[0].main, // Value for main weather
    Enna.weather[0].description, //Value for weather description
    Enna.weather[0].icon, //Value for weather icon
    Enna.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//MESSINA CARD
getMeteoData(-22.351311, 30.0396).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Messina.weather[0].main)
  const weatherColor = Messina.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Messina.weather[0].main, // Value for main weather
    Messina.weather[0].description, //Value for weather description
    Messina.weather[0].icon, //Value for weather icon
    Messina.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//RAGUSA CARD
getMeteoData(36.928242, 14.71719).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Ragusa.weather[0].main)
  const weatherColor = Ragusa.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Ragusa.weather[0].main, // Value for main weather
    Ragusa.weather[0].description, //Value for weather description
    Ragusa.weather[0].icon, //Value for weather icon
    Ragusa.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//SIRACUSA CARD
getMeteoData(37.085152, 15.273).then((resultAPI) => {
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
})/*.catch((reject)=> {
  console.log(reject)
  console.log( Siracusa.weather[0].main)
  const weatherColor = Siracusa.weather[0].description
  weatherColor.split("")
  console.log(weatherColor)
  createCard(
    Siracusa.weather[0].main, // Value for main weather
    Siracusa.weather[0].description, //Value for weather description
    Siracusa.weather[0].icon, //Value for weather icon
    Siracusa.name, //Value for city name
    weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  ) 
});*/
//TRAPANI CARD
getMeteoData(38.015839, 12.51077).then((resultAPI) => {
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
})//.catch((reject)=> {
  //console.log(reject)
  //console.log( Trapani.weather[0].main)
  //const weatherColor = Trapani.weather[0].description
  //weatherColor.split("")
  //console.log(weatherColor)
  //createCard(
  //  Trapani.weather[0].main, // Value for main weather
  //  Trapani.weather[0].description, //Value for weather description
  //  Trapani.weather[0].icon, //Value for weather icon
  //  Trapani.name, //Value for city name
  //  weatherColor.split(" ").join("-") //Value for classList.add(color) --> to change class of div and have a dinamic background
  //) 
//});
//AT SELECT EVENT//
const selectEl = query(".cities")
selectEl.addEventListener("change", () => {
  const selectedOption = selectEl.value
  if(selectedOption == ""){
    const cardContainer = queryAll(".card-container");
    cardContainer.forEach(element => {
        element.remove();
    });
    //PALERMO CARD
    getMeteoData(38.115822, 13.35976).then((resultAPI) => {
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
    //AGRIGENTO CARD
    getMeteoData(37.320839, 13.58876).then((resultAPI) => {
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
    //CALTANISSETTA CARD
    getMeteoData(37.48774, 14.04497).then((resultAPI) => {
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
    //CATANIA CARD
    getMeteoData(37.502129, 15.08719).then((resultAPI) => {
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
    //ENNA CARD
    getMeteoData (37.558849, 14.28917).then((resultAPI) => {
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
    //MESSINA CARD
    getMeteoData(-22.351311, 30.0396).then((resultAPI) => {
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
    //RAGUSA
    getMeteoData(36.928242, 14.71719).then((resultAPI) => {
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
    //SIRACUSA CARD
    getMeteoData(37.085152, 15.273).then((resultAPI) => {
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
    //TRAPANI CARD
    getMeteoData(38.015839, 12.51077).then((resultAPI) => {
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
  else{
    //const selectEl = query(".cities")
    const cardContainer = queryAll(".card-container");
    cardContainer.forEach(element => {
      element.remove();
    });
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

