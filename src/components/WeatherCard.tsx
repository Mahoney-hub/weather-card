import React from 'react';
import s from './WeatherCard.module.scss';
import {Box, Card, FormControl, InputLabel, MenuItem, Paper, Select, ThemeProvider} from '@mui/material';
import {theme} from '../utils/theme';

const styleCard = {
    width: '300px',
    height: '450px',
    margin: '20px auto',
    padding: '15px',
    background: '#bbdefb',
    borderRadius: '10px',
}

export const WeatherCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <Card elevation={2} sx={styleCard}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={'age'}
                        label="Age"
                        onChange={()=>{}}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Card>
        </ThemeProvider>

    );
};

