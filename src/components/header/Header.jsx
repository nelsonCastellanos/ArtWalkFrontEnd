import React from 'react';
import {Grid, IconButton, Typography} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {ColorModeContext} from '../../Context.jsx';


/**
 *
 * @constructor
 */
export default function Header() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <header>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        textAlign="center"
        padding="1rem"
      >
        <Grid item xs={2}>
          <Typography variant="h4" component="h2">
            Art Walk
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode}>
            <Brightness4Icon/>
          </IconButton>
        </Grid>
      </Grid>
    </header>
  );
}
