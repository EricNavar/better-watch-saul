import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { Typography } from '@mui/material';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Episode } from '../commonTypes';
import { getEpisode } from '../util';

const EpisodePage = (props: { trackId: string }) => {
    const [episode, setEpisode] = React.useState<Episode | null>(null);

    React.useEffect(() => {
        const fetchEpisodes = async () => {
            let response;
            response = await getEpisode('4');
            console.log(response.data);
            if (response && response.data && response.data)
                setEpisode(response.data);
        };
        fetchEpisodes();
    }, [props]);

    if (episode === null) {
        return <Typography variant='body1'>Loading...</Typography>
    }

    return (
        <div style={{ padding: 20 }}>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px" />
            </a>
            <br />
            <video
                width="700px"
                height="400px"
                controls
                poster={`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}
            >
                <source src={episode.src} type="video/mp4" />
            </video>
            <Typography variant='subtitle1' style={{ fontSize: 18 }}>
                Season {episode.season_number} Episode {episode.episode_number}
            </Typography>
            <Typography variant='body1'>
                {episode.description}
            </Typography>
            <br />
            <EpisodesGroup defaultSeason={episode.season_number} />
        </div>
    );
}

export { EpisodePage };
