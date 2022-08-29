const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries);
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesContainer = document.getElementById('countriesContainer')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
}

const loadCountryDetail = () => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country');
    // console.log(url);
    fetch(url)
        .then(res => res.json())
    .then(data => console.log(data))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('countryDetail');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries();