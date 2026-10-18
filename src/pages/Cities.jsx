import React, { useState } from 'react'
import cities from '../data/cities'
import CityCard from '../components/CityCard'

function Cities() {
    const [search, setSearch] = useState('');

    const filteredCities = cities.filter((city) => {
        return city.name.toLowerCase().includes(search.toLowerCase()) ||
            city.state.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <div className="page-container">
            <div className="page-heading">
                <p className="eyebrow">EXPLORE INDIA</p>
                <h1>Choose your city</h1>
                <p>Find the weather conditions in your city.</p>
            </div>

            <input
                type="text"
                placeholder="Search city or state..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            <div className="city-grid">
                {filteredCities.length > 0 ? (
                    filteredCities.map((city) => (
                        <CityCard key={city.name} city={city} />
                    ))
                ) : (
                    <p>No cities found.</p>
                )}
            </div>
        </div>
    )
}

export default Cities