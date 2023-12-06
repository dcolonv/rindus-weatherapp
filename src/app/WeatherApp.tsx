"use client";

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import TodayHourForecast from './TodayHourForecast';
import Forecast from './Forecast';
import { useCallback, useEffect, useState } from 'react';
import SearchCityDialog from './SearchCityDialog';
import { getDefaultIPWeather, getLocationWeather } from '@/lib/weatherAPI';


export default function WeatherApp() {
    const [openSearch, setOpenSearch] = useState(false);
    const [weather, setWeather] = useState<any>();


    const getDefaultWeather = async () => {
        const defaultWeather = await getDefaultIPWeather();
        setWeather(defaultWeather);
    }

    useEffect(() => {
        getDefaultWeather();
    }, []);


    const handleSearchOpen = useCallback(() => {
        if (typeof window != 'undefined' && window.document) {
            document.body.classList.add('modal_on');
        }
        setOpenSearch(true)
    }, []);

    const handleSearchClose = useCallback(() => {
        if (typeof window != 'undefined' && window.document) {
            document.body.classList.remove('modal_on');
        }
        setOpenSearch(false)
    }, []);

    const handleCityChange = async (location: any) => {
        const locWeather = await getLocationWeather(`id:${location.id}`);
        setWeather(locWeather);
    }

    if (weather) {
        const { location, current, forecast } = weather;
        const [today, ...future] = forecast.forecastday;
        const currentHour = new Date().getHours();
        const fromHour = currentHour - 2 >= 0 ? currentHour - 2 : currentHour;
        const todayHours = today.hour.slice(fromHour, fromHour + 5);

        return (
            <>
                <Header location={location} onSearch={handleSearchOpen} />
                <CurrentWeather current={current} />
                <TodayHourForecast todayHours={todayHours} />
                <Forecast future={future} />
                <SearchCityDialog open={openSearch} onClose={handleSearchClose} onSelectCity={handleCityChange} />
            </>
        )
    }

    return null;
}