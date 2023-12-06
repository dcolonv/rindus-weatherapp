import styles from './TodayHourForecast.module.css'
import Image from 'next/image'
import { format, parse } from 'date-fns'

interface TodayHourForecastProps {
    todayHours: { time: string; temp_c: number; condition: { icon: string; } }[];
}

export default function TodayHourForecast({ todayHours }: TodayHourForecastProps) {
    return (
        <div className={styles.today_forecast_grid}>
            {todayHours.map((hourForecast: any) => {
                const hour = parse(hourForecast.time, 'yyyy-MM-dd HH:mm', new Date());
                const current = hour.getHours() === new Date().getHours();
                return (
                    <div key={hourForecast.time} className={`${styles.hour_forecast_card} ${current ? styles.current_hour : ''}`} data-cy="hour_forecast">
                        <p>
                            {hourForecast.temp_c}°C
                        </p>
                        <Image
                            src={`https:${hourForecast.condition.icon}`}
                            alt="Current weather"
                            width={56}
                            height={56}
                            priority
                        />
                        <p>
                            {format(hour, 'HH:mm')}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}