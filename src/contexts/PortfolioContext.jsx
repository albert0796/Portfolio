import React, { createContext, useState, useMemo } from 'react';

import videoOdds from '../assets/oddsbeta.mp4';
import videoToad from '../assets/toad.mp4';
import videoWidget from '../assets/widget.mp4';
import videoXai from '../assets/xai.mp4';
import videoDeepTravel from '../assets/deepTravel.mp4';
import videoCrowdfunding from '../assets/stacking.png';
import videoPatternHunter from '../assets/patternHunterProcedure.png';
import imageOdds from '../assets/oddsbeta.png';
import imageFirebase from '../assets/firebase.png';
import imageToad from '../assets/toad.png';
import imageWidget from '../assets/widget.png';
import imageSpApi from '../assets/awsSpApi.png';
import imageXai from '../assets/xai.png';
import imageDeepTravel from '../assets/deepTravel.png';
import imageCrowdfunding from '../assets/crowdfunding.png';
import imageInsurance from '../assets/insurance.png';
import imageHouse from '../assets/house.png';
import imagePatternHunter from '../assets/patternHunter.png';
import imageEconometric from '../assets/econometric.png';
import imageFinance from '../assets/finance.png';
import imageKelly from '../assets/kellyCriterion.png';
import imageTraffic from '../assets/traffic.png';
import imageUserSystem from '../assets/userSystem.png';
import imageNTU from '../assets/ntu.png';
import imageAlgorithms from '../assets/algorithms.png';
import imageMachineLearning from '../assets/ml.png';
import imageLinearAlgebra from '../assets/linearAlgebra.png';

export const PortfolioContext = createContext();

