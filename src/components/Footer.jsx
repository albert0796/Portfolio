import React from 'react';
import { Typography, Button, IconButton, Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      style={{
        position: 'static',
        bottom: '0px',
        height: '150px',
        // height: '280px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
        padding: '30px 80px',
      }}
      sx={{ backgroundColor: 'primary.background' }}
    >
      <div>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Wu Cheng-Han</Typography>
      </div>
      {/* <div>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Wu Cheng-Han</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Button style={{ textTransform: 'capitalize' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>Portfolio</Typography>
        </Button>
        <Button style={{ textTransform: 'capitalize' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>About</Typography>
        </Button>
        <Button style={{ textTransform: 'capitalize' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>Skills</Typography>
        </Button>
        <Button style={{ textTransform: 'capitalize' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>Experience</Typography>
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <IconButton style={{ color: 'primary.main' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton style={{ color: 'primary.main' }}>
          <GitHubIcon />
        </IconButton>
      </div> */}
    </Box>
  );
}

export { Footer };
