import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => (
      <div key={item.id} className='item-container'>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))}
    </>
  );
}

export default App;
