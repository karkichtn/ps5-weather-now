import React from 'react'
import { Link } from "react-router-dom";

function CityCard({ city }) {
    return (
        <div className="city-card">
            <div className="city-icon">🌤️</div>

            <h2>{city.name}</h2>
            <p>{city.state}</p>

            <Link to={`/weather/${encodeURIComponent(city.name)}`}>
                Check Weather →
            </Link>
        </div>
    )
}

export default CityCard