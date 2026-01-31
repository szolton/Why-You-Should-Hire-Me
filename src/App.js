import React from 'react';
import Navbar from './components/Navbar';         // Make sure this path matches your file
import WhyHireMePage from './pages/WhyHireMePage'; // Make sure this path matches your file

function App() {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main landing page */}
      <WhyHireMePage />
    </div>
  );
}

export default App;
