import React, { FunctionComponent, useState } from 'react';

interface AppProps {
 color?: string 
}

const App: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCounter(counter+1)}>Increment</button>
      <button onClick={() => setCounter(counter-1)}>Decrement</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default App;
