import React from 'react';
import './App.css';
import { Rating } from './components/rating';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Rating />
      </main>
      <footer>
        <div className="attribution">
          <p>
            Challenge by{' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="#">
              Frontend Mentor
            </a>
            . Coded by <a href='_blank'>Your Name Here</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
