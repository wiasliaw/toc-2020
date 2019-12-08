import server from './server';

(async () => {
  server.listen(process.env.PORT, () => {
    console.info(`Success on ${process.env.PORT}`);
  });
})();
