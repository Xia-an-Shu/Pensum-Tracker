import "./Reminders.scss";
import React, { useState, useEffect  } from "react";

import { useTranslation } from 'react-i18next';

// Components
import Base from "../utils/base/Base";
import AllTasks from "./allTasks/AllTasks";
import WeekView from "./weekView/WeekView";

import Tasks from "./Tasks";

const Body = () => {
    const { t } = useTranslation();

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(Tasks);
    }, []);

    const Tag = require("./tag.svg").ReactComponent;

    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        
        <div className="ronald-reminders">

            <div className="banner-container">
                <div className="title">{formattedDate}</div>
                {/* Today you have 6 upcoming tasks. */}
                {/* <div className="subtitle">You have {tasks.length} upcoming tasks.</div> */}
                <div className="subtitle">{t('You have ')}{tasks.length}{t(' upcoming tasks.')}</div>
            </div>

            <div className="tasks-weekview-container">

                <div className="tasks-container">

                    <div className="guide">
                        <div className="closed-indicator"></div>
                        {/* <div className="closed-text">Closed</div> */}
                        <div className="closed-text">{t('Closed')}</div>
                        <div className="active-indicator"></div>
                        {/* <div className="active-text">Active</div> */}
                        <div className="active-text">{t('Active')}</div>
                        {/* Tag svg icon: "./tag.svg" */}
                        <Tag className="tag-icon"></Tag>
                        <div className="tag-text">Tag</div>
                    </div>

                    <div className="alltasks">
                        <AllTasks tasks={tasks} ></AllTasks>
                    </div>

                </div>

                <div className="weekview-container">
                    <WeekView tasks={tasks} setTasks={setTasks} ></WeekView>
                </div>

            </div>

        </div>
            
    );
    
}

const Reminders = () => {
    return (
        <Base children={<Body></Body>}></Base>
    );
}

export default Reminders;