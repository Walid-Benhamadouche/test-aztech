const https = require('https')

const city = "Oran"
const countryCode = "dz" 

https.get("https://api.openweathermap.org/data/2.5/weather?q="+city+","+countryCode+"&units=metric&APPID=491a19b12ad86c07172e90d57650d0c3", res =>{
    
let data = []
    res.on('data', chunk => {
        data.push(chunk)
    })
    
    res.on('end', () => {
        const weatherData = JSON.parse(Buffer.concat(data).toString());
        console.log("The current temperature in "+city+" is "+weatherData.main.temp+
        " degrees. The weather is currently "+weatherData.weather[0].description)
    })
})