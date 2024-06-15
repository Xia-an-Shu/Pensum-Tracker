import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.scss";
import bannerImage from "../../images/background4.jpg";
import bannerImage2 from "../../images/background.jpg";
import bannerImage3 from "../../images/background3.jpg";
import Header from '../semesterPlanner/header/Header';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Become completely aware of your Career</h3>
                            <p>Begin with planning your semester, taking notes of your courses and registering your progress in the current semester!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerImage2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Stay on Top of Your Academic Journey</h3>
                        <p>Organize your schedule, track assignment deadlines, and monitor your academic performance all in one place. Never miss an important date again!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerImage3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Achieve Your Educational Goals</h3>
                        <p>Set milestones, manage your coursework, and visualize your progress throughout your academic career. Make informed decisions and stay motivated!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="button-container">
                <Link to="/new_career" className="button">New Career</Link>
                <Link to="/syllabus/:college/:career" className="button">Syllabus</Link>
                <Link to="/reminders" className="button">Reminders</Link>
                <Link to="/grades" className="button">Grades</Link>
                <Link to="/notes" className="button">Notes</Link>
                <Link to="/semester-planner" className="button">Semester Planner</Link>
            </div>
        </div>
    );
}

export { Home };
