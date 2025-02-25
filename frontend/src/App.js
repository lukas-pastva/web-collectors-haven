// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/items`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Collector&apos;s Haven</h1>
        </header>

        <Routes>
          <Route path="/" element={<ItemList items={items} />} />
          <Route path="/item/:id" element={<ItemDetail items={items} />} />
        </Routes>

        <footer>
          <p>© {new Date().getFullYear()} Collector&apos;s Haven</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
