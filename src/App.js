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
      <div className='button-container'>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => (
        <div
          key={item.id}
          className={`item-container ${
            resourceType === 'posts'
              ? 'post-container'
              : resourceType === 'users'
              ? 'user-container'
              : 'comment-container'
          }`}
        >
          <h2>{item.title || item.name}</h2>
          <p>{item.body || item.email || item.body}</p>
          {resourceType === 'users' && (
            <>
              <p>{item.phone}</p>
              <p>{item.website}</p>
            </>
          )}
          {resourceType === 'comments' && <p>{item.body}</p>}
          <div className="json-container">
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        </div>
      ))}
    </>
  );
}


export default App;
