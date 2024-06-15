// SemesterPlanner.js

import React, { useState } from 'react';
import Header from './header/Header';   
import Planner from './planner/Planner';
import CourseSelection from './courseSelection/CourseSelection';
import { coursesData } from '../../testData/coursesData';
import './SemesterPlanner.scss';
import LanguageWrapper from './i18n/LanguageWrapper';

function SemesterPlanner() {
    const [selectedCourses, setSelectedCourses] = useState([]);

    // Function to handle adding a new planned course
    const handleAddCourse = (course) => {
        // Avoid adding duplicate courses
        if (!selectedCourses.find(selectedCourse => selectedCourse.id === course.id)) {
            setSelectedCourses(prevSelectedCourses => [...prevSelectedCourses, course]);
        }
    };

    return (
        <LanguageWrapper>
            <div className='semester-planner-parent'>
                <Header />
                <Planner
                    plannedCourses={selectedCourses}
                    onAddCourse={handleAddCourse}
                />
                <CourseSelection
                    courses={coursesData}
                />
            </div>
        </LanguageWrapper>
    );
}

export default SemesterPlanner;
