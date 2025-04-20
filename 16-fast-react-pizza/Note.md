# How to use createBrowserRouter

```js
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
]);
function App() {
  return <RouterProvider router={router} />;
}
```

> It 's better than BrowserRouter because it can load data and submit data using form.
