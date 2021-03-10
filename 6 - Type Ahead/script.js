const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpoint2 = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
const cities = [];

// 'fetch' returns a promise

// fetch blob and convert from raw data into JSON
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data)); 

function findMatches(wordToMatch, cities) {

    return cities.filter(place => {
        // Determine if city matches what was searched

        const regex = new RegExp(wordToMatch, 'gi'); // 'g' global look through entire string 'i' for case insensitive
        return place.city.match(regex) || place.state.match(regex);



    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        
        return `
        <li>
            <span class ="name">${place.city}, ${place.state}</span>
            <span class ="population">${place.population}</span>
        </li>`;

    }).join('');
    suggestions.innerHTML= html;

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
