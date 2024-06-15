import React, { useState } from 'react';
import './CourseSelection.css';
import searchIcon from './searchIcon.svg';
import defaultCourseImage from '../../../media/courses/courseImg1.png';
import infoIcon from './detailsArrow.svg';
import { FormattedMessage } from 'react-intl';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

function CourseSelection({ courses }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleDragStart = (event, course) => {
        const courseData = JSON.stringify(course);
        event.dataTransfer.setData("application/reactflow", courseData);
        event.dataTransfer.effectAllowed = "move";
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCourses = courses.filter(course => {
        return course.id.toLowerCase().includes(searchTerm) || course.title.toLowerCase().includes(searchTerm);
    });

    const browserLanguage = navigator.language.split(/[-_]/)[0]; // 'en', 'es', etc.
    const messages = {
        en: enMessages,
        es: esMessages
    };

    const localeMessages = messages[browserLanguage] || messages['en']; // Fallback to English

    return (
        <div className="course-selection">
            <h2 className="course-selection-title">
                 <FormattedMessage id="CourseSelection.courseSelection" defaultMessage="Course Selection" />
            </h2>
            <p className="course-selection-instruction">
                <FormattedMessage id="CourseSelection.instruction" defaultMessage="To add a course to your planner, drag it with the mouse." />
            </p>
            <div className="course-search">
                <input 
                    type="text" 
                    placeholder={localeMessages['CourseSelection.searchPlaceholder']}
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
                <button>
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>
            <div className="courses-container">
            {filteredCourses.map(course => (
                <div 
                    key={course.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, course)}
                    className="course-card"
                >
                    <div className="course-info">
                        <span className="info-icon">
                            <p id='moreDetailsP'>
                                <FormattedMessage id="CourseSelection.moreDetails" defaultMessage="Look more details" />
                            </p>
                            <img src={infoIcon} alt="Info" />
                            <div className="course-details">
                                <p><strong>ID:</strong> {course.id}</p>
                                <p><strong>
                                        <FormattedMessage id="Course.Title" defaultMessage="Title" />
                                        :
                                    </strong> {course.title}</p>
                                <p><strong>
                                        <FormattedMessage id="Course.Credits" defaultMessage="Credits" />
                                        :
                                    </strong> {course.credits}</p>
                                <p><strong>
                                        <FormattedMessage id="Course.Prerequisites" defaultMessage="Prerequisites" />
                                        :
                                    </strong> {course.prerequisites.join(', ')}</p>
                                <p><strong>
                                        <FormattedMessage id="Course.Corequisites" defaultMessage="Corequisites" />
                                        :
                                    </strong> {course.corequisites.join(', ')}</p>
                            </div>
                        </span>
                        <div 
                            className="course-image"
                            style={{ backgroundImage: `url(${course.imageUrl || defaultCourseImage})` }}
                        />
                        <h3>{course.id}</h3>
                        <p>{course.title}</p>
                        <p>{course.credits}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default CourseSelection;
