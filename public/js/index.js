window.onload=function(){
var button=document.getElementById('button')
console.log(button)
var weatherMain=document.getElementById('weatherMain')
console.log(weatherMain)
var weatherImage=document.getElementById('weatherImage')
console.log(weatherImage)
var cityInput=document.getElementById('cityInput')
console.log(cityInput)
var weatherDescription=document.getElementById('weatherDescription')
console.log(weatherDescription)
var weatherTemperature=document.getElementById('weatherTemperature')
console.log(weatherTemperature)
var weatherHumidity=document.getElementById('weatherHumidity')
console.log(weatherHumidity)
button.addEventListener("click",function(){
  var value = cityInput.value
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=6511d74abbfb46830276c670e2c11558", true)
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        weatherMain.innerHTML = data.weather[0].main;
        weatherDescription.innerHTML = data.weather[0].description;
        console.log("weatherTemperature", weatherTemperature)
        weatherTemperature.innerHTML = (data.main.temp-272.15).toFixed(0)+"<sup>o</sup>C"
        weatherHumidity.innerHTML = (data.main.humidity)+"%"

        var picturedescription = data.weather[0].main;
          var subdescription = data.weather[0].description;
          if(picturedescription.includes("Rain")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/rain.png");
          } else if(picturedescription.includes("Cloud") && subdescription.includes("clouds")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/cloudy.png");
          } else if(picturedescription.includes("Cloud")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/clouds.png");
          }else if(picturedescription.includes("Clear")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/clear.png");
          } else if(picturedescription.includes("Snow")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/snowflake.png");
          } else if(picturedescription.includes("Drizzle")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/rain.png");
          } else if(picturedescription.includes("Fog")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/smoke.png");
          }else {
            document.getElementById("weatherImage").setAttribute("src", "");
          }
      } else {
        console.error(xhr.statusText)
      }
    }
  }
  xhr.onerror = function (e) {
    console.error(xhr.statusText)
  }
  xhr.send(null)
})
}

// "&APPID=6511d74abbfb46830276c670e2c11558"
