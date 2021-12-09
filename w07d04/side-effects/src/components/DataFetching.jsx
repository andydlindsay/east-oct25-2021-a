import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [recipes, setRecipes] = useState([
    { id: 4, title: 'Something Tasty', ingredients: [] }
  ]);
 
  useEffect(() => {
    const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
    axios.get(url)
      .then((response) => {
        // console.log(response.data);
        // setRecipes([...recipes, ...response.data]);

        setRecipes((prevRecipes) => {
          return [...prevRecipes, ...response.data];
        });
      })
      .catch((err) => {
        setErrorMessage('sorry, something went wrong. try again later.');
      });
  }, []);

  // useEffect(() => {
  //   axios.post('/pizzas', pizza)
  //   axios.post(url, infoToSendToServer)
  //     .then(response => console.log(response.data))
  // }, [props.productId]);

  return (
    <div>
      <h2>Let's Fetch Some Data</h2>
      { errorMessage && <p>Error: {errorMessage}</p> }

      <h2>Tasty Tasty Recipes</h2>
      { recipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.title} ({recipe.id})</p>
      })}
    </div>
  );
};

export default DataFetching;
