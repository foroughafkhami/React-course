# State vs PRops

## State

> internal data,owned by component
> component memory
> can be updated by the component itself
> updating state causes component to re-render
> used to make components interactive

## Props

> external data,owned by parent component
> similar to function parameters
> read-only
> Recieving new props causes component to re-render.Usually when the parent's state has been updated.
> used by parent to configure child component("settings")

# EXercise and Challenge

## Exercise 1

> https://codesandbox.io/p/devbox/react-exercise-flashcards-starter-forked-j6vcx6?file=%2Fsrc%2FApp.js%3A49%2C48&workspaceId=ws_97TgecUKhuvkXniW8WqmAM

## Exercise 7-1

> https://codesandbox.io/p/sandbox/react-exercise-accordion-starter-forked-n6wqzz

## Exercise 7-2

> https://codesandbox.io/p/devbox/react-exercise-accordion-starter-forked-sxvm27?file=%2Fsrc%2FApp.js%3A57%2C1&workspaceId=ws_97TgecUKhuvkXniW8WqmAM

# Challenge number 2

> https://codesandbox.io/p/devbox/delicate-river-4f99ly?file=%2Fsrc%2FApp.js%3A38%2C22&workspaceId=ws_97TgecUKhuvkXniW8WqmAM

> Whenever multiple siblings components need to access to the same state,we need to move that piece of state up to the first common parent component.

# Challenge 7-2

> https://codesandbox.io/p/sandbox/upbeat-ritchie-7qj7gv?file=%2Fsrc%2FApp.js%3A29%2C9

# child to parent communication(inverse data flow)

> child updating parent state(data flowing up)

# Derived state

> state that is computed from existing state

## Note

> Sort item mutate items so we should ise slice.sort() instead.
> React developement use export default instead of named export.
