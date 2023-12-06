import styles from './Forecast.module.css'
import Image from 'next/image'
import { format, parse } from 'date-fns'

interface ForecastProps {
    future: { date: string; day: { avgtemp_c: number; condition: { icon: string; }; }; }[];
}

export default function Forecast({ future }: ForecastProps) {
    return (
        <div className={styles.forecast}>
            <p>Next Forecast</p>
            <div className={styles.forecast_list}>
                {future.map((forecast: any) => (
                    <div key={forecast.date} className={styles.forecast_card} data-cy="next_forecast">
                        <p>{format(parse(forecast.date, 'yyyy-MM-dd', new Date()), 'PP')}</p>
                        <span>
                            <Image
                                src={`https:${forecast.day.condition.icon}`}
                                alt="forescast weather"
                                width={56}
                                height={56}
                                priority
                            />
                        </span>
                        <p>{forecast.day.avgtemp_c}°C</p>
                    </div>
                ))}
            </div>
        </div>
    )
}