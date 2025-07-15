setInterval(function(){

    //polokwane
let plkElement = document.querySelector("#plk");
let plkDateElement = plkElement.querySelector(".date");
let plkTimeElement = plkElement.querySelector(".time");
let plkTime = moment().tz("Africa/Johannesburg");

plkDateElement.innerHTML = plkTime.format("MMMM Do YYYY");
plkTimeElement.innerHTML = plkTime.format("hh:mm:ss [<small>]A[</small>]");

}, 1000);

function updateKuwait (){
    //kuwait
let kuwaitElement = document.querySelector("#kuwait");
let kuwaitDateElement = kuwaitElement.querySelector(".date");
let kuwaitTimeElement = kuwaitElement.querySelector(".time");
let kuwaitTime = moment().tz("Asia/Kuwait");

kuwaitDateElement.innerHTML = kuwaitTime.format("MMMM Do YYYY");
kuwaitTimeElement.innerHTML = kuwaitTime.format("hh:mm:ss [<small>]A[</small>]");
}

updateKuwait();
setInterval(updateKuwait, 1000);
