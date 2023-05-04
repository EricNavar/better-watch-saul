import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { Typography } from '@mui/material';
import { episodes } from '../data';
import { EpisodeCard } from '../components/EpisodeCard';

const EpisodePage = (props: {trackId: string}) => {
    const episode = 1;
    const season = 1;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const moreEpisodes = episodes.filter((episode)=>episode.season_number = season);

    return (
        <div style={{width: 300}}>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px"/>
            </a>
            <br />
            <video width="700px" height="400px" controls>
                <source src="" type="video/mp4" />
            </video>
            <Typography variant='body1'>
                Season {season} Episode {episode} 
            </Typography>
            <br/>
            <Typography component='h2' variant='h6' >
                More episodes in Season {season}
            </Typography>
            {moreEpisodes.map((episode, index) => 
                <EpisodeCard {...episode} key={index}/>
            )}
        </div>
    );
}

export {EpisodePage};

//https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4