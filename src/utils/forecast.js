const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=6482d623dbf455b694cad4cf43f3f7f9&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].main + '. It is currently ' + body.main.temp + ' °C at')
        }
    })
}
module.exports = forecast