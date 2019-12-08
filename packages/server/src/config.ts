import dotenv from 'dotenv';
dotenv.config();

export default {
  port: parseInt(<string>process.env.PORT, 10),
  pino: {
    prettyPrint: {
      colorize: false,
      translateTime: true,
    },
    base: null,
  },
};
