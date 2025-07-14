import getWeather from './weather-data';
import clearDay from './images/clear-day.png';
import clearNight from './images/clear-night.png';
import rain from './images/rain.png';
import partlyCloudyDay from './images/partly-cloudy-day.png';
import partlyCloudyNight from './images/partly-cloudy-night.png';
import snow from './images/snow.png';
import fog from './images/fog.png';

export default async function render(location, unit) {
  const weatherData = await getWeather(location, unit);
  const errorMsg = document.querySelector('.error-msg');
  if (!weatherData) {
    errorMsg.innerText = 'Please insert a valid location';
    return;
  }
  errorMsg.innerText = '';
  const locationNameContainer = document.querySelector(
    '.location-name-container',
  );
  locationNameContainer.innerHTML = '';
  const locationName = document.createElement('h2');
  locationName.innerText = weatherData.location;
  locationNameContainer.appendChild(locationName);

  const locationTimeContainer = document.querySelector(
    '.location-time__heading',
  );
  locationTimeContainer.innerHTML = '';
  const locationTime = document.createElement('h2');
  locationTime.innerText = weatherData.currentConditions.datetime;
  locationTimeContainer.appendChild(locationTime);

  const sunriseTimeContainer = document.querySelector(
    '.sunrise-time-container',
  );
  sunriseTimeContainer.innerHTML = '';
  const sunriseTimeTitle = document.createElement('p');
  sunriseTimeTitle.innerText = 'Sunrise:';
  const sunriseTime = document.createElement('p');
  sunriseTime.innerText = weatherData.weather.sunrise;
  sunriseTimeContainer.append(sunriseTimeTitle, sunriseTime);

  const sunsetTimeContainer = document.querySelector('.sunset-time-container');
  sunsetTimeContainer.innerHTML = '';
  const sunsetTimeTitle = document.createElement('p');
  sunsetTimeTitle.innerText = 'Sunset:';
  const sunsetTime = document.createElement('p');
  sunsetTime.innerText = weatherData.weather.sunset;

  sunsetTimeContainer.append(sunsetTimeTitle, sunsetTime);

  const currentTemperatureContainer = document.querySelector(
    '.current-temperature-container',
  );
  currentTemperatureContainer.innerHTML = '';
  const currentTempTitle = document.createElement('p');
  currentTempTitle.innerText = 'Current Temperature:';
  const currentTemp = document.createElement('p');
  currentTemp.innerText = weatherData.weather.temp;
  currentTemperatureContainer.append(currentTempTitle, currentTemp);

  const feelsLikeContainer = document.querySelector(
    '.feels-like-temperature-container',
  );
  feelsLikeContainer.innerHTML = '';
  const feelsLikeTitle = document.createElement('p');
  feelsLikeTitle.innerText = 'Feels Like:';
  const feelsLike = document.createElement('p');
  feelsLike.innerText = weatherData.currentConditions.feelslike;
  feelsLikeContainer.append(feelsLikeTitle, feelsLike);

  const minTemperatureContainer = document.querySelector(
    '.min-temperature-container',
  );
  minTemperatureContainer.innerHTML = '';
  const minTemperatureTitle = document.createElement('p');
  minTemperatureTitle.innerText = 'Minimum:';
  const minTemp = document.createElement('p');
  minTemp.innerText = weatherData.weather.tempmin;
  minTemperatureContainer.append(minTemperatureTitle, minTemp);

  const maxTemperatureContainer = document.querySelector(
    '.max-temperature-container',
  );
  maxTemperatureContainer.innerHTML = '';
  const maxTemperatureTitle = document.createElement('p');
  maxTemperatureTitle.innerText = 'Maximum:';
  const maxTemp = document.createElement('p');
  maxTemp.innerText = weatherData.weather.tempmax;
  maxTemperatureContainer.append(maxTemperatureTitle, maxTemp);

  const windSpeedContainer = document.querySelector('.wind-container');
  windSpeedContainer.innerHTML = '';
  const windSpeedTitle = document.createElement('p');
  windSpeedTitle.innerText = 'Wind Speed:';
  const windSpeed = document.createElement('p');
  windSpeed.innerText = weatherData.currentConditions.windspeed;
  windSpeedContainer.append(windSpeedTitle, windSpeed);
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
  imageContainer.innerHTML = '';
  imageContainer.appendChild(image);
}
