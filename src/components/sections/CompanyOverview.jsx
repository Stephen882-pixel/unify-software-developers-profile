import React from "react";
import './CompanyOverview.css';

const CompanyOverview = () => {
    return(
        <section className="company-overview">
            <div className="container">
                <div className="overview-content">
                    <div className="overview-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2020, Unify Software Developers emerged from a simple vision: to bridge 
                            the gap between innovative technology and business success. What started as a small 
                            team of passionate developers has grown into a full-service digital solutions provider.
                        </p>
                        <p>
                            We believe that technology should empower businesses, not complicate them. Our approach 
                            combines technical excellence with a deep understanding of business needs, ensuring 
                            every solution we deliver drives real value.
                        </p>
                    </div>
                    <div className="overview-image">
                        <div
                            className="placeholder-image"
                            style={{background: 'linear-gradient(135deg, #FF6C37 0%, #ff8c5a 100%)'}}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default CompanyOverview;
