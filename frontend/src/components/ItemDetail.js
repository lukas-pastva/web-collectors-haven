import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * This component uses a route parameter (e.g. /item/:id) to find the correct item
 * from the array of items passed in from App.js.
 *
 * items: array of item objects
 * Each item is expected to have the following structure:
 * {
 *   name: string,
 *   model: string,
 *   description: string,
 *   bought: string,
 *   price: number,
 *   year_of_make: number,
 *   images: string[]
 * }
 */

function ItemDetail({ items }) {
  // "id" here corresponds to the route parameter in the URL
  const { id } = useParams();

  // Convert the "id" (a string) to a number and find the matching item
  // or, if you store a unique ID in each item, adapt accordingly
  const itemIndex = parseInt(id, 10);
  const item = items[itemIndex];

  if (!item) {
    return <div style={{ padding: '20px' }}>Item not found.</div>;
  }

  // Main image is the first image in the array
  const mainImage = item.images?.[0] || '';
  // Any remaining images are the gallery
  const galleryImages = item.images && item.images.length > 1
    ? item.images.slice(1)
    : [];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>{item.name}</h2>
      <p><strong>Model:</strong> {item.model}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Date Bought:</strong> {item.bought}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Year of Make:</strong> {item.year_of_make}</p>

      {mainImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/images/${mainImage}`}
            alt={item.name}
            style={{ width: '300px', borderRadius: '8px' }}
          />
        </div>
      )}

      {galleryImages.length > 0 && (
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {galleryImages.map((galleryImage, idx) => (
            <img
              key={idx}
              src={`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/images/${galleryImage}`}
              alt={`Gallery ${idx}`}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
