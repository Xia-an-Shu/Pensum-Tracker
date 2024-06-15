// CourseCard.js

import React from 'react';
import './CourseCard.scss';

function CourseCard({ id, title, credits, isSelected, onClick }) {
    return (
        <div id="main-container">
            <div className={`course-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(id)}>
                <div className="course-title">{title}</div>
                <div className="course-code">{id}</div>
                <div className="course-credits">{credits}</div>
            </div>
        </div>
    );
}

export default CourseCard;
