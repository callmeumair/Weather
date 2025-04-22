'use client';
import { useState } from 'react';
import styles from '../styles/WeatherCard.module.css';
import WeatherCard from './components/WeatherCard';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'cda3ca82864e45baa8c152157252204';

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert(err.message);
      setWeather(null);
    }
  };

  return (
    <main className={styles.app}>
      <h1>🌤 WeatherNow</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && <WeatherCard data={weather} />}
    </main>
  );
}
