const request = require('request')

let geocodeAddress=(address,callback)=>{
 address=encodeURIComponent(address)

  request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=zURPbHK25fztZXEffgQbSYfLLlGJCxPd&location=${address}`,
      json: true
  }, (error, response, body) => {
      // console.log('error',error)
      // console.log('response',response)
      // console.log('bodysss',body)
      if(error){
        callback("can't connect to the server")

      }else{
        let address=body.results[0].locations[0].street
        let lat = body.results[0].locations[0].latLng.lat
        let lng = body.results[0].locations[0].latLng.lng
        callback(undefined,{
          address,
          lat,
          lng
        })
      }
  });
}

module.exports.geocodeAddress=geocodeAddress
