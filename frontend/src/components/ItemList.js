// src/components/ItemList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div>
      {items.map((item, idx) => {
        const mainImage = item.images?.[0] || '';
        return (
          <Link
            key={idx}
            to={`/item/${idx}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item-card">
              {mainImage && (
                <img
                  src={`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/images/${mainImage}`}
                  alt={item.name}
                />
              )}
              <div className="item-details">
                <h2>{item.name}</h2>
                <p><strong>Model:</strong> {item.model}</p>
                {/* Additional fields if you like */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemList;
