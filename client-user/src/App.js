import {RouterProvider} from "react-router-dom";
import router from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider  store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
