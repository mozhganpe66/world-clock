let intervalId;

function updateTime() {
// Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {   
let losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");
}

// Paris

let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
parisDateElement.innerHTML = moment().format("MMMM Do YYYY");

let parisTimeElement = parisElement.querySelector(".time");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");

}
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
       let cityElement = document.querySelector("#city");

       function updateTimeForCity() {
        cityElement.innerHTML = `<div class="city">
        <div class="city-name-date">
        <h2>${cityName}</h2>
        <div class="date">${moment().tz(cityTimeZone).format("MMMM Do YYYY")}</div>
        </div>
        
        <div class="time">${moment().tz(cityTimeZone).format("h:mm:ss [<small>]A[</small>]")}</div>     
      </div>`;
       } 
       if (intervalId) {
        clearInterval(intervalId);
    } 
       
    updateTimeForCity();
     intervalId = setInterval(updateTimeForCity, 1000);  
    }

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change",updateCity);
