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

4- To run the fake server we need to run this command in the terminal:

```
npm run server
```

# Clean up a Timer

> For example here in this app we need to cleanup the timer otherwise we will have multiple timers running even after finishing the quiz. Here how to clean up

```js
useEffect(
  function () {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  },
  [dispatch]
);
```

# CHALLENGE NUMBER 1 PART 16(bank account using useReducer)

> https://codesandbox.io/p/sandbox/3rwq5h?file=%2Fsrc%2FApp.js%3A61%2C1
