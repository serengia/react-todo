import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  const routerProvider = <RouterProvider router={router} />;

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {routerProvider}
    </div>
  );
}

export default App;
