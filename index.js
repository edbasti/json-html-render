var key = 'a295dc27c5b352fd8361acde7dcbffe7';
var weatherData = document.getElementById("weather_data");

weatherData.addEventListener('click',function(e){
  e.preventDefault();
  var cityName = document.getElementById("cityName").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + key;
    if(cityName == ""){
        alert("Enter a city name");
    }else{
    fetch(url).then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error(Error);
        }
    }).then(function(data){
      drawWeather(data); // Call drawWeather
    }).catch(function(error){
        console.log(error);
    });
    }
  });

function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var description = d.weather[0].description;
  
  document.getElementById('description').innerHTML = description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
    document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
    document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
    document.body.className = 'sunny';
  }
}