import React from 'react';
import './Profile.css';
import Header from '../semesterPlanner/header/Header';

function Profile() {
    return (

        <div>
            <Header />
            <div className="profile-container">
                <div className="profile-card">
                    <img src='icons/dolphin.ico' alt="Profile" className="profile-image" />
                    <h2 className="profile-name">John Doe</h2>
                    <p className="profile-title">Software Engineer</p>
                    <p className="profile-bio">Passionate about coding, AI, and robotics. Loves to travel and explore new technologies.</p>
                    <div className="profile-details">
                        <p><strong>Email:</strong> fai.ahertz@pensum-tracker.com</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Location:</strong> Bogota, Colombia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Profile };
