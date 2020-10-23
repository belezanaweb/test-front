import axios from 'axios';

const apiCreditCardMock = axios.create({
  baseURL: 'http://localhost:8000'
});

export default apiCreditCardMock;
