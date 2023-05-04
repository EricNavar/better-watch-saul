import React from 'react';

import styled from '@emotion/styled';

const AspectRatioBox = styled('div')({
  overflow: 'hidden',
  height: 0,
  position: 'relative',
  borderRadius: 6,
  marginBottom: 8,
  paddingTop: '56.25%',
});

const AspectRatioBoxInside = styled('a')<{videoId: string}>((props) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'grid',
  alignContent: 'center',
  backgroundImage: `url("https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

type VideoThumbnailThumbnailProps = {
  videoId: string;
};

export function VideoThumbnail({
  videoId,
}: VideoThumbnailThumbnailProps): JSX.Element {
  return (
    <AspectRatioBox>
      <AspectRatioBoxInside
        target="_blank"
        href={`https://www.youtube.com/watch?v=${videoId}`}
        videoId={videoId}
      >
      </AspectRatioBoxInside>
    </AspectRatioBox>
  );
}
