# Props vs States

> props: data comes from outside the component
> state: component holds its own data and over time, change the UI as a result of an action
> updating state triggers react to update the component(keeps the UI insync with the data)

# hooks

> all the React functions that start with use are hooks.like useState,useEffect,useReducer
> we can use hooks only on the top level of the functions

# Update state

> When we set state based on the current state,we should use callback function

```js
setStep((s) => s + 2);
```

# UI

> is the reflection of data changing over time

# CHALLENGES

## Number 1

> https://codesandbox.io/p/sandbox/bold-pine-yykcqc?file=%2Fsrc%2FApp.js%3A70%2C25
