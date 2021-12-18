import withRoot from '../app/withRoot.js';
import React from 'react';
import BasicAppBar from '../components/BasicAppBar.js';
import Grid from '@mui/material/Grid';
import { Product } from '../features/products/Products.js';

function Home() {

    return (
        <>
        <BasicAppBar></BasicAppBar>
        <br /><br />
        <Grid container spacing={2}>

            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Product />
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    
        </>
    );

}

export default withRoot(Home);