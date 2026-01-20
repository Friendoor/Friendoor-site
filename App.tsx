import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import ClientList from './components/ClientList';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navigation />
      <Hero />
      <ClientList />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

export default App;