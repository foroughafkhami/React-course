## Prop drilling

> Solution 1: component composition
> we can pass components into components using children prop in the modal.
> Component composition is good for flexibility and reusability and fixing prop drilling
> We create an empty hole in the component and ready to recieve any component to fill it.
> we can pass component using :

1. children prop
2. explicit prop

# Note

> event always needs to handle on JSX element

# Challenge

## Number 1

> https://codesandbox.io/p/sandbox/react-challenge-text-expander-starter-forked-dx7j8l?file=%2Fsrc%2FApp.js%3A59%2C19

# Side effects

> side effect should not be in render logic. And they should not happen during the component render
> effects allow us to write code that will run at different moments:mount,re-render or unmount
> cleanup function: will be called before the component re-renders or unmounts
> is used to keep a component synchronized with some external system(in this example,with the API movie data)
> can be make using : event handler,effects(use effect)
> it s better to use event handlers.
> In strict mode events run multiple times but only in development.
