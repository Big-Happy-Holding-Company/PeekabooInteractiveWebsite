
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppSection from './components/AppSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <AppSection
          title="Peekaboo Calm"
          description="A gentle, interactive physics diorama for toddlers 0–4. Tap, peek, and listen as soft surprises unfold at your child’s pace. Perfect for sensory-sensitive kids and cozy routines like bedtime wind-down."
          appStoreLink="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
          imageAlt="Peekaboo Calm app illustration"
          key="calm"
        >
          <p>Record Your Own Voice lets a parent, grandparent, or sibling add a soft, familiar hello, making play feel cozy and personal.</p>
        </AppSection>
        <AppSection
          title="Peekaboo Plunk"
          description="Like a modern see-and-say, tiny taps create quiet cause-and-effect moments. Soothing colors, soft sounds, and large touch areas invite peaceful discovery without any pressure."
          appStoreLink="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469?uo=2"
          imageAlt="Peekaboo Plunk app illustration"
          key="plunk"
          reverse
        >
          <p>Designed for short, delightful sessions and easy co-play, turning small taps into gentle, everyday magic.</p>
        </AppSection>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
