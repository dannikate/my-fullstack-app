// server.js 

import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}`);
});