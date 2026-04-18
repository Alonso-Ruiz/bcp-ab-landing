import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <Benefits />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
