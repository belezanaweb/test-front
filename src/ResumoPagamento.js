import React from 'react';
import { useLocation } from 'react-router-dom';

const ResumoPagamento = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search);
  return (
    <div className="cont">
      <p>{search.get('nrCartao')}</p>
      <p>{search.get('nomeTitular')}</p>
      <p>{search.get('validade')}</p>
    </div>
  );
};

export default ResumoPagamento;
