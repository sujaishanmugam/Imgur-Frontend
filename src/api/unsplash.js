import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 75SNZRrvJe_w2HzDLoHa3R-BYD_OjaJasUsYIWLPjQ4"
    }
})