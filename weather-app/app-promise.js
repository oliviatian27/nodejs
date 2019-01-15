
const yargs = require('yargs')
const axios = require('axios')
const API_KEY="ceb100aea3636ba09d7913191c3dbdc4"

const argv=yargs.options({
    a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      string:true
    }
  }).help()
  .alias('help','h')
  .argv

let address =encodeURIComponent(argv.address)
let url=`http://www.mapquestapi.com/geocoding/v1/address?key=zURPbHK25fztZXEffgQbSYfLLlGJCxPd&location=${address}`

axios.get(url)
  .then(res=>{
    let address=res.data.results[0].locations[0].street
    let lat = res.data.results[0].locations[0].latLng.lat
    let lng = res.data.results[0].locations[0].latLng.lng
    let weatherUrl=`https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`
    return axios.get(weatherUrl)
  }).then(res=>{
    let temperature=res.data.currently.temperature
    let apparentTemperature=res.data.currently.apparentTemperature
    console.log(`It's currently ${temperature},It feels like ${apparentTemperature} `)
  }).catch(e=>{
    if (e.code==='ENOTFOUND') {
      console.log('unable to connect to api')
    }else {
      console.log(e)
    }
  })
