import React, { useState } from 'react';
import './Sidebar.css';

const Filters = (props) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilterOptions = (id) => {
    setActiveFilter(activeFilter === id ? null : id);
  };

  return (
    <div className="filter-content">
      <h2>Filter By <span style={{ float: "right", color: "green", cursor: "pointer" }}>Reset Filters</span></h2>

      <div className="filter-group">
        <label>State</label>
        <select>
          <option>Maharashtra</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Ministry Name</label>
        <select>
          <option>Ministry of Agriculture and Farming</option>
        </select>
      </div>

      <div className="filter-group" onClick={() => toggleFilterOptions('Residence')}>
        <label>Residence</label>
        <div className={`filter-options ${activeFilter === 'Residence' ? 'active' : ''}`}>
          <label><input type="checkbox" onChange={() => {props.setResidence("Both")}} /> Both</label>
          <label><input type="checkbox" onChange={() => {props.setResidence("Rural")}}/> Rural</label>
        </div>
      </div>
      <div className="filter-group" onClick={() => toggleFilterOptions('Benefit Type')}>
        <label>Benefit Type</label>
        <div className={`filter-options ${activeFilter === 'Benefit Type' ? 'active' : ''}`}>
          <label><input type="checkbox" onChange={() => {props.setBenefit("Cash")}}/> Cash</label>
          <label><input type="checkbox" onChange={() => {props.setBenefit("Composite")}}/> Composite</label>
          <label><input type="checkbox" onChange={() => {props.setBenefit("In Kind")}}/>In Kind</label>
        </div>
      </div>

      <div className="filter-group" onClick={() => toggleFilterOptions('DBT Scheme')}>
        <label>DBT Scheme</label>
        <div className={`filter-options ${activeFilter === 'DBT Scheme' ? 'active' : ''}`}>
          <label><input type="checkbox" onChange={() => {props.setDbt("No")}}/> No</label>
          <label><input type="checkbox" onChange={() => {props.setDbt("Yes")}}/> Yes</label>
        </div>
      </div>
      <div className="filter-group" onClick={() => toggleFilterOptions('Application Mode')}>
        <label>Application Mode</label>
        <div className={`filter-options ${activeFilter === 'Application Mode' ? 'active' : ''}`}>
          <label><input type="checkbox" onChange={() => {props.setMode("Offline")}} />Offline</label>
          <label><input type="checkbox" onChange={() => {props.setMode("Online")}}  />Online</label>
        </div>
      </div>

    </div>
  );
};

export default Filters;
