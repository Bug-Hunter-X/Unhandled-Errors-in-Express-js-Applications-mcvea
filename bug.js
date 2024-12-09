const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct way to handle 404
  }
  res.json(userData);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!'); // Generic error handling
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));