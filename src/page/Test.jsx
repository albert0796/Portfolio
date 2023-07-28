import React, { useState, useContext } from 'react';
import { Backdrop, Button, Typography } from '@mui/material';
import { Oddsbeta, Toad, Widget, AWS, MemberSystem,
  XAI, Travel, PatternHunter, Crowdfunding,
  Insurance, House,
  Econometrics, Accounting, Kelly, Traffic,
  NTU, Algorithms, MachineLearning, LinearAlgebra,
} from '../components';
import { PortfolioContext } from '../contexts';

function Test() {
  const { works } = useContext(PortfolioContext);
  const [open, setOpen] = useState(false);
  const [targetWork, setTargetWork] = useState('');

  const handleBackdropClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (title) => {
    setOpen(true);
    setTargetWork(title);
  };

  return (
    <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Typography variant="h5">App & Web</Typography>
        <div>
          <Button onClick={() => { handleClickOpen('ODDSBETA Sport Website'); }}>ODDSBETA</Button>
          <Button onClick={() => { handleClickOpen('TOAD Wine Company Website'); }}>TOAD</Button>
          <Button onClick={() => { handleClickOpen('ODDSBETA Cricket Scorecard Widget'); }}>Widget</Button>
          <Button onClick={() => { handleClickOpen('Accounting Data Conversion Backend Development'); }}>AWS</Button>
          <Button onClick={() => { handleClickOpen('Member System Backend Development'); }}>Member</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Typography variant="h5">Machine Learning</Typography>
        <div>
          <Button onClick={() => { handleClickOpen('Explainable Digital Currency Candlestick Pattern AI Learner'); }}>XAI</Button>
          <Button onClick={() => { handleClickOpen('Deep Learning-Based Recommendation APP for Taiwan Tourist Attractions'); }}>Travel</Button>
          <Button onClick={() => { handleClickOpen('Deep Learning-Based Candlestick Pattern Recognition System'); }}>PatternHunter</Button>
          <Button onClick={() => { handleClickOpen('Ensemble Machine Learning on Crowdfunding Data for Project Status and Amount Pledge Prediction'); }}>Ensemble</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Typography variant="h5">Data Analysis</Typography>
        <div>
          <Button onClick={() => { handleClickOpen('Cathlife Critical Illness Insurance Purchasing Data Analysis'); }}>Insurance</Button>
          <Button onClick={() => { handleClickOpen("Kaggle's House Prices Prediction"); }}>House</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Typography variant="h5">Economics</Typography>
        <div>
          <Button onClick={() => { handleClickOpen('Exploring the Relationship between Corporate Financial Indicators and Stock Valuation through Econometric Methods'); }}>Econometrics</Button>
          <Button onClick={() => { handleClickOpen("Evaluation and Financial Analysis of Taiwan's Electric Vehicle Supply Chain Companies"); }}>Accounting</Button>
          <Button onClick={() => { handleClickOpen('The Application of Kelly Criterion in Determining Optimal Capital Structure'); }}>Kelly</Button>
          <Button onClick={() => { handleClickOpen('Configuration, Planning, and Exploration of Public Transportation'); }}>Traffic</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Typography variant="h5">Class Handout</Typography>
        <div>
          <Button onClick={() => { handleClickOpen('Teaching Notes for Financial Innovation Course at National Taiwan University'); }}>NTU</Button>
          <Button onClick={() => { handleClickOpen('Lecture Notes for Data Structures and Algorithms'); }}>Algorithms</Button>
          <Button onClick={() => { handleClickOpen('Lecture Notes for Machine Learning'); }}>ML</Button>
          <Button onClick={() => { handleClickOpen('Linear Algebra with Python'); }}>Linear Algebra</Button>
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleBackdropClose}
      >
        {targetWork === 'ODDSBETA Sport Website'
        && <Oddsbeta handleClose={handleBackdropClose} open={open} work={works[0]} />}

        {targetWork === 'ODDSBETA Cricket Scorecard Widget'
        && <Widget handleClose={handleBackdropClose} open={open} work={works[1]} />}

        {targetWork === 'TOAD Wine Company Website'
        && <Toad handleClose={handleBackdropClose} open={open} work={works[2]} />}

        {targetWork === 'Accounting Data Conversion Backend Development'
        && <AWS handleClose={handleBackdropClose} open={open} work={works[3]} />}

        {targetWork === 'Member System Backend Development'
        && <MemberSystem handleClose={handleBackdropClose} open={open} work={works[4]} />}

        {targetWork === 'Explainable Digital Currency Candlestick Pattern AI Learner'
        && <XAI handleClose={handleBackdropClose} open={open} work={works[5]} />}

        {targetWork === 'Deep Learning-Based Recommendation APP for Taiwan Tourist Attractions'
        && <Travel handleClose={handleBackdropClose} open={open} work={works[6]} />}

        {targetWork === 'Deep Learning-Based Candlestick Pattern Recognition System'
        && <PatternHunter handleClose={handleBackdropClose} open={open} work={works[7]} />}

        {targetWork === 'Ensemble Machine Learning on Crowdfunding Data for Project Status and Amount Pledge Prediction'
        && <Crowdfunding handleClose={handleBackdropClose} open={open} work={works[8]} />}

        {targetWork === 'Cathlife Critical Illness Insurance Purchasing Data Analysis'
        && <Insurance handleClose={handleBackdropClose} open={open} work={works[9]} />}

        {targetWork === "Kaggle's House Prices Prediction"
        && <House handleClose={handleBackdropClose} open={open} work={works[10]} />}

        {targetWork === 'Exploring the Relationship between Corporate Financial Indicators and Stock Valuation through Econometric Methods'
        && <Econometrics handleClose={handleBackdropClose} open={open} work={works[11]} />}

        {targetWork === "Evaluation and Financial Analysis of Taiwan's Electric Vehicle Supply Chain Companies"
        && <Accounting handleClose={handleBackdropClose} open={open} work={works[12]} />}

        {targetWork === 'The Application of Kelly Criterion in Determining Optimal Capital Structure'
        && <Kelly handleClose={handleBackdropClose} open={open} work={works[13]} />}

        {targetWork === 'Configuration, Planning, and Exploration of Public Transportation'
        && <Traffic handleClose={handleBackdropClose} open={open} work={works[14]} />}

        {targetWork === 'Teaching Notes for Financial Innovation Course at National Taiwan University'
        && <NTU handleClose={handleBackdropClose} open={open} work={works[15]} />}

        {targetWork === 'Lecture Notes for Data Structures and Algorithms'
        && <Algorithms handleClose={handleBackdropClose} open={open} work={works[16]} />}

        {targetWork === 'Lecture Notes for Machine Learning'
        && <MachineLearning handleClose={handleBackdropClose} open={open} work={works[17]} />}

        {targetWork === 'Linear Algebra with Python'
        && <LinearAlgebra handleClose={handleBackdropClose} open={open} work={works[18]} />}
      </Backdrop>
    </div>
  );
}

export { Test };
