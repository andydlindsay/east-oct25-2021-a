import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('deep');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'deep'
  });

  const [newTopping, setNewTopping] = useState('');

  const newCrustHandler = (event) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza, 
        crustType: event.target.value
      }
    });
  };


  const clickHandler = () => {
    // toppings.push(newTopping);

    // setToppings((prevToppings) => {
    //   return [...prevToppings, newTopping];
    // });

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      }
    });

    setNewTopping('');
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust type: {pizza.crustType}</h2>
        <label>New crust type:</label>
        <input 
          value={pizza.crustType}
          onChange={newCrustHandler}
        />
      </div>

      <div>
        <label>New Topping:</label>
        <input 
          onChange={(event) => setNewTopping(event.target.value)}
          value={newTopping}
        />
        <button onClick={clickHandler}>Add topping</button>
      </div>

      { pizza.toppings.map((topping, index) => {
        return <p key={index}>{topping}</p>
      }) }
    </div>
  );
};

export default Pizza;
