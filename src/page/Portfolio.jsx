import React, { useState, useContext } from 'react';
import { Typography, Button, Grid, Box, Backdrop } from '@mui/material';

import { Oddsbeta, Toad, Widget, AWS, MemberSystem,
  XAI, Travel, PatternHunter, Crowdfunding,
  Insurance, House,
  Econometrics, Accounting, Kelly, Traffic,
  NTU, Algorithms, MachineLearning, LinearAlgebra,
  PortfolioCard } from '../components';
import { PortfolioContext } from '../contexts';

function Portfolio() {
  const { categories, works } = useContext(PortfolioContext);
  // category tabs
  const [targetsTabNum, setTargetsTabNum] = useState([true, ...Array(categories.length - 1).fill(false, 0, categories.length - 1)]);
  const [targetTab, setTargetTab] = useState('all');
  // each work card
  const [open, setOpen] = useState(false);
  const [targetWork, setTargetWork] = useState('');

  const handleClickTab = (index, category) => {
    const tmpTargets = Array(categories.length).fill(false, 0, categories.length);
    tmpTargets[index] = true;
    setTargetsTabNum(tmpTargets);
    setTargetTab(category);
  };

  const handleBackdropClose = () => {
    setOpen(false);
  };
  const handleClickOpenWork = (title) => {
    setOpen(true);
    setTargetWork(title);
  };

  return (
    <Box
      sx={{
        marginTop: '90px',
        padding: '15px 60px 100px 60px',
        backgroundColor: 'primary.background',
      }}
    >
      {/* title */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 0 80px 0' }}>
        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Portfolio</Typography>
      </div>

      {/* button */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', margin: '0 0 80px 0' }}>
        {
          categories.map((item, index) => (
            <Button
              onClick={() => { handleClickTab(index, item); }}
              style={{
                textTransform: 'capitalize',
                borderRadius: '10px',
                padding: '3px 15px 3px 15px',
                background: targetsTabNum[index] ? '#333333' : '',
                color: targetsTabNum[index] ? '#FFFFFF' : '#333333',
                fontSize: '1.125rem',
              }}
              key={index}
            >
              {item}
            </Button>
          ))
        }
      </div>

      {/* all the cards */}
      {targetTab === 'all' && (
      <Grid container spacing={6}>
        {works.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PortfolioCard item={item} handleClickOpenWork={handleClickOpenWork} />
          </Grid>
        ))}
      </Grid>
      )}

      {/* other categories' cards */}
      {targetTab !== 'all' && (
      <Grid
        container
        spacing={6}
        style={{
          display: targetTab === 'data analysis' ? 'flex' : '',
          justifyContent: targetTab === 'data analysis' ? 'center' : '',
        }}
      >
        {works.filter((item) => item.category === targetTab).map((item, index) => (
          <Grid item xs={3} key={index}>
            <PortfolioCard item={item} handleClickOpenWork={handleClickOpenWork} />
          </Grid>
        ))}
      </Grid>
      )}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
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
    </Box>
  );
}

export { Portfolio };
