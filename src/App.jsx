import React from 'react';
import { useVariant } from './hooks/useVariant';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  const variant = useVariant();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner variant={variant} />
      <Benefits variant={variant} />
      <Form variant={variant} />
      <Footer />
    </div>
  );
}

export default App;
