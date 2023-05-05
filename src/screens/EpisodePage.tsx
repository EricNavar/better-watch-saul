import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { Typography } from '@mui/material';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Episode } from '../commonTypes';
import { episodes } from '../data';

const EpisodePage = (props: {trackId: string}) => {
    const [episode, setEpisode] = React.useState<Episode>(episodes[0]);

    return (
        <div style={{padding: 20}}>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px"/>
            </a>
            <br />
            <video width="700px" height="400px" controls>
                <source src={episode.src} type="video/mp4" />
            </video>
            <Typography variant='body1'>
                Season {episode.season_number} Episode {episode.episode_number} 
            </Typography>
            <br/>
            <Typography component='h2' variant='h6' >
                Season {episode.season_number}
            </Typography>
            <EpisodesGroup defaultSeason={episode.season_number}/>
        </div>
    );
}

export {EpisodePage};
