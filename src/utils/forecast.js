const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e21db476755b4c5644a61cb79fa8e5b4&query=${longitude, latitude}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect weather service!");
        } else if (body.error) {
            callback("Unable to find location!");
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast