# Old version of redux

```js
import { createStore } from "redux";
const store = createStore(reducer);
// We should also write reducer function like useReducer.
store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());
```

## Action creators

> Action creators are simple functions that return action.
> But redux would also work without it.

## Reducers

> If we have multiple reducers,we would actually combine them into rootReducer like this:

```js
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
```
