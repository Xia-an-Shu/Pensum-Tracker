import { Home } from "../home/Home";

// David's HUs
import NewCarrer from "../newCarrer/newcarrer";
import Syllabus from "../Syllabus/syllabus";

// Ronald's HUs
import Reminders from "../ronald/reminders/Reminders";
import Grades from "../ronald/grades/Grades";
import Notes from "../ronald/notes/Notes";

// Alonso's HUs
import SemesterPlanner from "../semesterPlanner/SemesterPlanner";
import { BrowserRouter as Router, Routes ,Route, Navigate } from "react-router-dom";
import { Profile } from "../profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function AppRouter() {

    return (
        <Router basename="/Pensum-Tracker">
        <Routes>
            <Route path="/home" element={
                    <Home />
                }/>
            <Route path="/" element=
                {<Login/>}
            />

            <Route path="/new_career" element={
                    <NewCarrer />
                }/>

            <Route path="/syllabus/:college/:career" element={
                    <Syllabus />
                }/>

            <Route path="/reminders" element={
                    <Reminders />
                }/>
            
            <Route path="/grades" element={
                    <Grades />
                }/>

            <Route path="/notes" element={
                    <Notes />
                }/>

            <Route path="/semester-planner" element={
                    <SemesterPlanner />
                }/>

            <Route path="/profile" element={
                    <Profile />
                }/>

            <Route path="*" element={<Navigate to="/Pensum-Tracker/home" />} />
            
        </Routes>
    </Router>
    )
}

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    React.useEffect(() => {
        loginWithRedirect();
    }, [loginWithRedirect]);

    return <div>Redirecting to login...</div>;
};

export { AppRouter };