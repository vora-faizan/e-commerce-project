import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FavoritesPage = () => {
  // Use useState to manage favorites state
  const [fav, setFav] = useState(() => {
    // Try to get fav data from localStorage, if not found, return an empty array
    const storedFavorites = JSON.parse(localStorage.getItem('fav')) || [];
    return storedFavorites;
  });

  // useEffect to update localStorage when fav state changes
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  // Function to clear fav
  const clearFav = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will clear your favorites!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        setFav([]); // Clear the favorites array
        Swal.fire('Cleared!', 'Your favorites have been cleared.', 'success');
      }
    });
  };

  console.log();

  return (
    <>
      <div>FavoritesPage</div>
      {/* Button to clear favorites */}
      <button onClick={clearFav}>Clear Favorites</button>
      {/* Table to display favorites */}
      <table>
        <thead>
          <tr>
            {/* You can add header here if needed */}
          </tr>
        </thead>
        <tbody>
          {fav.map((item, i) => (
            <tr key={i}>
              {Object.values(item).map((value, key) => (
                <td key={key}>{value}</td>
              ))}
              <td>
                {/* Link to view item */}
                <Link to={`/${item._id}`}>View Item</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FavoritesPage;
