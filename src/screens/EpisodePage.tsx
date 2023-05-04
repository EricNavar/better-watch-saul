import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { Typography } from '@mui/material';
import { VideoThumbnail } from '../components/VideoThumbnail';

const EpisodePage = () => {
    console.log('episode');

    const season = 1;
    const episode = 1;
    return (
        <div>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px"/>
            </a>
            <br />
            <video width="700px" height="400px" controls>
                <source src="https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4" type="video/mp4" />
            </video>
            <Typography variant='body1'>
                Season {season} Episode {episode} 
            </Typography>
            <br/>
            <Typography component='h2' variant='h6' >
                More episodes in Season {season}
            </Typography>
            <VideoThumbnail videoId='LGqx0y_zY2U' />
        </div>
    );
}

export {EpisodePage};
