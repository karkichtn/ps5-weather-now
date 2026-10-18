import React from 'react'

function ForecastCard({ date, min, max }) {
    return (
        <div className="forecast-card">
            <h3>
                {new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
                    weekday: 'short'
                })}
            </h3>

            <p>
                {new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short'
                })}
            </p>

            <div className="forecast-icon">🌤️</div>

            <p>Min: {Math.round(min)}°C</p>
            <p>Max: {Math.round(max)}°C</p>
        </div>
    )
}

export default ForecastCard