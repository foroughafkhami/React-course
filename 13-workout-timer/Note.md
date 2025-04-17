# Closure in Effect

> Any function that was created at the initial render and not recreated, still have access to the initial snapshot of states and props.

```js
// because it doesnt have dependency array ,then it will not access to the current snapshot
// Stale closure:function capture values from old values
useEffect(function () {
  document.title = `Your ${number}-exercise workout`;
}, []);
```
