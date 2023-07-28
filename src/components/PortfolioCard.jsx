import React, { useEffect } from 'react';
import { Box, styled, CardActionArea, CardActions, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyledButton = styled(({ ...props }) => (
  <Button {...props} />
))(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  textTransform: 'capitalize',
  padding: '10px',
  width: '100%',
  height: '45px',
  ':hover': {
    backgroundColor: '#FFFFFF',
  },
  '> .button__word': {
    color: '#757575',
    fontSize: '15px',
    transition: 'all 300ms ease-out',
  },
  ':hover > .button__word': {
    fontSize: '20px',
    transition: 'all 300ms ease-out',
  },
  '> .button__icon': {
    color: '#757575',
    fontSize: '22px',
    transition: 'all 300ms ease-out',
  },
  ':hover > .button__icon': {
    fontSize: '27px',
    transition: 'all 300ms ease-out',
  },
}));

function PortfolioCard({ item, handleClickOpenWork }) {
  useEffect(() => {
    const imgRef = document.querySelector(`.card__${item.id}`);
    switch (item.title) {
      case "Kaggle's House Prices Prediction":
        imgRef.style.maxWidth = '355px';
        break;
      default:
        break;
    }
  }, []);

  return (
    <Card
      className={`card__${item.id}`}
      style={{ maxWidth: '340px', borderRadius: '8px' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={item.image.file}
        />
        <CardContent sx={{ padding: '12px 12px 10px 12px' }}>
          <Box sx={{ fontSize: '18px', color: 'primary.main', lineHeight: '22px' }}>
            {item.title}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0px' }}>
        <StyledButton onClick={() => { handleClickOpenWork(item.title); }}>
          <Box className="button__word">Demo</Box>
          <KeyboardDoubleArrowRightIcon className="button__icon" />
        </StyledButton>
      </CardActions>
    </Card>
  );
}

export { PortfolioCard };
