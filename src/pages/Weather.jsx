import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import cities from '../data/cities'
import ForecastCard from '../components/ForecastCard'

function Weather() {
    const { city: cityName } = useParams();

    const city = cities.find((item) => {
        return item.name.toLowerCase() ===
            decodeURIComponent(cityName).toLowerCase()
    });

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setWeather(null);
        setError('');
        setLoading(true);

        if (!city) {
            setError('City not found.');
            setLoading(false);
            return;
        }

        async function getData() {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`
                );

                if (!response.ok) {
                    throw new Error('Unable to fetch weather data.');
                }

                const data = await response.json();

                setWeather(data);
            } catch (err) {
                setError('Unable to load weather. Please try again.');
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [city]);

    if (loading) {
        return (
            <div className="page-container">
                <p>Loading weather...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container">
                <h2>{error}</h2>
                <Link to='/cities' className="primary-button">
                    Back to Cities
                </Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            <Link to='/cities' className="back-link">
                ← Back to Cities
            </Link>

            <div className="weather-heading">
                <p className="eyebrow">CURRENT CONDITIONS</p>
                <h1>{city.name}, {city.state}</h1>
                <p>Here is your local weather forecast.</p>
            </div>

            <div className="weather-summary">
                <div className="weather-main">
                    <div className="weather-big-icon">☀️</div>

                    <h2>
                        {Math.round(weather.current.temperature_2m)}°C
                    </h2>

                    <p>Current Temperature</p>
                </div>

                <div className="weather-detail">
                    <h3>💨 Wind Speed</h3>

                    <p>
                        {weather.current.wind_speed_10m} km/h
                    </p>
                </div>
            </div>

            <section className="forecast-section">
                <h2>7-Day Forecast</h2>

                <div className="forecast-grid">
                    {weather.daily.time.map((date, index) => (
                        <ForecastCard
                            key={date}
                            date={date}
                            min={weather.daily.temperature_2m_min[index]}
                            max={weather.daily.temperature_2m_max[index]}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Weather