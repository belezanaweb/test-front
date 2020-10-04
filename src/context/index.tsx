import React from 'react';

import { ResumeProvider } from 'context/resume';

const AppProvider: React.FC = ({ children }) => (
  <ResumeProvider>
    { children }
  </ResumeProvider>
);

export default AppProvider;
