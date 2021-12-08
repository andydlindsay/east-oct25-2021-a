// all primitives are immutable
const personOne = {
  name: 'Alice',
  age: 42,
  likes: ['pancakes']
};

// const copy = personOne;

const copy = {
  ...personOne,
  name: 'Bob',
  likes: [
    ...personOne.likes,
    'waffles'
  ]
};

// copy.name = 'Bob';
// copy.likes.push('waffles');

console.log('personOne', personOne);
console.log('copy', copy);
