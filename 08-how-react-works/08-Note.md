# component vs component instances vs element

> element is the result of using component in code, it s a big immutable js object that react keep in memory.
> has all the information necessary to create DOM elements for current component instance

![alt text](image.png)

> If you update a component,all of its child components will be rerendered as well. Even if props for child component didnt change.

## reconciler and diffing

> it 's engine of react and decide which Dom elements,actually need to be inserted,deleted,or updated in order to reflect the latest state changes
> current reconciler in react is called FIBER
> fiber are not re-created on every render,it will be mutated
> diffing: compare elements based on their position in the tree

## Note

> commit phase is synchronous but render phase is asynchronous

### renderers

> react library is not responsible for writing to the dom, it s renderers
> react its self never touched the dom, it s reactdom
> react native is to make android and ios apps
> remotion is used to create videos

# state update batching

> updating in react is asynchronous,bcd updated state variables are not immediately available after setState call,but only after the re-render
> This also apllies when only one state variable is updated
> ![alt text](batching.png)

> If put state update in ReactDom.flushSync() the automatic batching is disabled.
> If you need to update a state based on the current or previous state,you need to use callback function instead of just a value

> batching happens inside eventhandlers,set timeout and pronmises

# event propagation and delegation

> event delegation: handling events for multiple elements centrally in one single parent element
> we can use e.target to see where event happened

## 3d-party library ecosystem

![alt text](third-party-library.png)

## Summary

![alt text](summary1.png)
![alt text](summary2.png)
![alt text](summary3.png)
