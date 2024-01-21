# Using useEffect to fetch API

## Intro
This is the seventeenth project of my 30-day coding challenge. The project includes following tech stuff: React, Hook "useState", "useEffect", API. On the 17th day I focused on useEffect logic, while on the 18th, displaying the fetched data in a nicer way.

## Breaking down the code
First, I started with hook useState. I have these state variables:
`resourceType`: Keeps track of the type of resource to fetch (initialized with 'posts').
`items`: Stores the fetched data from the API.

`Effect Hook (useEffect)`: I use the useEffect hook to perform the API call whenever the `resourceType` changes. The effect fetches data from the JSONPlaceholder API based on the current resourceType and updates the items state with the fetched data.

My app component renders a set of buttons for selecting different resource types (posts, users, comments). Clicking on a button updates the resourceType state, triggering a re-fetch of data.
The component displays the current resourceType as an <h1> heading and maps through the items array, rendering information for each item in a container. 

## Demo
Click <a href="https://splendorous-seahorse-9257d3.netlify.app/"> here </a>.