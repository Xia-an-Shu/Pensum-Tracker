import React, { useState, useCallback } from 'react';
import WarningBox from '../warningBox/WarningBox';
import './Planner.css';
import { coursesData } from '../../../testData/coursesData';
import { FormattedMessage } from 'react-intl';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

function Planner() {
    const [plannedCourses, setPlannedCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [warning, setWarning] = useState(null); // For warning messages

    const browserLanguage = navigator.language.split(/[-_]/)[0]; // 'en', 'es', etc.
    const messages = {
        en: enMessages,
        es: esMessages
    };

    const localeMessages = messages[browserLanguage] || messages['en']; // Fallback to English

    const handleDrop = useCallback((event) => {
        event.preventDefault();
        const courseData = event.dataTransfer.getData("application/reactflow");
        const course = JSON.parse(courseData);
        const courseToDrop = coursesData.find(c => c.id === course.id);

        // Check for unmet corequisites
        const coreqsUnmet = courseToDrop.corequisites.some(coreqId => !plannedCourses.some(pc => pc.id === coreqId));
        if (coreqsUnmet) {
            // Show warning for corequisites
            setWarning({
                message: localeMessages['Planner.addWithCorequisites'].replace('{courseTitle}', courseToDrop.title).replace('{corequisitesList}', courseToDrop.corequisites.join(', ')),
                action: () => addCourseWithCoreqs(courseToDrop),
            });
            return; // Prevent further action until the user responds to the warning
        }

        // Check for unmet prerequisites
        const prereqsUnmet = courseToDrop.prerequisites.some(prereqId => !plannedCourses.some(pc => pc.id === prereqId));
        if (prereqsUnmet) {
            // Show warning for prerequisites
            setWarning({
                message: localeMessages['Planner.cannotAddPrerequisites'].replace('{courseTitle}', courseToDrop.title).replace('{prerequisitesList}', courseToDrop.prerequisites.join(', ')),
                action: null, // No action for unmet prerequisites, just show information
            });
            return; // Prevent adding the course
        }

        // If all checks pass, add the course
        setPlannedCourses([...plannedCourses, { ...course, isDropped: true }]);
    }, [plannedCourses]);

    const addCourseWithCoreqs = (course) => {
        const coreqsToAdd = course.corequisites.map(coreqId => coursesData.find(c => c.id === coreqId));
        setPlannedCourses([...plannedCourses, course, ...coreqsToAdd]);
        setWarning(null); // Dismiss the warning
    };

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
    }, []);

    const handleCourseClick = useCallback((courseId) => {
        setSelectedCourseId(courseId);
    }, []);

    const getRelatedCourses = useCallback((course) => {
        return [...course.prerequisites, ...course.corequisites].map(courseId => coursesData.find(c => c.id === courseId));
    }, []);

    function isTitleLong(title) {
        // This is a simple heuristic. You might need to adjust the length
        // threshold based on your actual font size and card layout.
        const maxLength = 13; // Adjust this threshold as necessary
        return title.length > maxLength;
    }

    const renderCourseCard = (course) => {
        // Render the card with a distinctive style once dropped
        const prerequisites = course.prerequisites.map((id) => coursesData.find((c) => c.id === id));
        const corequisites = course.corequisites.map((id) => coursesData.find((c) => c.id === id));

        const longTitleClass = isTitleLong(course.title) ? 'long-title' : '';

        return (
            <div className={`course-card fun-style ${longTitleClass}`} key={course.id}>
                <h2>{course.title}</h2>
                <p>ID: {course.id}</p>
                <div className="relations">
                    <div className="prerequisites">
                        <h4 className='preCorequisitesH4'>
                            <FormattedMessage id="Planner.prerequisites" defaultMessage="Prerequisites" />
                        </h4>
                        <ul>
                            {prerequisites.map((prereq) => prereq && <li key={prereq.id}>{prereq.id}</li>)}
                        </ul>
                    </div>
                    <div className="corequisites">
                        <h4 className='preCorequisitesH4'>
                            <FormattedMessage id="Planner.corequisites" defaultMessage="Corequisites" />
                        </h4>
                        <ul>
                            {corequisites.map((coreq) => coreq && <li key={coreq.id}>{coreq.id}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };  

    return (
        <div className="planner" onDrop={handleDrop} onDragOver={handleDragOver}>
            {warning && <WarningBox message={warning.message} onConfirm={warning.action} onCancel={() => setWarning(null)} />}
            <h1 className="planner-title">
                <FormattedMessage id="Planner.semesterTitle" defaultMessage="Planning my Next Semester!" />
            </h1>
            <div className="course-grid">
                {plannedCourses.map((course) => renderCourseCard(course))}
            </div>
            <div className="credits-summary">
                {plannedCourses.reduce((totalCredits, course) => totalCredits + parseInt(course.credits, 10), 0)}
                <FormattedMessage id="Planner.plannedCredits" defaultMessage=" Planned Credits" />
            </div>
        </div>
    );
}

export default Planner;
