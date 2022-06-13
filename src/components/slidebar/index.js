import React, { useState, useEffect } from 'react';
import SlidebarButton from './slidebarButton';

import "./slidebar.css";
import {MdSpaceDashboard} from 'react-icons/md';
import {MdFavorite} from 'react-icons/md';
import {FaGripfire,FaPlay} from   'react-icons/fa';
import{IoLibrary} from 'react-icons/io5';
import {FaSignOutAlt} from 'react-icons/fa';
import apiClient from '../../spotify';





export default function Slidebar()  {
    const [image, setImage] = useState("https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/276171192_1669298540082640_4746287806610913901_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w_MS4-6rXrIAX_0yzXT&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT_AtxAgT3RQ9bOBD4tPRWILEowkl-1oP9rHqs7pCLl-UQ&oe=62A5D7E7");

    useEffect(()=>{
        apiClient.get("me").then((reponse) =>{
            console.log(reponse.data.images[0].url);
        });
        },[])
        
    return (
        <div className='slidebar-container'>
            <img 
            src='https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/276171192_1669298540082640_4746287806610913901_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w_MS4-6rXrIAX_0yzXT&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT_AtxAgT3RQ9bOBD4tPRWILEowkl-1oP9rHqs7pCLl-UQ&oe=62A5D7E7'
            className='profile-img'
            alt='profile' />
            <div>
                <SlidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
                <SlidebarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
                <SlidebarButton title ="Player" to="/player" icon={<FaPlay/>}/>
                <SlidebarButton title="Favourite" to="/favourite" icon={<MdFavorite />} />
                <SlidebarButton title="Library" to="/library" icon={<IoLibrary />} />

            </div>
            <SlidebarButton title="Sign out" to="/signoyt" icon={<FaSignOutAlt/>} />
        </div>
    );
}



