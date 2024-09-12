// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Endpoint to handle calculation
app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    // Use the JavaScript eval function to calculate the result
    // WARNING: eval can be dangerous if not used properly. For production use a safer approach.
    const result = eval(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
