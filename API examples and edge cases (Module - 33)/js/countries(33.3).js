const loadCountries = () => {
    fetch('https://restcountries.com/#api-endpoints-v3-all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesContainer = document.getElementById('countriesContainer')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.length[0] : 'No capital'}</p>

        ;`
        countriesContainer.appendChild(countryDiv)
    })
}

loadCountries();