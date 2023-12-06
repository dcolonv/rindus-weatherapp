

import { getDefaultIPWeather } from '@/lib/weatherAPI';
import styles from './page.module.css'
import WeatherApp from './WeatherApp';

export default async function Home() {
  const weather = await getDefaultIPWeather();

  return (
    <main className={styles.main}>
      <WeatherApp defaultWeather={weather} />
    </main>
  )
}
