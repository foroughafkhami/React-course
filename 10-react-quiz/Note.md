# UseReducer

![alt text](WhyUseUseReducer.png)

> reducer is a pure function that takes current state and action, and return the next state
> ![alt text](manageUseReducer.png)

# Create fake API

1- npm i json-server
2- create npm script in package.json file by add this line to the script:

```js
    "server": "json-server --watch data/questions.json --port 9000"

```

3- Then we fetch data using useEffect hook in the App like this:

```js
const [state, dispatch] = useReducer(reducer, initialState);
useEffect(function () {
  fetch("http://localhost:9000/questions")
    .then((res) => res.json())
    .then((data) => dispatch({ type: "dataRecieved", payload: data }))
    .catch((err) => dispatch({ type: "dataFailed" }));
}, []);
```
