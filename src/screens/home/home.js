import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slidebar from '../../components/slidebar';
import Favourite from '../favourite/favourite';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import './home.css';


const home = () => {
    return (
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

export default home;