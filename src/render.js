import getWeather from './weather-data';
import clearDay from './images/clear-day.png';
import clearNight from './images/clear-night.png';
import rain from './images/rain.png';
import partlyCloudyDay from './images/partly-cloudy-day.png';
import partlyCloudyNight from './images/partly-cloudy-night.png';
import snow from './images/snow.png';
import fog from './images/fog.png';

export default async function render(location) {
  const weatherData = await getWeather(location);
  const locationNameContainer = document.querySelector(
    '.location-name-container',
  );
  const locationName = document.createElement('h2');
  locationName.innerText = weatherData.location;
  locationNameContainer.appendChild(locationName);

  const locationTimeContainer = document.querySelector(
    '.location-time__heading',
  );
  const locationTime = document.createElement('h2');
  locationTime.innerText = weatherData.currentConditions.dateTime;
  locationTimeContainer.appendChild(locationTime);

  const sunriseTimeContainer = document.querySelector(
    '.sunrise-time-container',
  );
  const sunriseTime = document.createElement('p');
  sunriseTime.innerText = weatherData.weather.sunrise;
  sunriseTimeContainer.appendChild(sunriseTime);

  const sunsetTimeContainer = document.querySelector('.sunset-time-container');
  const sunsetTime = document.createElement('p');
  sunsetTime.innerText = weatherData.weather.sunset;
  sunsetTimeContainer.appendChild(sunsetTime);

  const currentTemperatureContainer = document.querySelector(
    '.current-temperature-container',
  );
  const currentTemp = document.createElement('p');
  currentTemp.innerText = weatherData.weather.temp;
  currentTemperatureContainer.appendChild(currentTemp);

  const feelsLikeContainer = document.querySelector(
    '.feels-like-temperature-container',
  );
  const feelsLike = document.createElement('p');
  feelsLike.innerText = weatherData.currentConditions.feelslike;
  feelsLikeContainer.appendChild(feelsLike);

  const minTemperatureContainer = document.querySelector(
    '.min-temperature-container',
  );
  const minTemp = document.createElement('p');
  minTemp.innerText = weatherData.weather.tempmin;
  minTemperatureContainer.appendChild(minTemp);

  const maxTemperatureContainer = document.querySelector(
    '.max-temperature-container',
  );
  const maxTemp = document.createElement('p');
  maxTemp.innerText = weatherData.weather.tempmax;
  maxTemperatureContainer.appendChild(maxTemp);

  const windSpeedContainer = document.querySelector('.wind-container');
  const windSpeed = document.createElement('p');
  windSpeed.innerText = weatherData.currentConditions.windspeed;
  windSpeedContainer.appendChild(windSpeed);
  const image = document.createElement('img');
  image.alt = 'Weather-icon';
  switch (weatherData.currentConditions.icon) {
    case 'clear-day':
      image.src = clearDay;
      break;
    case 'clear-night':
      image.src = clearNight;
      break;
    case 'fog':
      image.src = fog;
      break;
    case 'partly-cloudy-day':
      image.src = partlyCloudyDay;
      break;
    case 'partly-cloudy-night':
      image.src = partlyCloudyNight;
      break;
    case 'rain':
      image.src = rain;
      break;
    case 'snow':
      image.src = snow;
      break;
    default:
      image.style.display = 'none';
      break;
  }
  const imageContainer = document.querySelector('.content__img-container');
  imageContainer.appendChild(image);
}
