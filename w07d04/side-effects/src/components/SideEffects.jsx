import {useState, useEffect} from 'react';

const SideEffects = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   if (counter < 20) {
  //     setCounter(prev => prev + 1);
  //   }
  // }, [counter]);

  useEffect(() => {
    console.log('updated the document title');
    document.title = `You have clicked ${counter} times`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the timer has fired: ${counter}`);
    }, 2000);

    const cleanup = () => {   
      console.log('interval cleared');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>This is the side effect component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <label>New username:</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <h2>Current username: {username}</h2>
      </div>
    </div>
  );
};

export default SideEffects;