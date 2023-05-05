import React from 'react';
import BetterWatchSaulLogo from '../assets/better-watch-saul-logo.png';
import { Typography, styled } from '@mui/material';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Episode } from '../commonTypes';
import { getEpisode } from '../util';

const VideoPlayer = styled('video')`
    width: 800px;
    height: 450px;
    max-width: 100%;
`;

const EpisodePage = (props: { trackId: string }) => {
    const [episode, setEpisode] = React.useState<Episode | null>(null);

    React.useEffect(() => {
        const fetchEpisodes = async () => {
            let response;
            response = await getEpisode(props.trackId);
            console.log(response.data);
            if (response && response.data && response.data.episode)
                setEpisode(response.data.episode);
        };
        fetchEpisodes();
    }, [props]);

    if (episode === null) {
        return <Typography color="textPrimary" variant='body1'>Loading...</Typography>
    }

    return (
        <div style={{ padding: 20 }}>
            <a href='/'>
                <img src={BetterWatchSaulLogo} alt="Better Watch Saul" width="250px" />
            </a>
            <br />
            <VideoPlayer
                width="800px"
                height="450px"
                controls
                poster={`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}
            >
                <source src={episode.src} type="video/mp4" />
            </VideoPlayer>
            <Typography color="textPrimary" variant='subtitle1' style={{ fontSize: 18, marginBottom: 8 }}>
                Season {episode.season_number} Episode {episode.episode_number}
            </Typography>
            <Typography color="textPrimary" variant='body1'>
                {episode.description}
            </Typography>
            <br />
            <EpisodesGroup defaultSeason={episode.season_number} />
        </div>
    );
}

export { EpisodePage };
