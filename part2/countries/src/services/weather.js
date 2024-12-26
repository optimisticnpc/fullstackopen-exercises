import axios from 'axios'

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = async (capital) => {

    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    const response1 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=1&appid=${api_key}`)
    console.log('response1:', response1)
    const lat = response1.data[0].lat
    const lon = response1.data[0].lon

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    console.log('response2:', response2)
    return response2.data
}

export default { getWeather }

