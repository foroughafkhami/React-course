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
