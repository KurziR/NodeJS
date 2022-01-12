const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0c03df49f614b5a07171a507c1e4b9a1&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback("Unable to connect to location services!", undefined)
        } else if (body.error){
            callback("Unable to find location. Try another search...", undefined)
        } else {
            callback(undefined, "It is currently "+ body.current.temperature +" degrees out")
        }
    })
}

module.exports = forecast