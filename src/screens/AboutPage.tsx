import { Link, Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
    console.log('about');
    return (
        <div style={{padding: 20}}>
            <Typography variant='body1'><b>Is this illegal?</b></Typography>
            <Typography variant='body1'>Yes</Typography>
            <br/>
            <Typography variant='body1'><b>Where is the source code for this amazing project?</b></Typography>
            <Link target='_blank' variant='body1' href='https://github.com/EricNavar/better-watch-saul'>https://github.com/EricNavar/better-watch-saul</Link>
        </div>
    );
}

export {AboutPage};
