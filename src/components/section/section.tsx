import * as React from 'react';

const Section: React.FC<{
  title: string,
}> = ({ title = '', children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
)

export default Section;
