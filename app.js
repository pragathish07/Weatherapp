document.getElementById("search-btn").addEventListener("click", () =>{
  let search = document.querySelector(".input").value
  document.getElementById("hide").style.display = "block";
  document.querySelector(".container2").style.display = "block"
  document.querySelector(".search").classList.remove("center");

  console.log(search)
  
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=f719fcade49043fb919152606232004&q=${search}&days=7&aqi=yes&alerts=yes`

    async function checkWheather(){
      let res = await fetch(apiUrl);
      let data = await res.json();
      console.log(data)
         
      
     //input u

      document.getElementById("feel").innerHTML = data.current.feelslike_c + "°C"
      document.getElementById("city").innerHTML = data.location.name
      document.getElementById("desc").innerHTML = data.current.condition.text
      document.getElementById("temp").innerHTML = data.current.temp_c + "°C"
      document.getElementById("srise").innerHTML = data.forecast.forecastday[0].astro.sunrise
      document.getElementById("sset").innerHTML = data.forecast.forecastday[0].astro.sunset
      
      


        //hour forecast
      document.getElementById("hr-temp").innerHTML = data.forecast.forecastday[0].hour[6].temp_c + "°C"
      document.getElementById("hr-temp1").innerHTML = data.forecast.forecastday[0].hour[9].temp_c + "°C"
      document.getElementById("hr-temp2").innerHTML = data.forecast.forecastday[0].hour[12].temp_c + "°C"
      document.getElementById("hr-temp3").innerHTML = data.forecast.forecastday[0].hour[15].temp_c + "°C"
      document.getElementById("hr-temp4").innerHTML = data.forecast.forecastday[0].hour[18].temp_c + "°C"
      document.getElementById("hr-temp5").innerHTML = data.forecast.forecastday[0].hour[21].temp_c + "°C"

      // conditions

      document.getElementById("humidity").innerHTML = data.current.humidity 
      document.getElementById("rain").innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain + " %"
      document.getElementById("mintemp").innerHTML = data.forecast.forecastday[0].day.mintemp_c + " °C"
      document.getElementById("maxtemp").innerHTML = data.forecast.forecastday[0].day.maxtemp_c + " °C"
      document.getElementById("ws").innerHTML = data.current.wind_kph + " km\h"
      document.getElementById("precip").innerHTML = data.current.precip_mm + " mm"
      document.getElementById("air").innerHTML = data.current.air_quality["us-epa-index"]

       // forecast

       document.getElementById("daytemp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+ " °C"
       document.getElementById("daytemp1").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + " °C"
       document.getElementById("daytemp2").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + " °C"
       document.getElementById("daytemp3").innerHTML = data.forecast.forecastday[3].day.avgtemp_c + " °C"
       document.getElementById("daytemp4").innerHTML = data.forecast.forecastday[4].day.avgtemp_c + " °C"
       document.getElementById("daytemp5").innerHTML = data.forecast.forecastday[5].day.avgtemp_c + " °C"
       document.getElementById("daytemp6").innerHTML = data.forecast.forecastday[6].day.avgtemp_c + " °"
       document.getElementById("f-desc").innerHTML = data.forecast.forecastday[0].day.condition.text
       document.getElementById("f-desc1").innerHTML = data.forecast.forecastday[1].day.condition.text
       document.getElementById("f-desc2").innerHTML = data.forecast.forecastday[2].day.condition.text
       document.getElementById("f-desc3").innerHTML = data.forecast.forecastday[3].day.condition.text
       document.getElementById("f-desc4").innerHTML = data.forecast.forecastday[4].day.condition.text
       document.getElementById("f-desc5").innerHTML = data.forecast.forecastday[5].day.condition.text
       document.getElementById("f-desc6").innerHTML = data.forecast.forecastday[5].day.condition.text

       // cities
       if(data.current.condition.text == "Partly cloudy" || data.current.condition.text == "Cloudy"){
        document.getElementById("hero-img").src = "sun clouds.png"
       }else if(data.current.condition.text == "Thunderstorm"){
        document.getElementById("hero-img").src = "Thunder.png"

       }
       

    }
     
  checkWheather()

})


const city = document.getElementById('city')
const container = document.querySelector('.container')
const cont2 = document.querySelector('.container2')
const cities = document.querySelector('.wrapper2')

function hide(){
  container.style.display = 'none';
  cont2.style.display = 'none';
  cities.style.display = 'flex';


}
function show(){
  container.style.display = 'inline-block';
  cont2.style.display = 'block';
  cities.style.display = 'none';


}



// theme picker
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();

let wrap = document.querySelector(".wrap")
let intro = document.getElementById("intropage")
document.getElementById("intro-btn").addEventListener("click",() =>{
  wrap.style.display = "block";
  intro.style.display = "none"

})


