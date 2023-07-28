import React, { useState } from 'react';
import { Button, IconButton, Typography, Box,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import GitHubIcon from '@mui/icons-material/GitHub';

function Crowdfunding({ open, handleClose, work }) {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': { minWidth: '900px' } }}
      >
        <IconButton
          size="medium"
          sx={{ position: 'absolute', right: '6px', top: '6px' }}
          onClick={handleClose}
        >
          <CancelIcon fontSize="inherit" />
        </IconButton>
        <DialogTitle
          variant="h5"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '10px',
            color: 'primary.main',
          }}
        >
          {work.title}
        </DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ width: '500px', height: '100%' }}
                src={work.video.file}
              />
            </div>
            <div>
              <ol style={{ marginTop: '0px', color: '#333333' }}>
                {work.details.map((lsitItem, index) => (
                  <li style={{ marginBottom: '18px', fontSize: '18px' }} key={index}>{lsitItem}</li>
                ))}
              </ol>
              <div style={{ display: 'flex', flexDirection: 'row', fontSize: '16px', padding: '10px 0 0 20px' }}>
                <div style={{ marginRight: '10px', color: '#333333' }}>
                  Skills:
                </div>
                <div style={{ color: '#757575' }}>
                  {work.skills}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ padding: '18px' }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            size="medium"
            onClick={() => { handleClick(work.link.github); }}
          >
            GitHub
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { Crowdfunding };
