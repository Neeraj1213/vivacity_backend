import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// API endpoint
app.get('/awesome/applicant', (req, res) => {
  const funInformation = {
    name: 'Neeraj Pillai',
    hobbies: ['Coding', 'Reading', 'Gaming'],
    message: 'I love to learn and explore new technologies!'
  };
  res.json(funInformation);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
