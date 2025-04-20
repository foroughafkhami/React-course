# How to use createBrowserRouter

```js
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/menu', element: <Menu /> },
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
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order /> },
    ],
  },
]);
```

# Outlet

> Renders the child route's element, if there is one.

# Fetch data with react router loaders

> Steps:

1. create a loader
2. provide the loader
3. provide data to the page
   > It 's better to place a loader of a certain page inside the file of that page.

```js
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

// --------------------

{ path: "/menu", element: <Menu />, loader: menuLoader },
```

# useNavigation

> It's used to understand that whether the application is currently idle,loading or submitting.(for entire application)

# useRouteError

```js
const error = useRouteError();
// -------------------
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
```

> hooks work inside a component not a function.

# Write data with react router actions

> We first have a <Form></Form>

```js
<Form method="POST"></Form>
```

> We wired the action to a URL.

```js
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);
```

> We catch the request in the action and do what we have to do.

```js
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  // It will do post request
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
```

# useActionData

> is used to access data returned from action in the component that is connected into that action.
> This feature is used for error handling.

# Tailwind

## responsive design

```js
sm: px - 6;
// this value will apply for sm and larger screens.
```
