const request = require('request')

const API_KEY="ceb100aea3636ba09d7913191c3dbdc4"

let getWeather=(lat,lng,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
    json:true},(error,response,body)=>{
      if (!error&&response.statusCode===200) {
        callback(undefined,{
          temperature:body.currently.temperature,
          apparentTemperature:body.currently.apparentTemperature
        })}else {
        callback("can't connect to forecast.io")
      }
    })
}

module.exports.getWeather=getWeather
