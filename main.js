import { query, queryAll, getMeteoData, createCard } from "./utils.js";
//https://cors-anywhere.herokuapp.com/
//CHANGE BACKGROUND DEPEND ON WEATHER
const changeBackground = () => {
  const val = query(".main-weath").textContent;
  const Div = queryAll(".card-container")
  //console.log(val);
  Div.forEach(()=>{
  switch (val) {
    case "Clouds":
      Div.classList.add("clouds");
      break;
    case "Clear":
      Div.classList.add("clear");
      break;
    default:
      break;
  }
})
}
// ON PAGE LOAD//
//PALERMO CARD
getMeteoData(38.115822, 13.35976).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
      
  })
})
//AGRIGENTO CARD
getMeteoData(37.320839, 13.58876).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//CALTANISSETTA CARD
getMeteoData(37.48774, 14.04497).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//CATANIA CARD
getMeteoData(37.502129, 15.08719).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//ENNA CARD
getMeteoData (37.558849, 14.28917).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//MESSINA CARD
getMeteoData(-22.351311, 30.0396).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//RAGUSA
getMeteoData(36.928242, 14.71719).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//SIRACUSA CARD
getMeteoData(37.085152, 15.273).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
//TRAPANI CARD
getMeteoData(38.015839, 12.51077).then((resultAPI) => {
  const weath = resultAPI.weather
  const cityName = resultAPI.name
     weath.map((weather) => {
      createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
      )
  })
})
const selectEl = query(".cities")




//AT SELECT EVENT//
selectEl.addEventListener("change", (event) => {
  const selectedOption = selectEl.value
  if(selectedOption == ""){
    const cardContainer = queryAll(".card-container");
    cardContainer.forEach(element => {
        element.remove();
    });
    //PALERMO CARD
    getMeteoData(38.115822, 13.35976).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
          
      })
    })
    //AGRIGENTO CARD
    getMeteoData(37.320839, 13.58876).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //CALTANISSETTA CARD
    getMeteoData(37.48774, 14.04497).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //CATANIA CARD
    getMeteoData(37.502129, 15.08719).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //ENNA CARD
    getMeteoData (37.558849, 14.28917).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //MESSINA CARD
    getMeteoData(-22.351311, 30.0396).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //RAGUSA
    getMeteoData(36.928242, 14.71719).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //SIRACUSA CARD
    getMeteoData(37.085152, 15.273).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
          )
      })
    })
    //TRAPANI CARD
    getMeteoData(38.015839, 12.51077).then((resultAPI) => {
      const weath = resultAPI.weather
      const cityName = resultAPI.name
         weath.map((weather) => {
          createCard(
              weather.main,
              weather.description,
              weather.icon,
              cityName
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
    const weath = resultAPI.weather
    const cityName = resultAPI.name
       weath.map((weather) => {
        createCard(
          weather.main,
          weather.description,
          weather.icon,
          cityName
        )
    })
  })
  }
})
