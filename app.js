// Get to DOM
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// Add an event listener to the search button
search.addEventListener('click', () => {
  // API Key for accessing OpenWeatherMap API
  const APIKey = '5e3b333900be12cbb82348148284fdf9';
  // Get the city name from the input field
  const city = document.querySelector('.search-box input').value;

  // If the input field is empty, return early and do nothing
  if (city === '') return;
  // Fetch weather data from the OpenWeatherMap API
  fetch(
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

      // Get DOM elements for various weather information
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector(
        '.weather-details .humidity span'
      );
      const wind = document.querySelector('.weather-details .wind span');

      // Show data. Set the weather image based on weather condition
      // https://www.w3schools.com/js/js_switch.asp
      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.png';
          break; // When JavaScript reaches a break keyword, it breaks out of the switch block.
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
});
