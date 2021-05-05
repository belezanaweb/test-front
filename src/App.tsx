import React from "react";
import { Theme } from "./components";
import { Public } from "./routes";

const App: React.FC = () => {
  return (
    <Theme>
      <Public />
    </Theme>
  );
};

export default App;
