const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search.php?key=122ea8b16f0c0e&q=' + address + '&format=json'
    request({ url, json: true }, (error, { body }) => {
        //console.log(body)
        if (error) {
            callback('Unable to connect to internet.', undefined)
        } else if (body.error) {
            callback('Invalid location', undefined)

        } else {
            callback(undefined, {
                lat: body[0].lat,
                long: body[0].lon,
                location: body[0].display_name
            })

        }
    })
}
module.exports = geocode