import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@mui/material';

function Header() {
  return (
    <div>
      <AppBar elevation={0} position="fixed" sx={{ backgroundColor: 'primary.background' }}>
        <Toolbar style={{ padding: '30px 40px' }}>
          <Grid container spacing={0}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Wu Cheng-Han</Typography>
            </Grid>
            {/* <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Wu Cheng-Han</Typography>
            </Grid> */}
            {/* <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Button style={{ textTransform: 'capitalize' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>Portfolio</Typography>
                </Button>
                <Button style={{ textTransform: 'capitalize' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>About</Typography>
                </Button>
                <Button style={{ textTransform: 'capitalize' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>Skills</Typography>
                </Button>
                <Button style={{ textTransform: 'capitalize' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>Experience</Typography>
                </Button>
              </div>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
