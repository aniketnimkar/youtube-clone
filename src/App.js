// import react from 'react';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./components/utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

/*
 *Head
 *Body
 *  sidebar
 *     MenuItems
 * MainContainer
 *    ButtonList
 *    VideoContainer
 *    VideoCard
 *
 */
export default App;
