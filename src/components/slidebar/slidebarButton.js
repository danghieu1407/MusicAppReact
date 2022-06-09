import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import "./slidebarButton.css";

const SlidebarButton = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnBody = isActive ? 'btn-body active' : 'btn-body';
    
    return (
        
            <Link to={props.to}>
                <div className={btnBody}>
                <IconContext.Provider value={{size:" 24px", className: "btn-icon"}}>
                {props.icon}
                </IconContext.Provider>
                <p className='btn-title'>{props.title}</p>
            </div>
            </Link>
            
    );
};

export default SlidebarButton;