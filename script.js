const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const feels_like = document.getElementById("feels_like");
const wind_speed = document.getElementById("wind_speed");
const cityName = document.getElementById("cityName");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c47dd501bbmsh902e3e1df1e4a71p17356ejsn0b5910eba61f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


// fetching API, get data from JSON
const getWeather = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			return showWeather(response)
		})
		.catch(err =>
			console.error(err)
		)
}

// default text showing before getting weather of city
weather.innerHTML = `<h3 style="color:white; padding: 20px 5px;">Search and get the live weather of any city...!</h3>`


const showWeather = (response) => {
	// If the city doesn't exist in API then showing error
	if (response.error == 'An unexpected error occured.') {
		weather.innerHTML = `<h3 style="color:red; padding-top: 20px;">${city.value} city doesn't found</h3>`;
		return;
	}
	else {
		// Displaying weather on screen
		weather.innerHTML = `<div class="col-1">
		<img src="img/cloud.png" alt="">
		<div class="weather-info">
			<div class="col-1-1">
				<span class="num" id="temp">${response.temp}</span>
				<span class="deg"> &#176C</span>
			</div>
			<div class="col-1-2">
				<span class="city" id="cityName">${city.value}</span>
			</div>
		</div>
	</div>
	<div class="col-2">
	   <div class="weather-details">
			<h3>Weather Details</h3>
			<div class="w-bottom">
				<ul>
					<li>Humidity: <span id="humidity">${response.humidity}</span>%</li>
					<li>Feels like: <span id="feels_like">${response.feels_like}</span>&#176C</li>
					<li>Wind: <span id="wind_speed"></span>${response.wind_speed} km/h</li>
				</ul>
			</div>
	   </div>
	</div>`;
	}
}

// Search other city weather
searchCity.addEventListener("click", (event) => {
	event.preventDefault()
	weather.innerHTML = `<h3 style="color:white; padding: 20px 5px;">Wait a sec...!</h3>`
	getWeather(city.value)
})
