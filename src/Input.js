import React from 'react';

const Input = ({ id, label, placeholder, ...props }) => {
  const [nome, setNome] = React.useState('');

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        value={nome}
        name={nome}
        id={id}
        placeholder={placeholder}
        onChange={(event) => setNome(event.target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
