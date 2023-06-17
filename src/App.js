// import react from 'react';
import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./components/utils/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
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
