// Get DOM elements
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const inputField = document.querySelector('.search-box input'); // Get the input field

// Function to fetch weather data
function fetchWeatherData(city) {
  const APIKey = '5e3b333900be12cbb82348148284fdf9';

  fetch(
    // Fetch weather data from the OpenWeatherMap API
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sv&units=metric&appid=${APIKey}&lang={sv}`
  )
    .then((response) => response.json())
    .then((json) => {
      // Check if the API response indicates a 404 error (city not found)
      if (json.cod === '404') {
        // Display an error message and hide weather information
        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }
      // Hide the error message
      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector(
        '.weather-details .humidity span'
      );
      const wind = document.querySelector('.weather-details .wind span');
      // Show data. Set the weather image based on weather condition https://www.w3schools.com/js/js_switch.asp
      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.png';
          break;
        case 'Rain':
          image.src = 'images/rain.png';
          break;
        case 'Snow':
          image.src = 'images/snow.png';
          break;
        case 'Clouds':
          image.src = 'images/cloud.png';
          break;
        case 'Haze':
          image.src = 'images/mist.png';
          break;
        default:
          image.src = '';
      }
      // Display temperature, weather description, humidity, and wind speed
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      // Show weather information and set container height
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
      container.style.height = '590px';
    });
}

// Function to handle the search
function handleSearch() {
  const city = inputField.value.trim();

  if (city === '') return;

  fetchWeatherData(city);
}

// Add an event listener to the search button
search.addEventListener('click', handleSearch);

// Add an event listener to the input field for the Enter key
inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
});
