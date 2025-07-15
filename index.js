setInterval(function(){

    //polokwane
let plkElement = document.querySelector("#plk");
 if(plkElement){

 
let plkDateElement = plkElement.querySelector(".date");
let plkTimeElement = plkElement.querySelector(".time");
let plkTime = moment().tz("Africa/Johannesburg");

plkDateElement.innerHTML = plkTime.format("MMMM Do YYYY");
plkTimeElement.innerHTML = plkTime.format("hh:mm:ss [<small>]A[</small>]"); }

}, 1000);

function updateKuwait (){
    //kuwait
   

   
let kuwaitElement = document.querySelector("#kuwait");
 if(kuwaitElement){
let kuwaitDateElement = kuwaitElement.querySelector(".date");
let kuwaitTimeElement = kuwaitElement.querySelector(".time");
let kuwaitTime = moment().tz("Asia/Kuwait");

kuwaitDateElement.innerHTML = kuwaitTime.format("MMMM Do YYYY");
kuwaitTimeElement.innerHTML = kuwaitTime.format("hh:mm:ss [<small>]A[</small>]"); }
 
}

updateKuwait();
setInterval(updateKuwait, 1000);


let updateInterval; // store interval so we can clear it when needed

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.split("/")[1];
  let citiesElement = document.querySelector("#cities");

  // Clear previous interval if any
  if (updateInterval) {
    clearInterval(updateInterval);
  }

  // Function to update the city time every second
  function updateTime() {
    let cityTime = moment().tz(cityTimezone);
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  }

  updateTime(); // initial call
  updateInterval = setInterval(updateTime, 1000); // update every second
}



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);