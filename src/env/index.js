import * as prod from './prod';
import * as local from './local';

const envs = {
  prod,
  local,
};

export default envs[process.env.REACT_APP_ENV.trim()] || envs.dev;
