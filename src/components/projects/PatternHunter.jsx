import React, { useState } from 'react';
import { Button, IconButton, Typography, Box,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import GitHubIcon from '@mui/icons-material/GitHub';

function PatternHunter({ open, handleClose, work }) {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': { minWidth: '850px' } }}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 10px 0' }}>
              <img
                style={{ width: '500px', height: '100%', marginTop: '0px' }}
                src={work.video.file}
              />
            </div>
            <div style={{ padding: '0 30px 0 30px' }}>
              <div style={{ color: '#333333', fontSize: '18px', marginBottom: '20px' }}>{work.details[0]}</div>
              <div style={{ display: 'flex', flexDirection: 'row', fontSize: '16px' }}>
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

export { PatternHunter };
