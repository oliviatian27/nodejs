const request = require('request')

let geocodeAddress=(address)=>{
  return  new Promise(function(resolve, reject) {
    address=encodeURIComponent(address)

    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=zURPbHK25fztZXEffgQbSYfLLlGJCxPd&location=${address}`,
      json: true
    }, (error, response, body) => {
      if(error){
        reject("can't connect to the server")

      }else{
        let address=body.results[0].locations[0].street
        let lat = body.results[0].locations[0].latLng.lat
        let lng = body.results[0].locations[0].latLng.lng
        resolve({
          address,
          lat,
          lng
        })
      }
    });

  });
}

geocodeAddress('11005').then(res=>{
  console.log(res)
}).catch(error=>{
  console.log(error)
})
