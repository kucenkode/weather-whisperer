const instance = $fetch.create({
    baseURL: "http://api.weatherapi.com/v1",
    headers: {
        "Content-type": "application/json"
    }
});

const APIkey = useRuntimeConfig().private.weatherAPIkey;

export default {
    instance,
    APIkey
}