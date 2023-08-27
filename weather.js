const CityName = document.getElementById('city-name');
const WeatherType = document.getElementById('weather-type');
const Temp = document.getElementById('temp');
const MinTemp = document.getElementById('min-temp');
const MaxTemp = document.getElementById('max-temp');
const SearchButton = document.getElementById('searchbutton');
const CityInput = document.getElementById('city-input');

getWeatherData = async (city) => {
	const url = `https://open-weather13.p.rapidapi.com/city`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '881d084590mshcd44a782c5a2377p1578f3jsnddfe504cc3ab',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
		},
	};

	try {
		const URL = `${url}/${city}`;
		const response = await fetch(URL, options);
		const result = await response.json();
		showWeatherData(result);
		return result;
	} catch (error) {
		return error;
	}
};

const searchCity = (name) => {
	getWeatherData(name);
};

SearchButton.onclick = () => searchCity(CityInput.value);

const showWeatherData = (weatherData) => {
	CityName.innerHTML = `${weatherData.name}`;
	WeatherType.innerHTML = `${weatherData.weather[0].main}`;
	Temp.innerHTML = `${weatherData.main.temp}`;
	MinTemp.innerHTML = `${weatherData.main.temp_min}`;
	MaxTemp.innerHTML = `${weatherData.main.temp_max}`;
};
