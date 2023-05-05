import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { EpisodesGroup } from '../components/EpisodesGroup';

const Home = () => {
    return (
        <div style={{margin: 20}}>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px"/>
            </a>
            <br />
            <EpisodesGroup defaultSeason={1}/>
        </div>
    );
}

export {Home};

//https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4