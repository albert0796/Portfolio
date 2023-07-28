import React, { useState } from 'react';
import { Button, IconButton, Typography, Box,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CancelIcon from '@mui/icons-material/Cancel';

function Toad({ open, handleClose, work }) {
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
          <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <div style={{ width: '220px', height: '450px' }}>
              <video
                style={{ width: '220px', height: '450px', borderRadius: '10px' }}
                src={work.video.file}
                type="video/mp4"
                loop
                controls
                autoPlay
                muted
              />
            </div>
            <div>
              <ol style={{ marginTop: '0px', color: '#333333' }}>
                {work.details.map((lsitItem, index) => (
                  <li style={{ marginBottom: '20px', fontSize: '18px' }} key={index}>{lsitItem}</li>
                ))}
              </ol>
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px', fontSize: '16px' }}>
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
            startIcon={<LanguageIcon />}
            size="medium"
            onClick={() => { handleClick(work.link.website); }}
          >
            Website
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { Toad };
