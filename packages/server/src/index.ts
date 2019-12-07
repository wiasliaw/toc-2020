import server from './server';

(async () => {
  server.listen(8000, () => {
    console.info('Success');
  });
})();
