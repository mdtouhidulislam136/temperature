
const API_key = `733fb616339f4a38b2215f5fb7c42f44`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    city.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCity(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayCity = data => {
    console.log(data);
    setInnerText('city', data.name);
    setInnerText('temperature', `Temperature: ${data.main.temp}`);
    setInnerText('condition', data.weather[0].main);
    setInnerText('humidity',`Humidity: ${ data.main.humidity}`);

    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

    

}