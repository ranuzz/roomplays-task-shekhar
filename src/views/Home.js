import withRoot from '../app/withRoot.js';
import React from 'react';
import BasicAppBar from '../components/BasicAppBar.js';
import Grid from '@mui/material/Grid';
import { Product } from '../features/products/Products.js';
import ProductListConnected from '../components/ProductListConnected.js';

function Home() {

    return (
        <>
        <BasicAppBar></BasicAppBar>
        <br /><br />
        <Grid container spacing={2}>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <Product />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
        <Grid container spacing={2}>

            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <ProductListConnected />
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    
        </>
    );

}

export default withRoot(Home);