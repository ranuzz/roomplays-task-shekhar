import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.thumbnail}
        alt="product thumbnail"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
export default function ProductList(props) {
    const result = props.result;
    if (result === {}) {
        return null;
    }
    if (result.totalProducts === undefined) {
        return null;
    }

    let totalProducts = parseInt(result.totalProducts);
    if (totalProducts === 0) {
        return null;
    }

    let products = result.result;
    if (products === undefined || products.length === 0) {
        return null;
    }

    return (
        <>
        <hr />
        <br />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map(p => {
            return (
                <Grid item xs={2} sm={4} md={4} key={p.asin}>
                <ProductCard 
                    key={p.asin}
                    title={p.title}
                    description=''
                    thumbnail={p.thumbnail}
                />
                </Grid>
            );
        })}
        </Grid>
        </>    
    )
}