
import styles from './CurrentWeather.module.css'
import Image from 'next/image'
import { format } from 'date-fns'
import { BsDroplet, BsWind } from 'react-icons/bs'

interface CurrentWeatherProps {
    current: { temp_c: number; wind_kph: number; humidity: number; condition: { icon: string; text: string; } };
}

export default function CurrentWeather({ current }: CurrentWeatherProps) {
    return (
        <div>
            <div className={styles.center}>
                <Image
                    className={styles.current_weather_img}
                    src={`https:${current.condition.icon}`}
                    alt="Current weather"
                    width={192}
                    height={192}
                    priority
                />
            </div>

            <div className={styles.current_weather_card}>
                <p className={styles.current_weather_card_date}>Today, {format(new Date(), "PPP")}</p>
                <p className={styles.current_weather_card_temperature}>{current.temp_c}°C</p>
                <p className={styles.current_weather_card_label}>{current.condition.text}</p>
                <div className={styles.current_weather_card_grid}>
                    <div className={styles.current_weather_card_item}>
                        <BsWind size="1.4rem" />
                        <p>Wind</p>
                    </div>
                    |
                    <div className={styles.current_weather_card_item}>
                        <p>{current.wind_kph} km/h</p>
                    </div>
                    <div className={styles.current_weather_card_item}>
                        <BsDroplet size="1.4rem" />
                        <p>Hum</p>
                    </div>
                    |
                    <div className={styles.current_weather_card_item}>
                        <p>{current.humidity}%</p>
                    </div>
                </div>
            </div>

        </div>
    )
}