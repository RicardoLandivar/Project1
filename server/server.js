const express = require('express')

const app = express();
const port = '5000';

// Middle Ware



app.get('/api/data', (req, res) => {
    // Replace with your API logic
    res.json({ message: 'Hello from Express.js!' });
  });
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));



