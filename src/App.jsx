import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <Benefits />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
