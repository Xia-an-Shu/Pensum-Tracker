import "./Grades.scss";
import React, { useState, useEffect  } from "react";

import { useTranslation } from 'react-i18next';

// Components
import Base from "../utils/base/Base";
import Data from "./College";


const Body = () => {
    const { t } = useTranslation();

    // Structure: data = [ { name:"careerName", semesters: [ {id:"#1 - 2021 01", subjects: [{id:"",name:"", credits:2, grade:4},{...}] },{...} ] }, {...} ]

    const [data, setData] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");
    const [gpa, setGPA] = useState(0);

    useEffect(() => {
        setData(Data);
        if (Data.length > 0) {
            setSelectedCareer(Data[0].name);
            setSelectedSemester(Data[0].semesters[0].id);
        }
        calculateGPA();
    }, []);

    const handleCareerChange = (event) => {
        setSelectedCareer(event.target.value);
        setSelectedSemester(data.find(career => career.name === event.target.value).semesters[0].id);
        // Recalculate GPA
        calculateGPA();
    };
    
    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
        // Recalculate GPA
        calculateGPA();
    };

    function calculateGPA() {
        if (!selectedSemester) return 0;

        let career = data.find(career => career.name === selectedCareer);
        let semester = career.semesters.find(semester => semester.id === selectedSemester);
        
        // GPA = sum((i),subject[i].grade*subject[i].credits)/sum(credits)
        let sum = 0;
        let credits = 0;
        semester.subjects.forEach(subject => {
            sum += subject.grade * subject.credits;
            credits += subject.credits;
        });

        let gpa = (((sum/credits)/5)*100).toFixed(0);
        setGPA(gpa);
    }

    // Forms functions

    // ~ Add course form ~

    const [showAddForm, setShowAddForm] = useState(false);
    const [newCourse, setNewCourse] = useState({
        name: "",
        credits: 0,
        grade: 0
    });

    function handleAddCourseChange(event) {
        setNewCourse({
            ...newCourse,
            [event.target.name]: event.target.value
        });
    }

    function handleAddCourseSubmit(event) {
        event.preventDefault();
        addCourse(newCourse);
        setShowAddForm(false);
        console.log(newCourse)
    }


    function addCourse (newCourse) {
        // Modify the data to include the new course
        const newCareerData = data.map(career => {
            if (career.name === selectedCareer) {
                return {
                    ...career,
                    semesters: career.semesters.map(semester => {
                        if (semester.id === selectedSemester) {
                            return {
                                ...semester,
                                subjects: [...semester.subjects, newCourse]
                            }
                        }
                        return semester;
                    })
                }
            }
            return career;
        });
        setData(newCareerData);
    }

    // ~ Remove course form ~

    const [showRemoveForm, setShowRemoveForm] = useState(false);
    const [courseToRemove, setCourseToRemove] = useState("");

    function handleRemoveCourseChange(event) {
        setCourseToRemove(event.target.value);
    }

    function handleRemoveCourseSubmit(event) {
        event.preventDefault();
        removeCourse(courseToRemove);
        setShowRemoveForm(false);
    }

    function removeCourse (courseToRemove) {
        // Modify the data to remove the course
        const newCareerData = data.map(career => {
            if (career.name === selectedCareer) {
                return {
                    ...career,
                    semesters: career.semesters.map(semester => {
                        if (semester.id === selectedSemester) {
                            return {
                                ...semester,
                                subjects: semester.subjects.filter(subject => subject.name !== courseToRemove)
                            }
                        }
                        return semester;
                    })
                }
            }
            return career;
        });
        // Update the data
        setData(newCareerData);
        // Recalculate GPA
        calculateGPA();
    }

    return (
        <div className="ronald-grades">

            {showAddForm && (
                <div className="form-overlay">
                    <form className="form">
                        <div className="input-container">
                            <label htmlFor="name">{t('Course Name')}:</label>
                            <input type="text" id="name" name="name" required onChange={handleAddCourseChange} />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="credits">{t('Course Credits')}:</label>
                            <input type="number" id="credits" name="credits" required onChange={handleAddCourseChange} />
                        </div>

                        <div className="input-container">
                            {/* Indicate the actual value of input */}
                            <label htmlFor="grade">{t('Course Grade (0-5)')}: {newCourse.grade}</label>
                            {/* Use a slider as input */}
                            <input type="range" id="grade" name="grade" min="0" max="5" step="0.1" required onChange={handleAddCourseChange} />
                        </div>

                        <div className="button-container">
                            <button type="button" onClick={() => setShowAddForm(false)}>{t('Cancel')}</button>
                            <button type="submit" onClick={handleAddCourseSubmit}>{t('Add')}</button>
                        </div>

                    </form>
                </div>
            )}

            {showRemoveForm && (
                <div className="form-overlay">
                    <form className="form">
                        <div className="input-container">
                            <label htmlFor="courseToRemove">{t('Course to remove')}:</label>
                            <select id="courseToRemove" name="courseToRemove" required onChange={handleRemoveCourseChange}>
                                {data
                                    .find((career) => career.name === selectedCareer)
                                    ?.semesters.find((semester) => semester.id === selectedSemester)
                                    ?.subjects.length > 0 ? (
                                    data
                                        .find((career) => career.name === selectedCareer)
                                        .semesters.find((semester) => semester.id === selectedSemester)
                                        .subjects.map((subject, index) => (
                                            <option key={index} value={subject.name}>
                                                {subject.name}
                                            </option>
                                        ))
                                ) : (
                                    <option value="">No courses found</option>
                                )}
                            </select>
                        </div>

                        <div className="button-container">
                            <button type="button" onClick={() => setShowRemoveForm(false)}>{t('Cancel')}</button>
                            <button type="submit" onClick={handleRemoveCourseSubmit}>{t('Remove')}</button>
                        </div>

                    </form>
                </div>
            )}

            <div className="page-title">{t('Career GPA')}</div>

            <div className="grades-block">

                <div className="guide">

                    <div className="input-container first">
                        {/* Selector for career */}
                        <label>{t('Career')}</label>
                        <select value={selectedCareer} onChange={handleCareerChange}>
                            {data.map((career, index) => {
                                return <option key={index} value={career.name}>{career.name}</option>
                            })}
                        </select>
                    </div>

                    <div className="input-container">
                        {/* Selector for semester */}
                        <label>{t('Semester')}</label>
                        <select value={selectedSemester} onChange={handleSemesterChange}>
                            {data.find(career => career.name === selectedCareer)?.semesters.map((semester, index) => {
                                return <option key={index} value={semester.id}>{semester.id}</option>
                            })}
                        </select>
                    </div>
                    
                </div>

                <div className="view-insight-container">

                        <div className="view">

                            <div className="table-container">
                                <div className="table">

                                    {/* 1 row for titles */}
                                    <div className="row titles">
                                        <div className="cell title">{t('Course name')}</div>
                                        <div className="cell title">{t('Credits')}</div>
                                        <div className="cell title">{t('Grade')}</div>
                                    </div>

                                    {/* 1 row for each subject of selectedCareer and selectedSemester */}
                                    {selectedSemester && selectedSemester ? (
                                        data.find(career => career.name === selectedCareer).semesters.find(semester => semester.id === selectedSemester).subjects.map((subject, index) => (
                                            <div key={index} className="row">
                                                <div className="cell">{subject.name}</div>
                                                <div className="cell">{subject.credits}</div>
                                                <div className="cell">{(subject.grade / 5 * 100).toFixed(1) + '%'}</div>
                                            </div>
                                        ))
                                    ) : (
                                        Array(5).fill().map((_, index) => (
                                            <div key={index} className="row">
                                                <div className="cell">~</div>
                                                <div className="cell">~</div>
                                                <div className="cell">~</div>
                                            </div>
                                        ))
                                    )}

                                </div>
                            </div>

                            <div className="buttons-container">

                                {/* Add course button */}
                                <button onClick={() => setShowAddForm(true)}>{t('Add course')}</button>
                                
                                {/* Remove course button */}
                                <button onClick={() => setShowRemoveForm(true)}>{t('Remove course')}</button>

                            </div>

                        </div>

                        <div className="insight">
                            <div className="gpa-presentation">{t('Your GPA as of now is')}</div>
                            <div className="gpa-text">{gpa}%</div>
                        </div>

                </div>

            </div>

        </div>
    );


}

const Grades = () => {
    return (
        <Base children={<Body></Body>}></Base>
    );
}

export default Grades;