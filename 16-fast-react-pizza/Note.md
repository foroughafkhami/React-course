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

# Nested routes using children(Layout route)

```js
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);
```

# Outlet

> Renders the child route's element, if there is one.
