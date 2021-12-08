import {useState} from 'react';

const VisitorCounter = () => {
  console.log('this component rendered');
  const [numVisitors, setNumVisitors] = useState(0);

  const clickHandler = () => {
    // setNumVisitors(0 + 1);
    // setNumVisitors(0 + 1);
    // setNumVisitors(0 + 1);

    setNumVisitors((prevNumVisitors) => {
      console.log('prevNumVisitors', prevNumVisitors);
      return prevNumVisitors + 1;
    });
    setNumVisitors((prevNumVisitors) => {
      console.log('prevNumVisitors', prevNumVisitors);
      return prevNumVisitors + 1;
    });
    setNumVisitors((prevNumVisitors) => {
      console.log('prevNumVisitors', prevNumVisitors);
      return prevNumVisitors + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter!!</h2>
      <h2>Num Visitors: {numVisitors}</h2>
      <button onClick={clickHandler}>Click Me!!</button>
    </div>
  );
};

// const named = () => {};
// $('.btn').on('click', named);
// $('.btn').click(() => {});

// document.addEventListener('click', () => {});

export default VisitorCounter;
