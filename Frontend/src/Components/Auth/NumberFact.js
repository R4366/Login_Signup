import React, { useEffect, useState } from 'react';

const NumberFact = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://numbersapi.com/random/trivia?json')
      .then(res => res.json())
      .then(data => {
        setFact(data.text);
        setLoading(false);
      })
      .catch(() => {
        setFact('Could not fetch a fact at this time.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading fact...</p>;

  return (
    <div style={{
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Fact of the Day:</h3>
      <p>{fact}</p>
    </div>
  );
};

export default NumberFact;