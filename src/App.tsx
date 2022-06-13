import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Amplify from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Navbar, Home, About, Resume } from './components';
import './App.css';

function App() {
  useEffect(() => {
    Amplify.configure(awsconfig);
    Auth.configure(awsconfig);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
