import "./Nav.scss";
import React from "react";

import { useTranslation } from 'react-i18next';

import buttons from "./NavIcons";

// React use navigate
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleClick = (button, index) => {
        let buttonElement = document.getElementsByClassName("button")[index];
        if (buttonElement) {
            buttonElement.classList.add("open");
            setTimeout(() => {
                buttonElement.classList.remove("open");
            }, 300);
            setTimeout(() => {
                navigate(button.link);
            }, 100);
        }
    }
        
    return (
        <div className="ronald-nav">

            {
                buttons.map((button, index) => (
                    <div className="button" href={button.link} key={index} onClick={() => handleClick(button, index)}>
                        <button.icon className="icon" />
                        <div className="name" >{t(button.name)}</div>
                    </div>
                ))
            }

        </div>
    );
}

export default Nav;

// routes.map((route, index) => (
//     <div className={ID_PREFIX + "button text-glow"} key={index} onClick={() => handleClick(route, index)} >
//         <div> {route.name} </div>
//         <img className="icon img-glow" src={process.env.PUBLIC_URL + "/Images/" + route.icon + ".svg"} alt={route.icon} draggable="false" />
//     </div>

// ))