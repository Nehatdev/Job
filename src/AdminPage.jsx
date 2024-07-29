import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AdminPage = () => {
    const [job, setJob] = useState({
        title: '',
        company: '',
        experience: '',
        salary: '',
        location: ''
    });

    const handleChange = (event) => {
        setJob({ ...job, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/jobs', job);
            alert('Job created successfully!');
            console.log(response.data);
            
            // Store job data in localStorage
            localStorage.setItem('jobData', JSON.stringify(job));
        } catch (error) {
            console.error('Error creating job:', error.response ? error.response.data : error.message);
            alert('Failed to create job.');
        }
    };

    return (
        <div className="admin-container">
            <h2>Create Job Listing</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={job.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={job.company}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="experience">Experience:</label>
                <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={job.experience}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="salary">Salary:</label>
                <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={job.salary}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={job.location}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdminPage;
