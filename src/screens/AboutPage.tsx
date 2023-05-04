import { Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
    console.log('about');
    return (
        <div style={{padding: 20}}>
            <Typography variant='body1'><b>Is this illegal?</b></Typography>
            <Typography variant='body1'>Yes</Typography>
        </div>
    );
}

export {AboutPage};
