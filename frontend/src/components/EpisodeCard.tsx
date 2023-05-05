import React from 'react';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Episode } from '../commonTypes';

const VideoLink = styled(Link)({
  overflow: 'hidden',
  display: 'inline-block',
  textDecoration: 'none',
  color: 'black',
  padding: 6,
  borderRadius: 8,
  '&:hover': {
    background: 'rgba(0,0,0,.1)'
  }
});

export function EpisodeCard(episode: Episode): JSX.Element {
  return (
    <VideoLink to={`/track/${episode._id}`}>
      <img
        src={`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}
        alt='thumbnail'
        style={{ borderRadius: 6 }}
        height="180px"
        width="320px"
      />
      <Typography variant='body1' color="textPrimary">
        Episode {episode.episode_number}: {episode.title}
      </Typography>
    </VideoLink>
  );
}
