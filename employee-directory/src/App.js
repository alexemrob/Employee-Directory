import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Heading />
     <Main />
   </Wrapper>
    </div>
  );
}

export default App;