import Api from '@/services/api';

export default {
  getData(params) {
    return Api().get(`/${params.data}`);
  },
};
