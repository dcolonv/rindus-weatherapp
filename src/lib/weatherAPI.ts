
const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function getDefaultIPWeather() {
    const respGeo = await fetch("https://geolocation-db.com/json/");
    const ip = await respGeo.json();

    const respForecastDay = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${ip.IPv4}&days=5`);
    const forecast = await respForecastDay.json();

    return forecast
}

export async function getLocationWeather(location?: string) {
    if (location) {
        const respForecastDay = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=5`);
        const forecast = await respForecastDay.json();
        return forecast
    }
}

export async function getOptionsAPI(search: string) {
    if (search) {
        const searchResult = await fetch(`http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${search}`);
        return await searchResult.json();
    }
    return []
}
