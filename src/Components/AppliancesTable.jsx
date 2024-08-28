import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Appliances.css";
import SearchPagination from "./SearchPagination";
import DeviceHeader from "./DeviceHeader";
import StatusSummary from "./StatusSummary";

const AppliancesTable = () => {
  const [appliances, setAppliances] = useState([]);
  const [filteredAppliances, setFilteredAppliances] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/appliances"
        );
        if (response.status === 200) {
          const data = response.data;

          const appliancesData = Array.isArray(data)
            ? data
            : Array.isArray(data.appliances)
            ? data.appliances
            : [];
          setAppliances(appliancesData);
          setFilteredAppliances(appliancesData);
        } else {
          throw new Error("API request failed");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAppliances([]);
        setFilteredAppliances([]);
      }
    };

    fetchData();
  }, []);

  

  const handleViewClick = (appliance) => {
    if (appliance) {
      navigate(`/${appliance.serialNo}`, { state: { appliance } });
    } else {
      console.error("Device is undefined");
    }
  };

  return (
    <div>
      <DeviceHeader />
      <StatusSummary />
      <div className="device-table-container">
        <SearchPagination
          data={appliances}
          setFilteredData={setFilteredAppliances}
        />
        <table className="device-table">
          <thead>
            <tr>
              <th>Device Serial</th>
              <th>Location</th>
              <th>Bandwidth</th>
              <th>Status</th>
              <th>Download Status</th>
              <th>OS Version</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppliances.map((appliance) => (
              <tr key={appliance.serialNo}>
                <td>{appliance.serialNo}</td>
                <td>
                  {appliance.theatreName}
                  <br />
                  <span className="sub-location">
                    {appliance.location.city}, {appliance.location.state},{" "}
                    {appliance.location.country}
                  </span>
                </td>
                <td>
                  {appliance.bandwidth}
                  <br />
                  <span className="sub-bandwidth">
                    {appliance.avgBandwidth}
                  </span>
                </td>
                <td>
                  <span
                    className={`status-indicators ${appliance.deviceStatus.toLowerCase()}-indicator`}
                  ></span>
                  <span className={`status ${appliance.deviceStatus}`}>
                    {appliance.deviceStatus}
                  </span>
                </td>
                <td>
                  <span
                    className={`download-status ${appliance.downloadStatus.toLowerCase()}-indicator`}
                  ></span>
                  <span className={`download ${appliance.downloadStat}`}>
                    {appliance.downloadStatus}
                  </span>
                </td>
                <td>{appliance.osVersion}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => handleViewClick(appliance)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliancesTable;
