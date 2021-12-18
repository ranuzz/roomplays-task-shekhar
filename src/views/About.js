import withRoot from '../app/withRoot.js';
import React from 'react';
import BasicAppBar from '../components/BasicAppBar.js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function About() {

    return (
        <>
        <BasicAppBar></BasicAppBar>
        <br /><br />
        <Grid container spacing={2}>

            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
        </>
    );

}

export default withRoot(About);