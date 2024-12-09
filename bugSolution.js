const express = require('express');
const app = express();
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  // Simulate database interaction. Replace this with actual code
  const userData = users[userId];
  if (!userData) {
    const err = new Error('User not found');
    err.status = 404;
    return next(err); // Pass the error to the error handling middleware
  }
  res.json(userData);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500).json({ error: err.message }); // Send JSON response with error details
});
const users = {
  '1': { id: 1, name: 'John Doe' },
  '2': { id: 2, name: 'Jane Smith' },
};
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));