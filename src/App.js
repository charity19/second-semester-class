import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';


const App = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 name="Charity"/>
      <HelloWorld2 />
      <HelloWorld3 name="Prime"/>
      <HelloWorld4 />
      <HelloWorld5 />
    </div>
  );
}

export default App;
