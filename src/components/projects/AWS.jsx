import React, { useState } from 'react';
import { Button, IconButton, Typography, Box,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function AWS({ open, handleClose, work }) {
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
            margin: '10px 10px 15px 10px',
            color: 'primary.main',
          }}
        >
          {work.title}
        </DialogTitle>
        <DialogContent sx={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <img
              style={{ width: '350px', height: '100%', marginTop: '0px' }}
              src={work.image.file}
            />
            <div>
              <ol style={{ marginTop: '0px', color: '#333333', fontSize: '18px' }}>
                <li style={{ marginBottom: '20px' }}>{work.details[0]}</li>
                <li>
                  <div style={{ marginBottom: '2px' }}>{work.details[1]}</div>
                  <ul>
                    <li style={{ marginBottom: '8px' }}>{work.details[2]}</li>
                    <li style={{ marginBottom: '8px' }}>{work.details[3]}</li>
                    <li style={{ marginBottom: '8px' }}>{work.details[4]}</li>
                    <li style={{ marginBottom: '8px' }}>{work.details[5]}</li>
                  </ul>
                </li>
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
      </Dialog>
    </div>
  );
}

export { AWS };
