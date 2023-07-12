const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const { headers } = req;

  // Extract the 'referer' header, which contains the domain
  const refererHeader = headers.referer || headers.referrer;
  
  // Extract the domain from the 'referer' header
  const domain = refererHeader ? new URL(refererHeader).hostname : '';

  // Perform further processing or validation based on the domain
  // ...

  // Return a response based on the domain or any other processing
  res.json({ domain });
});

app.listen(80, () => {
  console.log('Server is running on port 3000');
});