import styles from '../../styles/WeatherCard.module.css';

export default function WeatherCard({ data }) {
  return (
    <div className={`${styles.card} ${styles.animate}`}>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>🌡 Temp: {data.main.temp}°C</p>
      <p>🌦 {data.weather[0].description}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
    </div>
  );
}
