import React, { useState } from 'react';
import './App.css'; 

const UserPage = () => {
    const [search, setSearch] = useState('');
    const [jobData, setJobData] = useState(() => {
        const storedData = localStorage.getItem('jobData');
        return storedData ? JSON.parse(storedData) : null;
    });
    const [applied, setApplied] = useState(false);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleApplyToggle = () => {
        setApplied(!applied);
    };
    const isJobVisible = jobData && jobData.title.toLowerCase().includes(search.toLowerCase());

    return (
        <div className="user-container">
            <h2>Job Listing</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by job title"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            {isJobVisible ? (
                <div className="job-details">
                    <h3>{jobData.title}</h3>
                    <p><strong>Company:</strong> {jobData.company}</p>
                    <p><strong>Description:</strong> {jobData.description}</p>
                    <p><strong>Experience:</strong> {jobData.experience}</p>
                    <p><strong>Salary:</strong> {jobData.salary}</p>
                    <p><strong>Location:</strong> {jobData.location}</p>
                    <button onClick={handleApplyToggle}>
                        {applied ? 'Applied' : 'Apply Now'}
                    </button>
                </div>
            ) : (
                <p>No job found matching your search criteria.</p>
            )}
        </div>
    );
};

export default UserPage;
