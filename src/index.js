import './styles.css';
import getWeather from './weather-data';
import events from './events';

getWeather('London, UK');

const handleEvents = events();

handleEvents.search();

handleEvents.toggleTemp();
