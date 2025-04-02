const http = $fetch.create({
    baseURL: "http://api.weatherapi.com/v1",
    headers: {
        "Content-type": "application/json"
    },
});

export default http