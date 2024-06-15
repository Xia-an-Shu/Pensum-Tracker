import "./WeekView.scss";
import React, { useState } from "react";

import { useTranslation } from 'react-i18next';

const WeekView = ({tasks, setTasks}) => {
    const { t } = useTranslation();

    const [showForm, setShowForm] = useState(false);
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        tag: '',
        state: ''
    });

    const handleInputChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add the new task to the tasks array
        setTasks([...tasks, taskData]);
        // Clear the input fields
        setTaskData({
            title: '',
            description: '',
            date: '',
            time: '',
            tag: '',
            state: ''
        });
        // Close the form
        setShowForm(false);
    };

    const handleNewTaskClick = () => {
        setShowForm(true);
    };

    const buttonClassnames = ["all", "backlog", "active", "closed"]

    const handleClick = (e) => {
        // Remove the "on-click" classname to whichever button has it
        buttonClassnames.forEach((button) => {
            if (document.querySelector(`.${button}`).classList.contains("on-click")) {
                document.querySelector(`.${button}`).classList.remove("on-click");
            }
        });

        // Add the "on-click" classname to the button that was clicked
        e.target.classList.add("on-click");
    }

    function getDayAndDate(daysFromNow) {
        const date = new Date();
        date.setDate(date.getDate() + daysFromNow);
        const options = { weekday: 'short', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate.split(' ').reverse().join(' ');
    }

    const hours = [ "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM" ];

    return (
        <div className="week-view">

            {showForm && (
                <div className="form-overlay">
                    <form onSubmit={handleFormSubmit} className="new-task-form">
                            <label>
                                {t("New Task")}
                            </label>
                        <div className="input-container">
                            <label>
                                {/* Title: */}
                                {t("Title")}:
                                <input type="text" name="title" value={taskData.title} onChange={handleInputChange} />
                            </label>
                            <label>
                                {/* Description: */}
                                {t("Description: ")}:
                                <input type="text" name="description" value={taskData.description} onChange={handleInputChange} />
                            </label>
                            <label>
                                {/* Date: */}
                                {t("Date: ")}:
                                <input type="date" name="date" value={taskData.date} onChange={handleInputChange} />
                            </label>
                            <label>
                                {/* Time: */}
                                {t("Time: ")}:
                                <select name="time" value={taskData.time} onChange={handleInputChange}>
                                    {hours.map((hour, index) => (
                                        <option key={index} value={hour}>{hour}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                {/* Tag: */}
                                {t("Tag: ")}:
                                <select name="tag" value={taskData.tag} onChange={handleInputChange}>
                                    <option value="black">Black</option>
                                    <option value="purple">Purple</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="orange">Orange</option>
                                    <option value="pink">Pink</option>
                                    <option value="brown">Brown</option>
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                    {/* Add more colors as needed */}
                                </select>
                            </label>
                            <label>
                                {/* State: */}
                                {t("State: ")}:
                                <select name="state" value={taskData.state} onChange={handleInputChange}>
                                    <option value="Active">Active</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </label>
                        </div>
                        
                        <div className="buttons">
                            {/* <button type="submit">Submit</button> */}
                            <button type="submit">{t("Submit")}</button>
                            {/* <button onClick={() => setShowForm(false)}>Cancel</button> */}
                            <button onClick={() => setShowForm(false)}>{t("Cancel")}</button>
                        </div>
                    
                    </form>
                </div>
            )}
            
            <div className="panel">

                <div className="selector">
                    {/* <div className="all on-click" onClick={handleClick}>All</div> */}
                    <div className="all on-click" onClick={handleClick}>{t("All")}</div>
                    {/* <div className="backlog" onClick={handleClick}>Backlog</div> */}
                    <div className="backlog" onClick={handleClick}>{t("Backlog")}</div>
                    {/* <div className="active" onClick={handleClick}>Active</div> */}
                    <div className="active" onClick={handleClick}>{t("Active")}</div>
                    {/* <div className="closed" onClick={handleClick}>Closed</div> */}
                    <div className="closed" onClick={handleClick}>{t("Closed")}</div>
                </div>

                {/* <div className="new-button" onClick={handleNewTaskClick}>New Task +</div> */}
                <div className="new-button" onClick={handleNewTaskClick}>{t("New Task +")}</div>

            </div>

            <div className="weekgrid-container">

                <div className="table-container">

                    <div className="weekgrid">

                        <div className="column">
                            {/* <div className="title">Hours</div> */}
                            <div className="title">{t("Hours")}</div>
                            {hours.map((hour, index) => {
                                return <div key={index}>{hour}</div>
                            })}
                        </div>

                        <div className="column">
                            <div className="title">{getDayAndDate(0)}</div>
                            {hours.map((hour, index) => {
                                const tasklist = [];
                                
                                function checker (task) {
                                    // Convert current day + 0 to a string of format: YYYY-MM-DD
                                    const date = new Date();
                                    date.setDate(date.getDate() + 0);
                                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                                    const currentDate = formattedDate.split('/').reverse().join('-');
                                    // As of now current date is format YYYY-DD-MM, final conversion:
                                    const finalDate = currentDate.split('-')[0] + '-' + currentDate.split('-')[2] + '-' + currentDate.split('-')[1];
                                    // Now can compare safely currentDate === task.date && hour === task.time
                                    if (finalDate === task.date && hour === task.time) {
                                        tasklist.push(task);
                                    }
                                }

                                tasks.forEach(checker)

                                // Now, if tasklist is empty we should return a div tag with "~" as content, else return the task.title
                                if (tasklist.length === 0) {
                                    return <div key={index} >~</div>
                                } else {
                                    return <div key={index} className="task" >{tasklist[0].title}</div>
                                }
    
                            })}
                        </div>

                        <div className="column">
                            <div className="title">{getDayAndDate(1)}</div>
                            {hours.map((hour, index) => {
                                const tasklist = [];
                                
                                function checker (task) {
                                    // Convert current day + 1 to a string of format: YYYY-MM-DD
                                    const date = new Date();
                                    date.setDate(date.getDate() + 1);
                                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                                    const currentDate = formattedDate.split('/').reverse().join('-');
                                    // As of now current date is format YYYY-DD-MM, final conversion:
                                    const finalDate = currentDate.split('-')[0] + '-' + currentDate.split('-')[2] + '-' + currentDate.split('-')[1];
                                    // Now can compare safely currentDate === task.date && hour === task.time
                                    if (finalDate === task.date && hour === task.time) {
                                        tasklist.push(task);
                                    }
                                }

                                tasks.forEach(checker)

                                // Now, if tasklist is empty we should return a div tag with "~" as content, else return the task.title
                                if (tasklist.length === 0) {
                                    return <div key={index} >~</div>
                                } else {
                                    return <div key={index} className="task" >{tasklist[0].title}</div>
                                }
    
                            })}
                        </div>

                        <div className="column">
                            <div className="title">{getDayAndDate(2)}</div>
                            {hours.map((hour, index) => {
                                const tasklist = [];
                                
                                function checker (task) {
                                    // Convert current day + 2 to a string of format: YYYY-MM-DD
                                    const date = new Date();
                                    date.setDate(date.getDate() + 2);
                                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                                    const currentDate = formattedDate.split('/').reverse().join('-');
                                    // As of now current date is format YYYY-DD-MM, final conversion:
                                    const finalDate = currentDate.split('-')[0] + '-' + currentDate.split('-')[2] + '-' + currentDate.split('-')[1];
                                    // Now can compare safely currentDate === task.date && hour === task.time
                                    if (finalDate === task.date && hour === task.time) {
                                        tasklist.push(task);
                                    }
                                }

                                tasks.forEach(checker)

                                // Now, if tasklist is empty we should return a div tag with "~" as content, else return the task.title
                                if (tasklist.length === 0) {
                                    return <div key={index} >~</div>
                                } else {
                                    return <div key={index} className="task" >{tasklist[0].title}</div>
                                }
    
                            })}
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default WeekView;

// All i18n keys used in this file:
/*

"New Task": "New Task",
"Title": "Title",
"Description: ": "Description: ",
"Date: ": "Date: ",
"Time: ": "Time: ",
"Tag: ": "Tag: ",
"State: ": "State: ",
"Submit": "Submit",
"New Task +": "New Task +",
"All": "All",
"Backlog": "Backlog",
"Active": "Active",
"Closed": "Closed",
"Hours": "Hours"


*/