const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    //console.log(countriesHTML);

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    console.log(country);
    return `
        <div class="country" style="border: 2px solid red;">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.svg}" width="230px">
        <img src="${country.coatOfArms.svg}" width="230px">
        </div>
    `
}

loadCountries();