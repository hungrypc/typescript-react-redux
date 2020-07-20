import React, { FunctionComponent } from 'react';

interface AppProps {
 color: string 
}

const App: FunctionComponent<AppProps> = (props) => {
  return (
    <div className="App">
      Testing props:
      <div>{props.color}</div>
    </div>
  );
}

export default App;
