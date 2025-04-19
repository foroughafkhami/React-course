# Old version of redux

## installation

```
npm i redux
npm i react-redux
```

## how to create it

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

## connect redux app with react

```js
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

> Now our application knows about redux store,which means that every single component can now read data from store and can dispatch actions to it.(broadcasting global state into every component that wants to read it.)

### read data from redux Store

```js
import { useSelector } from "react-redux";
function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
```

> This component is subsccribed to store,and when store changes,this component that was subscribe to that store will re-render.

### how to access dispatch hook

> We can use custom hook that was provided to us by react redux package.

```js
const dispatch = useDispatch();
import { useDispatch } from "react-redux";
import { CreateCustomer } from "./customerSlice";

const dispatch = useDispatch();

function handleClick() {
  dispatch(CreateCustomer(fullName, nationalId));
}
```
