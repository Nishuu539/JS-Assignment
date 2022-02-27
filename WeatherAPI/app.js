console.log("this is the weather API");

let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");

let name = document.getElementById("name");
let temperature = document.getElementById("temperature");
let details = document.getElementById("details");
let humidity=document.getElementById("humidity");
let windSpeed=document.getElementById("windSpeed");
submitBtn.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=319ac352287ffa6875f141b5bebd66bd')
        .then(response => response.json())
        .then(data => {
            var temperatureValue = data['main']['temp']
            var humidityValue = data['main']['humidity'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var windSpeedValue = data['wind']['speed'];

            name.innerHTML = nameValue;
            details.innerHTML = "Description - " + descValue;
            temperature.innerHTML = "Temperature(K) - " + temperatureValue;
            humidity.innerHTML="Humidity(%)-" + humidityValue;
            windSpeed.innerHTML="WindSpeed(m/s)-"+ windSpeedValue;
            userInput.value = "";


        })

        .catch(err => alert("Enter Correct city Name!"));



})

