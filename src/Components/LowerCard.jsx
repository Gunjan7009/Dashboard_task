import React from 'react';
import './Header.css';

const LowerCard = ({ appliance }) => {
    const { city, state, country } = appliance.location || {}; 

    return (
        <div className="device-info">
            <div className="info-grid">
                <div className="info-item">
                    <span className="label">Device Serial</span>
                    <span className="value">{appliance.serialNo}</span>
                </div>
                <div className="info-item">
                    <span className="label">Location</span>
                    {/* Display a formatted string combining city, state, and country */}
                    <span className="value">{`${city}, ${state}, ${country}`}</span>
                </div>
                <div className="info-item">
                    <span className="label">City</span>
                    <span className="value">{city}</span>
                </div>
                <div className="info-item">
                    <span className="label">ISP Payment Responsibility</span>
                    <span className="value">{appliance.ispPaymentResponsibility}</span>
                </div>
                <div className="info-item">
                    <span className="label">Bandwidth</span>
                    <span className="value">{appliance.bandwidth}</span>
                </div>
                <div className="info-item">
                    <span className="label">Average Bandwidth</span>
                    <span className="value">{appliance.avgBandwidth}</span>
                </div>
                <div className="info-item">
                    <span className="label">Plan Start Date</span>
                    <span className="value">{appliance.planStartDate}</span>
                </div>
                <div className="info-item">
                    <span className="label">Billing Cycle</span>
                    <span className="value">{appliance.billingCycle}</span>
                </div>
                <div className="info-item">
                    <span className="label">Download Status</span>
                    <span className="value">{appliance.downloadStatus}</span>
                </div>
                <div className="info-item">
                    <span className="label">OS Version</span>
                    <span className="value">{appliance.osVersion}</span>
                </div>
                <div className="info-item">
                    <span className="label">Storage Available</span>
                    <span className="value">{appliance.storage}</span>
                </div>
            </div>
        </div>
    );
};

export default LowerCard;
