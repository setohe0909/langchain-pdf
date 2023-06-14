/* eslint-disable */
const { createServer } = require('http');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
  });
});
