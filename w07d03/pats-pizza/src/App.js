import './App.css';
import {useState} from 'react';
import Whatever from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  const [heading] = useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      <Whatever title={heading} />
      <Pizza />
      {/* <VisitorCounter /> */}
      {/* <Header title="About Us" /> */}
      {/* Header({title: "Pat's Pizza Place"}) */}
    </div>
  );
};

export default App;
