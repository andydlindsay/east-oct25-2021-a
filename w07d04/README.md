# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for hooks
1. hooks must be called top-level in the same order on every render
2. hooks must be called from within React functions (components and custom hooks)
3. hooks must start with `use`

### Pure Function
* return the same result given the same input
* no side effects
* no external dependencies

```js
let additive = 2;

const addTwo = (num) => {
  const result = num + 2;
  additive++;
  return result;
};
```










