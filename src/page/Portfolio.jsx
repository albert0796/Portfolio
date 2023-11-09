import React, { useState, useContext } from 'react';
import { Typography, Button, Grid, Box, Backdrop } from '@mui/material';

import { LuckyMart, Oddsbeta, Toad, Widget, AWS, MemberSystem,
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
  const [targetTitle, setTargetTitle] = useState('');
  const [targetId, setTargetId] = useState('');

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
    const tmpObj = works.filter((obj) => obj.title === title)[0];
    setOpen(true);
    setTargetTitle(title);
    setTargetId(works.indexOf(tmpObj));
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
                // fontSize: '1.125rem',
                fontSize: '16pt',
                fontWeight: 'bold'
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
            <PortfolioCard item={item} handleClickOpenWork={() => {handleClickOpenWork(item.title)}} />
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
        {targetTitle === 'LuckyMart Indian Convenient Store Online Member System Firebase Backend Development'
        && <LuckyMart handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'ODDSBETA Sport Website'
        && <Oddsbeta handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'ODDSBETA Cricket Scorecard Widget'
        && <Widget handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'TOAD Wine Company Website'
        && <Toad handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Accounting Data Conversion Backend Development'
        && <AWS handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Member System Backend Development'
        && <MemberSystem handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Explainable Digital Currency Candlestick Pattern AI Learner'
        && <XAI handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Deep Learning-Based Recommendation APP for Taiwan Tourist Attractions'
        && <Travel handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Deep Learning-Based Candlestick Pattern Recognition System'
        && <PatternHunter handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Ensemble Machine Learning on Crowdfunding Data for Project Status and Amount Pledge Prediction'
        && <Crowdfunding handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Cathlife Critical Illness Insurance Purchasing Data Analysis'
        && <Insurance handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === "Kaggle's House Prices Prediction"
        && <House handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Exploring the Relationship between Corporate Financial Indicators and Stock Valuation through Econometric Methods'
        && <Econometrics handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === "Evaluation and Financial Analysis of Taiwan's Electric Vehicle Supply Chain Companies"
        && <Accounting handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'The Application of Kelly Criterion in Determining Optimal Capital Structure'
        && <Kelly handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Configuration, Planning, and Exploration of Public Transportation'
        && <Traffic handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Teaching Notes for Financial Innovation Course at National Taiwan University'
        && <NTU handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Lecture Notes for Data Structures and Algorithms'
        && <Algorithms handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Lecture Notes for Machine Learning'
        && <MachineLearning handleClose={handleBackdropClose} open={open} work={works[targetId]} />}

        {targetTitle === 'Linear Algebra with Python'
        && <LinearAlgebra handleClose={handleBackdropClose} open={open} work={works[targetId]} />}
      </Backdrop>
    </Box>
  );
}

export { Portfolio };
