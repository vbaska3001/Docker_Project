const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const PORT = 3000;
const MONGO_URL = 'mongodb://mongodb:27017'; // Use container service name
const DB_NAME = 'profiledb';

const client = new MongoClient(MONGO_URL);

http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    let file = req.url === '/' ? '/profile.html' : req.url;
    let filePath = path.join(__dirname, file);
    let ext = path.extname(filePath);
    let contentType = ext === '.js' ? 'text/javascript' : 'text/html';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });

  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        await client.connect();
        const db = client.db(DB_NAME);
        const collection = db.collection('profiles');
        await collection.insertOne(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Profile saved to MongoDB!' }));
      } catch (err) {
        console.error('MongoDB Error:', err);
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
