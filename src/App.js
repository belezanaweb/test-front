import React from 'react';
import Header from './Header';
import Sacola from './Sacola';
import Pagamento from './Pagamento';
import Confirmacao from './Confirmacao';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    try {
      fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((res) => res.json())
        .then((json) => this.setState({ data: json }));
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="sacola" element={<Sacola />} />
            <Route path="pagamento" element={<Pagamento />} />
            <Route path="confirmacao" element={<Confirmacao />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
