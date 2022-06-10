import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slidebar from '../../components/slidebar';
import { setClientToken } from '../../spotify';
import Login from '../auth/login';
import Favourite from '../favourite/favourite';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import './home.css';


const Home = () => {
    const [token, setToken] = useState("");

    useEffect( ()=> {
        const token = window.localStorage.getItem("token");
        const hash =window.location.hash;
        window.location.hash="";
        if(!token && hash){
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token)
        }
        else{
            setToken(token);
            setClientToken(token);
        }
            

      

    },[]);
    return !token? (
        <Login />
    ) : (
        <Router>

        <div className="main-body">

        <Slidebar></Slidebar>

            <Routes>
                <Route path="/" element={<Library></Library>}></Route>
                <Route path="trending" element={<Trending></Trending>}></Route>
                <Route path="/player" element={<Player></Player>}></Route>
                <Route path="/feed" element={<Feed></Feed>}></Route>
                <Route path='/favourite' element={<Favourite></Favourite>}></Route>
                <Route path="/library" element={<Library></Library>}></Route>

            </Routes>
        </div>
        </Router>
    );
};

export default Home;