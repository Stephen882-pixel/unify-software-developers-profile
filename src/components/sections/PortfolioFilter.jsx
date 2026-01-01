import React from "react";
import './PortfolioFilter.css';

const PortfolioFilter = ({ activeFilter, onFilterChange }) => {
    const filters = ['all','web','mobile','cloud'];

    return(
        <section className="portfolio-filter">
            <div className="container">
                <div className="filter-buttons">
                    {filters.map((filter,index) => (
                        <button
                        key={index}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => onFilterChange(filter)}
                        >
                            {filter === 'all' ? 'All Projects':
                            filter === 'web' ? 'Web Apps':
                            filter === 'mobile' ? 'Mobile Apps' : 'Cloud Projects'
                            }
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioFilter;

