export interface envToLoggerTypes {
  development: {
    transport: {
      target: string;
      options: {
        translateTime: string;
        ignore: string;
      },
    },
  },
  production: boolean;
  test: boolean;
};
