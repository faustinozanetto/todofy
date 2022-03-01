import next from 'next';
import { createServer } from 'http';
import { __PORT__, __PROD__ } from '@utils/constants';

async () => {
  // Create Next.js app
  const app = next({
    dev: !__PROD__,
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
        console.log('Server listening on port:', process.env.PORT);
      })
      .listen(__PORT__);
  });
};
