import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3004;

const jsonsDir = path.join(__dirname, '../bnbTigerNFTJson');

app.get('/', (req, res) => {
  res.send('API Is Working!!');
});

// Serve static files from the jsons directory
app.use(express.static(jsonsDir));

// GET /json/:filename - Get a specific JSON file by filename
app.get('/json/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(jsonsDir, filename);
  res.sendFile(filepath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
