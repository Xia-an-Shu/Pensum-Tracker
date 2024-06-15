import "./Base.scss";
import React from "react";

// Components
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Account from "../account/Account";

import Nav from "../nav/Nav";

const Base = ({ children }) => {

    return (
        <div className="ronald-base">
            
            <div className="header">

                {/* Header components */}
                <Logo className="logo"></Logo>
                <Search className="search"></Search>
                <Account className="account"></Account>

            </div>

            <div className="body-container">

                <Nav className="nav"></Nav>
                <div className="body">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Base;