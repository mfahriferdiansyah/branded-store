import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Provider>
      </div>
    </>
  );
}

export default App;
