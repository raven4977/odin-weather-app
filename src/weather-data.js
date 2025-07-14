export default async function getWeather(location, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=FVEHGEC5HH58QLVUQYFAZN2VJ`,
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const weatherData = await response.json();
    if (weatherData.address === 'undefined') {
      return null;
    }
    return {
      location: weatherData.resolvedAddress,
      currentConditions: weatherData.currentConditions,
      weather: weatherData.days[0],
    };
  } catch (error) {
    return null;
  }
}
