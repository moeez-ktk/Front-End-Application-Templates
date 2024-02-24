import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="main-content">
        <h1>Single Page Front End Application</h1>
        <p>This is a simple home page.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