function PortfolioContextProvider({ children }) {
  const categories = ['all', 'machine learning', 'data analysis', 'web & app', 'economics', 'class handout'];

  const works = [
    // deep travel
    {
      id: 1,
      image: {
        file: imageDeepTravel,
        width: '',
        height: '',
      },
      title: 'Deep Learning-Based Recommendation APP for Taiwan Tourist Attractions',
      category: 'machine learning',
      video: {
        file: videoDeepTravel,
        width: '',
        height: '',
      },
      details: [
        'This project won the championship in the National College Open Data Artificial Intelligence Competition.',
        "The project aims to build an iOS app that provides recommendations for tourist attractions in Taiwan to fulfill users' travel needs while visiting Taiwan. When users capture any interesting scenes around the world, and input them into the app, the system will utilize a deep learning model to recognize and recommend Taiwan tourist spots that are most like the captured scene.",
        "The recognition models apply transfer learning, includes ResNet50, MobileNet, DenseNet and VGG16. I also try different optimizers, normalization, activations, learning rates to tune the models. As to mobile devices, I integrated Core ML 2.0, a machine learning framework introduced by Apple at WWWDC 2018, into the app. All the computation is run by GCP virtual machine."
      ],
      link: {
        website: '',
        document: 'https://github.com/albert0796/MachineLearning/blob/master/Project_TaiwanDeepTravel/Report/Project%20Description_Open%20Data%20Analysis%20Competition.pdf',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/Project_TaiwanDeepTravel',
      },
      skills: 'Deep learning, Transfer learning, iOS Core ML 2.0, Image data annotation, Google Cloud computing, Data augmentation',
    },
    // xai
    {
      id: 0,
      image: {
        file: imageXai,
        width: '',
        height: '',
      },
      title: 'Explainable Digital Currency Candlestick Pattern AI Learner',
      category: 'machine learning',
      video: {
        file: videoXai,
        width: '',
        height: '',
      },
      details: [
        'The paper gets accepted at the Knowledge and Smart Technology (KST) 2022 International Conference, hosted by IEEE.',
        'Given the black-box of deep neural network (DNN), the study aims to expose and enhance the explainability of a DNN-based trading strategy, candlestick pattern recognition, and makes an acceptable justification for traders in the cryptocurrency market. The study applies modified adversarial attack to explore the model’s explainability and data augmentation to generate adversarial training samples for models to enhance its explainability.',
      ],
      link: {
        website: 'https://ieeexplore.ieee.org/document/9727231?fbclid=IwAR3doeRuCKiY19_yQbSFqeiKBnurg4n1eK9tPEETEpiCXp2kolE1hYB-I7M',
        document: 'https://drive.google.com/file/d/1ii87CH1jMoPjkiLWGv_j_yqF9VJhzKVX/view',
        github: 'https://github.com/pecu/FinancialVision/tree/master/Explainable%20Digital%20Currency%20Candlestick%20Pattern%20AI%20Learner',
      },
      skills: 'Explainable Artificial Intelligence, Data Augmentation, Adversarial Attacks, Convolutional Neural Network, Candlestick Patterns, Time-Series Encoding, Financial Vision',
    },
    // insurance
    {
      id: 4,
      image: {
        file: imageInsurance,
        width: '',
        height: '',
      },
      title: 'Cathlife Critical Illness Insurance Purchasing Data Analysis',
      category: 'data analysis',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'The project won the 34th place out of 300 nationwide in the Cathay Life Big Data Competition.',
        "The project aims to utilize customers' historical data to predict whether existing customers will purchase critical illness insurance policies within a specific timeframe.",
        'The analysis focuses on the insurance-domain-based data analysis. It places great emphasis on data cleaning and addressing unbalanced (98000:2000) dataset. It also builds analysis pipeline, which includes data cleaning, exploratory data analysis (EDA), feature engineering and model validation.',
      ],
      link: {
        website: '',
        document: 'https://github.com/albert0796/MachineLearning/blob/master/Competition_Cathlife/report/Cathlife%20Critical%20Illness%20Insurance%20Purchasing%20Data%20Analysis.pdf',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/Competition_Cathlife',
      },
      skills: 'Machine Learning, Python, Exploratory Data Analysis (EDA), Data Cleaning, Domain-based Data Analysis',
    },
    // pattern hunter
    {
      id: 2,
      image: {
        file: imagePatternHunter,
        width: '',
        height: '',
      },
      title: 'Deep Learning-Based Candlestick Pattern Recognition System',
      category: 'machine learning',
      video: {
        file: videoPatternHunter,
        width: '',
        height: '',
      },
      details: [
        "To take advantage of the candlestick pattern recognition to a great extent and support the trader, we build an AI-based system that can absorb professional traders' domain knowledge and excel in visual recognition.",
        "The system is a minimum viable product with a GAF-CNN model deployed on the cloud, user interface for traders to label patterns, dashboard to summarize result and back-end database to store historical data and labeled patterns."
      ],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/Pattern%20Hunter',
      },
      skills: 'Deep Learning, Computer Vision, Python, Django, Javascript, Bootstrap, Financial Domain',
    },
    // crowdfunding
    {
      id: 3,
      image: {
        file: imageCrowdfunding,
        width: '',
        height: '',
      },
      title: 'Ensemble Machine Learning on Crowdfunding Data for Project Status and Amount Pledge Prediction',
      category: 'machine learning',
      video: {
        file: videoCrowdfunding,
        width: '',
        height: '',
      },
      details: [
        'The project aims to evaluate the success status and the final pledge amount of a launched project at the early stage in Kickstarter and Indiegogo, which are two world-famous crowdfunding platforms.',
        'I apply the Stacking, an ensemble machine learning method, to make prediction and compare its performance with different machine learning models, including XGBoost, Neural Network, Ridge Regression, Random Forest, SVM, etc. The project also builds analysis pipeline, which includes data cleaning, EDA, feature engineering and model validation.'],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/Paper_CrowdFunding',
      },
      skills: 'Machine Learning, Python, Exploratory Data Analysis (EDA)',
    },
    // house
    {
      id: 5,
      image: {
        file: imageHouse,
        width: '',
        height: '',
      },
      title: "Kaggle's House Prices Prediction",
      category: 'data analysis',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'The goal of the project is to predict the final sale prices of houses. The dataset contains various features of residential home, such as the number of bedrooms, the size of the lot, the neighborhood, and many others. The project covers much feature engineering, involving handling missing values, transforming variables, creating interaction terms. Additionally, it applies Stacking, ensemble learning, and hype-tunes multiple machine learning model to predict and make comparison.',
      ],
      link: {
        website: '',
        document: '',
        github: "https://github.com/albert0796/MachineLearning/tree/master/Kaggle's%20House%20Price%20Prediction",
      },
      skills: 'Machine Learning, Python, Feature Engineering, Data Cleaning, Domain-based Data Analysis',
    },
    // Electric Vehicle
    {
      id: 12,
      image: {
        file: imageFinance,
        width: '',
        height: '',
      },
      title: "Evaluation and Financial Analysis of Taiwan's Electric Vehicle Supply Chain Companies",
      category: 'economics',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        "The project achieved third place in the Enterprise Value and Risk Analysis category of the Soochow University's 2018 College of Commerce's research competition.",
        "2.	This study conducts an industry analysis of the supply chain for Tesla electric vehicle charging connectors, focusing on both the global and Taiwanese markets.",
        'It extensively examines the financial statements of three Taiwanese suppliers, namely BizLink Holding Inc, SINBON Electronics, and K. S. TERMINALS INC., to analyze various financial aspects including profitability, cash flow, operational efficiency, short-term debt, long-term debt, and DuPont analysis.',
        'Based on the findings, the most financially robust company is identified, and a stock price forecast is generated to provide investment predictions.',
      ],
      link: {
        website: '',
        document: 'https://drive.google.com/file/d/1GcorFN6xEVS7mAJYjfR3pXs4niva6nhQ/view?usp=sharing',
        github: '',
      },
      skills: 'Financial Statement Analysis, Accounting, Industrial Analysis, Investment',
    },
    // accounting conversion
    {
      id: 9,
      image: {
        file: imageSpApi,
        width: '',
        height: '',
      },
      title: 'Accounting Data Conversion Backend Development',
      category: 'web & app',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        "The overall process of this project aims to automate the conversion of accounting data from the company's AWS platform and import it into the new ERP system.",
        'The following steps are needed:',
        "Enable the necessary credentials for the AWS SP API and integrate the API to retrieve the accounting data from the company's AWS platform.",
        'Format the accounting data and package it into an API using Python and the Flask backend framework.',
        'Set up a Docker environment in the Google console platform and deploy a SQL database along with the completed API within the Docker space.',
        'Write an algorithm to periodically request the API from the GCP and make the data stored in the cloud SQL database.',
      ],
      link: {
        website: '',
        document: '',
        github: '',
      },
      skills: 'Flask, Python,Docker, Google Cloud Platform (GCP), AWS SP-API',
    },
    // Lucy Mart firebase
    {
      id: 20,
      image: {
        file: imageFirebase,
        width: '',
        height: '',
      },
      title: 'LuckyMart Indian Convenient Store Online Member System Firebase Backend Development',
      category: 'web & app',
      video: {
        file: imageFirebase,
        width: '',
        height: '',
      },
      details: [
        "I led to apply Firebase's Authentication, online Firestore, Cloud Function, and App Check to develop the develop members' authentication, database, and information security. The authentication includes mobile phone OTP, Email and Facebook certification. All the process was also tested under Firebase local emulator.",
      ],
      link: {
        website: '',
        document: '',
        github: 'https://www.luckymart.co.in/',
      },
      skills: 'Firebase Cloud Functions, Authentication, Firestore, App Check, Security Rule, and local emulator, React.js. Javascript, CSS, html',
    },
    // toad
    {
      id: 8,
      image: {
        file: imageToad,
        width: '',
        height: '',
      },
      title: 'TOAD Wine Company Website',
      category: 'web & app',
      video: {
        file: videoToad,
        width: '',
        height: '',
      },
      details: [
        'I managed the full-stack development of the Toad Wine Company Website, including all the front-end’s interface, including website animations homepage, product catalog, and the back-end Blogger and Firebase database development.',
        'The project uses Blogger and Firebase as the backend system and hosts the website on the Google console platform. The merchant posts the desired articles and images in the Blogger blog, and the website will request the content using the Blogger API and render them on the website. Additionally, given the privacy matter, the purchase records of members are stored in an external database built by Firebase.',
      ],
      link: {
        website: 'https://toad2015.com/',
        document: '',
        github: '',
      },
      skills: 'React.js, HTML, CSS, Javascript, Material UI, Firebase, Blogger',
    },
    // oddsbeta
    {
      id: 6,
      image: {
        file: imageOdds,
        width: '',
        height: '',
      },
      title: 'ODDSBETA Sport Website',
      category: 'web & app',
      video: {
        file: videoOdds,
        width: '',
        height: '',
      },
      details: [
        'The website displays real-time news and gambling odds information for various sports events. It also provides the widget of sports event information dashboards for companies or developers to integrate into their system.',
        'I managed the website deployment and development of all the front-end interfaces, including information columns of the sport event, functional blocks, news page, and the Widget sales page. The front-end framework is React.js and the website is deployed on the Google Cloud Platform (GCP).',
      ],
      link: {
        website: 'https://oddsbeta.com/',
        document: '',
        github: '',
      },
      skills: 'React.js, HTML, CSS, Javascript, Material UI, Google Cloud Platform (GCP)',
    },
    // widget
    {
      id: 7,
      image: {
        file: imageWidget,
        width: '',
        height: '',
      },
      title: 'ODDSBETA Cricket Scorecard Widget',
      category: 'web & app',
      video: {
        file: videoWidget,
        width: '',
        height: '',
      },
      details: [
        'The Widget presents the real time score and schedule about various sports events, like cricket, football, and basketball, in the form of scorecard and provides it as a package for users. Users can simply integrate the scorecard Widget into their own websites, without the need for additional frontend and backend development or utility designs.',
        'I led all the frontend development of the scorecard and packaging of the Widget. For the detail of widget, please refer to the document below.',
      ],
      link: {
        website: 'https://sprodm.uni247.xyz/#/category/cricket',
        document: 'https://skinny-quartz-d64.notion.site/Oddsbeta-Cricket-Widget-Document-66ee36b8b722485bb56d7eb1db2d757b?pvs=4',
        github: '',
      },
      skills: 'React.js, HTML, CSS, Javascript, Material UI, Google Cloud Platform (GCP)',
    },
    // member system
    {
      id: 10,
      image: {
        file: imageUserSystem,
        width: '',
        height: '',
      },
      title: 'Member System Backend Development',
      category: 'web & app',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'This project aims to build a member system whose technical structure combines API development and cloud deployment.',
        'The following steps are needed:',
        'Develop a member system API that can get, create, update, delete user data from the database and use Flask as the back-end framework.',
        'Set up a Docker environment in the Google console platform and deploy a MongoDB database along with the completed API within the Docker space.',
      ],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/Member-System',
      },
      skills: 'Flask, Python, Docker, Google Cloud Platform (GCP)',
    },
    // econometric
    {
      id: 11,
      image: {
        file: imageEconometric,
        width: '',
        height: '',
      },
      title: 'Exploring the Relationship between Corporate Financial Indicators and Stock Valuation through Econometric Methods',
      category: 'economics',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'The study integrates accounting financial analysis and employs the simple regression model in econometrics to examine the impact of the financial structure of Taiwanese listed companies between 2014 and 2016 on stock valuation in terms of profitability, cash flow, operational efficiency, short-term debt, long-term debt, and company size. The analysis is implemented using the SAS statistical software.',
      ],
      link: {
        website: '',
        document: 'https://drive.google.com/file/d/1sTypB_svTKlXITYwauot2cmom589Jzyc/view?usp=drive_link',
        github: '',
      },
      skills: 'SAS, Econometric, Financial Statement Analysis, Statistics',
    },
    // data structure
    {
      id: 16,
      image: {
        file: imageAlgorithms,
        width: '',
        height: '',
      },
      title: 'Lecture Notes for Data Structures and Algorithms',
      category: 'class handout',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'It is a lecture note made for the data structures and algorithms course offered by Prof. Yun-Cheng Tsai in Soochow University. It covers multiple algorithms, including Linked List, Stack & Queue, Quick Sort, Merge Sort, Binary Tree, Binary Search Tree, Red Black Tree, Hash Table, Breadth-First Search, Depth-First Search, Minimum Spanning Tree and Shortest Path. Each algorithm has a note of its concept and demo of its source code made by Python.',
      ],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/DataStructure/tree/master',
      },
      skills: 'Data Structures and Algorithms, Python',
    },
    // ml
    {
      id: 17,
      image: {
        file: imageMachineLearning,
        width: '',
        height: '',
      },
      title: 'Lecture Notes for Machine Learning',
      category: 'class handout',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'It is a lecture note made for the machine-related courses offered in the graduate schools of Soochow University. It covers multiple machine learning methods, including EDA, Bayesian, Clustering, Decision Tree, Dimension Reduction, Ensemble, KNN, Logistic Regression, Neural Network, Regression, SVM, Validation. Each method has note of concept and demo of source code.',
        'The Final project aims to predict S&P 500 index’s Close price ten days ahead, using daily features (Open, High, Low, Close, Volume) of each day, including the current day and the past 30 days. Noticeably, it applies cross-validation to tune hyperparameters. To avoid overfitting and maintain the model’s robustness, it chooses hyperparameters which has max value of mean test score + 1.96 * std test score in cross-validation.',
      ],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/ClassHangout',
      },
      skills: 'Machine Learning, Python',
    },
    // linear algebra
    {
      id: 18,
      image: {
        file: imageLinearAlgebra,
        width: '',
        height: '',
      },
      title: 'Linear Algebra with Python',
      category: 'class handout',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        "It displays how to apply multiple linear algebra's theorems in Python. The theorems covered include Gaussian Elimination, Power Method Scaling, Laplace Expansion, Eigenvalues & Eigenvectors, Gauss-Seidel Method, Orthogonality, Leslie Matrix & Adjacency Matrix, Quadratic Forms, Graph and Least Squares Approximation.",
        'It also shows how to make the efficient frontier of Markowitz Asset Allocation, which is a famous modern portfolio theory, by Python. This theory involves matrix operations. To elaborate, the efficient frontier is a graphical representation of portfolios created by different weights of assets. On the frontier, each portfolio has the lowest standard deviation for each level of return. To achieve this goal, it needs to use linear programming to find the optimal portfolio weights that minimize portfolio variance.',
      ],
      link: {
        website: '',
        document: '',
        github: 'https://github.com/albert0796/Math/tree/master/ClassHangout_LinearAlgebra',
      },
      skills: 'Linear Algebra, Python',
    },
    // kelly
    {
      id: 13,
      image: {
        file: imageKelly,
        width: '',
        height: '',
      },
      title: 'The Application of Kelly Criterion in Determining Optimal Capital Structure',
      category: 'economics',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'It combines investment theory with the Kelly criterion to construct an equity growth model for companies, offering strategies for optimal capital structure in the long term. The methodology involves accounting theory, optimization, and the binomial options pricing model (BOPM).',
      ],
      link: {
        website: '',
        document: 'https://drive.google.com/file/d/1hvEchadxwtRYr91N12KP8njFlgeaFH8z/view?usp=sharing',
        github: '',
      },
      skills: 'Accounting, Futures and Options, Optimization, Calculus',
    },
    // traffic
    {
      id: 14,
      image: {
        file: imageTraffic,
        width: '',
        height: '',
      },
      title: 'Configuration, Planning, and Exploration of Public Transportation',
      category: 'economics',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'The project achieved the First place in the 2017 undergraduate thesis competition at the Department of Economics, Soochow University.',
        'The research aims to investigate how the location, spacing, traffic flow, and density of public transportation stations in a mathematical model can determine the optimal configuration that maximizes overall societal utility. Once the transportation network is established, the study further examines the costs borne by individuals located at various positions when commuting to their workplaces. This analysis helps determine the most suitable commuting mode for each individual.',
      ],
      link: {
        website: '',
        document: 'https://drive.google.com/file/d/13CQa1AojPX3HPzrwk-6J3ut9BLxYwm-U/view?usp=sharing',
        github: '',
      },
      skills: 'Regional Economics, Optimization, Mathematics',
    },
    // ntu
    {
      id: 15,
      image: {
        file: imageNTU,
        width: '',
        height: '',
      },
      title: 'Teaching Notes for Financial Innovation Course at National Taiwan University',
      category: 'class handout',
      video: {
        file: '',
        width: '',
        height: '',
      },
      details: [
        'It is a teaching note for a deep-learning-related class I taught in the financial innovation course, offered by Prof. Yun-Cheng Tsai in National Taiwan University. The class is about applying deep-learning-based models to financial trading.',
        'The class covers the concept of trading strategy and the deep learning model and how to put the idea into practice. The practice includes time series data processing via python, time series data encoding and Convolution Neural Network and Recurrent Neural Network modeling.',
      ],
      link: {
        website: '',
        document: 'https://github.com/albert0796/MachineLearning/blob/master/Financial%20Innovation%20Teaching%20Notes/TeachingNote.md',
        github: 'https://github.com/albert0796/MachineLearning/tree/master/Financial%20Innovation%20Teaching%20Notes',
      },
      skills: 'Deep Learning, Data Processing, Python, Financial Investment',
    },
  ];

  const portfolioMemo = useMemo(() => ({
    categories,
    works,
  }
  ), []);

  return (
    <PortfolioContext.Provider value={portfolioMemo}>
      {children}
    </PortfolioContext.Provider>
  );
}

export { PortfolioContextProvider };
