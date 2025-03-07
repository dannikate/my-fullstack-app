import './style.css';

const API_BASE_URL = 'https://my-fullstack-app-hazel.vercel.app/';

const app = document.getElementById('app');

// fetch data from the backend 
async function fetchData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api`);
    const data = await response.json();
    app.innerHTML =`<h1>${data.message}</h1><hr><p>(printing the message from the frontend)</p>`;
  } catch (error) {
    app.innerHTML =`<h1>Error: ${error.message}</h1>`;
  }
}

fetchData();