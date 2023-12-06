
"use client"
import { headers } from 'next/headers'
import { getDefaultIPWeather } from '@/lib/weatherAPI';
import styles from './page.module.css'
import WeatherApp from './WeatherApp';
import { useEffect } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <WeatherApp />
    </main>
  )
}
