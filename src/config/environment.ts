export const getConfigs = () => {
  const configs = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    ENDPOINT: process.env.ENDPOINT,
  };

  return configs;
};
