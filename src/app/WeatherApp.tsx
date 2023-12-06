"use client";

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import TodayHourForecast from './TodayHourForecast';
import Forecast from './Forecast';
import { useCallback, useState } from 'react';
import SearchCityDialog from './SearchCityDialog';
import { getLocationWeather } from '@/lib/weatherAPI';



interface WeatherAppProps {
    defaultWeather: {
        location: { name: string; country: string; };
        current: { temp_c: number; wind_kph: number; humidity: number; condition: { icon: string; text: string; } };
        forecast: {
            forecastday: {
                hour: { time: string; temp_c: number; condition: { icon: string; } }[];
                date: string; temp_c: number; day: { avgtemp_c: number; condition: { icon: string; }; };
            }[];
        };
    };
}

export default function WeatherApp({ defaultWeather }: WeatherAppProps) {
    const [openSearch, setOpenSearch] = useState(false);
    const [weather, setWeather] = useState(defaultWeather);

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
        console.log(weather)
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