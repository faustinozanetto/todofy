import 'dotenv/config';
import next from 'next';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;
const DEV = process.env.NODE_ENV !== 'production';

require('dotenv').config();

(async () => {
  // Create Next.js app
  const app = next({
    dev: DEV,
  });

  // Prepare app
  await app.prepare().then(() => {
    // Get request handler.
    const requestHandler = app.getRequestHandler();
    // Create server
    const server = createServer(async (req, res) => {
      requestHandler(req, res);
    });
    // Error handling
    server.on('error', (error) => {
      console.error('Server error:', error);
      process.exit(1);
    });
    // Server listening
    server
      .on('listening', async () => {
        console.log('Server listening on port:', PORT);
      })
      .listen(PORT);
  });
})();
