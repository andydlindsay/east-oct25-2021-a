import './App.css';
import ClassBased from './components/ClassBased';
import {useState} from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <h2>Class-Based Components</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      { isVisible && <ClassBased someProp="something amazing" /> }
    </div>
  );
}

export default App;
