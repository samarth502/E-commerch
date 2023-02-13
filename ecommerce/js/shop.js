const showapi  = () =>{
    
    const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");

const options = {
  method: 'POST',
  url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}