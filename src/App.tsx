import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Attribution } from './components/attribution';
import { Rating } from './components/rating';
import { ThankYou } from './components/thank-you';

function App() {
  const [selectedRating, setSelectedRating] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/" element={<Rating selectedRating={selectedRating} setSelectedRating={setSelectedRating}  />} />
          <Route path="/thanks" element={<ThankYou selectedRating={selectedRating} />} />
        </Routes>
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
