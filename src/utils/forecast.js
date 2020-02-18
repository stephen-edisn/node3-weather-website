const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5e2fac99e8f6d0c321f6112c4ffc1290/'+ encodeURIComponent(longitude) +','+ encodeURIComponent(latitude) +'?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location(error in coordinates)', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh +' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability * 100 + '% chance of rain.')
        }
    })
}

module.exports = forecast