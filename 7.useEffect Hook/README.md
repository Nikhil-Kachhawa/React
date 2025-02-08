useEffect :
-------------------------
- useEffect allows us to perform side effects in components
- Examples includes fetching data, directly updating the DOM etc
- Things to keep in mind :
1. If we don't specify anything as in dependency array then it will execute on every single render
2. We can't use useEffect hook inside conditional statements
3. Whenever we specify array dependency as empty array - [ ] then useEffect will get trigger when the component first renders otherwise if we specify some state var inside the array then useEffect will trigger whenever state changes.

