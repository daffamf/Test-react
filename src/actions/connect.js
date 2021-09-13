import axios from 'axios'

export  const request =axios.create({
    baseURL : 'https://restcountries.eu/rest/v2/all',
    timeout:10000

});
