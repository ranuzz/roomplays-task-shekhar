import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchProuct } from './productSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export function Product() {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchProuct({
            term: e.target[0].value,
            demo: false
        }));
    }
    function handleClick() {
        dispatch(searchProuct({
            term: '*',
            demo: true
        }));
    }
    return (
 
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '84ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField 
                id="outlined-basic"
                
                variant="outlined" 
                name="item"
                multiline
                rows={1}
                placeholder={'Search a product'}
                /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<Button variant="outlined" type="submit">Search</Button><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<Button variant="outlined" onClick={handleClick}>Demo</Button>
        </Box>
        
    </>
    );
}