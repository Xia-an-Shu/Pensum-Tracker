import "./AllTasks.scss";
import React from "react";

import { useTranslation } from 'react-i18next';

const AllTasks = (tasks) => {
    const { t } = useTranslation();

    const Tag = require("../tag.svg").ReactComponent;

    return (
        
        <div className="all-tasks">
            
            {/* <div className="title">All tasks</div> */}
            <div className="title">{t('All tasks')}</div>

            <div className="task-list">

                {tasks.tasks.map((task, index) => {
                    return (
                        <div className="task" style={{backgroundColor: task.state==="Active"?"#00FFA3":"#FF0000"}} key={index}>
                            <div className="first-title">
                                <div className="name">{task.title}</div>
                                <div className="day">{
                                    // Objective: "Monday 19th"
                                    // Format of task.date: 2024-03-01
                                    new Date(task.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' }).split(' ').reverse().join(' ')
                                }</div>
                            </div>
                            <div className="hour">{task.time}</div>
                            <Tag style={{fill:task.tag}} className="tag-icon" ></Tag>
                        </div>
                    );
                }
                )}

            </div>

        </div>
        
    );
}

export default AllTasks;