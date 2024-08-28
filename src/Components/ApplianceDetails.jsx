import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { HeaderCard } from './HeaderCard';
import Breadcrumb from './BreadCrumb';
import LowerCard from './LowerCard';
function ApplianceDetails() {
    const { serialNo } = useParams();  // Extract serial number from URL
    const location = useLocation();
    console.log(location);
    // const [appliance, setAppliance] = useState(location.state?.appliance || null);  // Initialize with passed state if available if not pass null 
    const [error, setError] = useState(null);
    const [appliance, setAppliance] = useState(location.state.appliance); 
    useEffect(() => {
        
            if (!appliance) {
                const fetchData = async () => {
                    try {
                        const response = await axios.get(`http://localhost:9000/api/appliances/${serialNo}`);
                        setAppliance(response.data);
                    } catch (err) {
                        setError('Failed to fetch device details.');
                    } 
                };
                fetchData();
            }
    }, [serialNo, appliance]);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;
    if (!appliance) return <div>Loading....</div>;

    return (
        <div className='device-dttail'>
            <Breadcrumb appliance={appliance} />
            <HeaderCard appliance={appliance} />
            <LowerCard appliance={appliance}  /> 
        </div>
    );
}

export default ApplianceDetails;
