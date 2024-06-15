import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';   
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth0();

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsProfileMenuVisible(false);
        }, 10000); // Wait for 1 second before hiding the menu
    };

    const handleNavigation = (path, isExternal = false) => {
        if (isExternal) {
            window.location.href = path;
        } else {
            navigate(path);
        }
        setIsProfileMenuVisible(false);
    };
    

    return (
        <header className="semester-header">
            <div className="logo">Pensum Tracker®</div>
            <div className="help-section">
                <button className="help-button" onClick={()=> handleNavigation(window.location.href = 'https://www.indeed.com/career-advice/career-development/website-navigation')}>
                    <FormattedMessage id="header.help" defaultMessage="Need Help?" />
                </button>
                <button className="view-pensum-button" onClick={() => handleNavigation('/syllabus/:college/:career')}>
                    <FormattedMessage id="header.viewPensum" defaultMessage="View My Curriculum" />
                </button>
                <div className="profile-section">
                    <img 
                        src='icons/dolphin.ico'
                        alt="Profile" 
                        className="profile-image"
                        onMouseEnter={() => setIsProfileMenuVisible(true)}
                        onMouseLeave={handleMouseLeave}
                    />
                    {isProfileMenuVisible && (
                        <div className="profile-options"
                             onMouseEnter={() => setIsProfileMenuVisible(true)}
                             onMouseLeave={handleMouseLeave}>
                            <ul>
                                <li onClick={()=>handleNavigation('/profile')}>
                                    <FormattedMessage id="header.viewProfile" defaultMessage="View My Profile" />
                                </li>
                                <li onClick={()=>handleNavigation('/home')}>
                                    <FormattedMessage id="header.backToMenu" defaultMessage="Go Back to Menu"/>
                                </li>
                                <li onClick={() => logout({ returnTo: window.location.origin })}>
                                    <FormattedMessage id="header.logout" defaultMessage="Logout"/>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
