import { divide } from 'lodash';
import React from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                {/* item xs = 12 takes full width on mobile devices, md = 4 takes */}
                <Grid item xs={12} md={4}></Grid>

            </Grid>
            <h1>Hello, World!</h1>
        </>
    );

}

export default App;