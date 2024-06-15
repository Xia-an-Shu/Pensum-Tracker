import "./Account.scss";
import React from "react";

const Account = () => {

    // public url = process.env.PUBLIC_URL;

    // Default icon: a circle image.
    const default_icon_url = process.env.PUBLIC_URL + "/images/ronald/account/default-icon-full.jpg";

    // Arrow down next to icon: a down arrow svg image.
    const arrow_down_url = process.env.PUBLIC_URL + "/images/ronald/account/arrow-down.svg";

    const default_user = "Xia Yun";

    return (
        <div className="ronald-account">

            <img src={default_icon_url} alt="User Icon" className="icon" />

            <span className="user">{default_user}</span>

            <img src={arrow_down_url} alt="Arrow Down" className="arrow-down" />

        </div>
    );
}

export default Account;