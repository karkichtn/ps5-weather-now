import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <section className="hero">
                <p className="eyebrow">YOUR DAILY WEATHER GUIDE</p>

                <h1>
                    Weather made <span>simple.</span>
                </h1>

                <p className="hero-text">
                    Explore current weather and a seven-day forecast
                    for Indian cities.
                </p>

                <Link to='/cities' className="primary-button">
                    Check Weather →
                </Link>

                <div className="hero-icon">⛅</div>
            </section>

            <section className="home-info">
                <h2>Plan your day with confidence.</h2>

                <p>
                    Choose your city to check the temperature,
                    wind speed, and weekly forecast.
                </p>
            </section>
        </div>
    )
}

export default Home