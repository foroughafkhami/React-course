# strict mode in react

- Render all components twice to find certain bugs during development
- And also check if we are using outdated parts of the React API.

# BABEL and JSX

> Convert JSX element into React.createElement function call
> We use JSX to describe the UI based on props and state. So the data that 's currently in the component.All this happens without any dom manipulation.

# Seperation of Concerns in React

> Each Component is concerned with one piece of the UI
> Component + JSX

# Props

> To pass data from parent component to child
> props doesnt change and they are immutable,beacause mutating props would affecrt parent,creating side effects.
> IF you need to mutate props you need state
> Component should not mutate any data that we write outside of its function scope

## CHALLENGES

### Number 1

> https://codesandbox.io/p/sandbox/fervent-wilson-pshzpd?file=%2Fsrc%2FApp.js%3A49%2C20-49%2C25
