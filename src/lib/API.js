const API_KEY = '2b41c42240b23851981f68f97cb4d099';
// const WEATHER_API_URL =   `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const WEATHER_API_URL =   `http://api.openweathermap.org/data/2.5/`;
const GEO_API_URL = `http://api.openweathermap.org/data/2.5/`;
const ADRESS_API_URL = `http://api.openweathermap.org/data/2.5/`;
const UNITS = `metric`;
const LANG = `FR`;

function getCoordinates(location) {
    return fetch(`${GEO_API_URL}weather?q=${location}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`)
    .then(response => response.json());

}

function getForecast(search) {
    return fetch(`${WEATHER_API_URL}weather?q=${search}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`)
    .then(response => response.json());
}

function getAdress(search) {
    return fetch(`${ADRESS_API_URL}weather?q=${search}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`)
    .then(response => response.json());
}
// function getForecast() {
//     console.log(API_URL);
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//     });
// }
export default {
    getForecast,
    getAdress,
    getCoordinates
};