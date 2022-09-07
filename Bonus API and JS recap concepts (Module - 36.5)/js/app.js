// Do not show your API keys in production level

const API_KEY = `3236e8112758b38a5e22378425ae7b00`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    console.log(data);
}

document.getElementById('btn-search').addEventListener('click', function () { 
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);

}
loadTemperature('Dhaka');