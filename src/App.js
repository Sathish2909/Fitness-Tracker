import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Plans from './components/Plans';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <Services />
        <Plans />
        <Contacts />
      </main>
      <footer>
        <p> 2024 FitnessPro. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;