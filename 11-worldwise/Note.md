# How to create project using Vite

> npm create vite@4
> npm i
> To run:
> npm run dev

## how to add ESlint into project

1. install some packages as dev dependencies

> npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

2- create a file called .eslintrc.json and put this text to it:

```{
  "extends": "react-app"
}
```

3- config vite.config.js file by adding this to it:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
```

# Routing

> it is client side routing and it handled by React Router package.
> it is used to make single page applications.
> Single Page application is good because there will never be a complete page reload.
> Makes the app natural.
> When URL changes,Dom will update. And react update the DOM.

# how to make a single page application

> We dont want hard refreshes,we want to move from one page to another.

```js
<Link to="/pricing">Pricing</Link>
```
