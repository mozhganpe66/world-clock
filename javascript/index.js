function updateTime() {
// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");

// Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
parisDateElement.innerHTML = moment().format("MMMM Do YYYY");

let parisTimeElement = parisElement.querySelector(".time");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);