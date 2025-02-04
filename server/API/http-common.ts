const http = {
    instance: $fetch.create({
        baseURL: "http://api.weatherapi.com/v1",
        headers: {
            "Content-type": "application/json"
        }
    }),
    APIkey: useRuntimeConfig().private.weatherAPIkey
};

export default http