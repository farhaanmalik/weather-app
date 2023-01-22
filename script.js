const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c47dd501bbmsh902e3e1df1e4a71p17356ejsn0b5910eba61f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city 
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

// Searching other location weather
searchCity.addEventListener("click", (event) => {
	event.preventDefault()
	if(city.value == ""){
		alert("Write a city name !")
	}
	else{
		getWeather(city.value);
	}
	myForm.reset()
})

// Default location Lucknow
getWeather("Lucknow"); 


// Getting current date 
const currentDate = () => {
	let date = new Date();
	let month = date.getMonth();
	let curr_date = date.getDate();
	let year = date.getFullYear();
	let month_name = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	curr_date = updateTime(curr_date);
	document.querySelector("#full__date").innerHTML = `${curr_date} ${month_name[month]}, ${year}`;
}
function updateTime(date) {
	  return date;
}
currentDate()