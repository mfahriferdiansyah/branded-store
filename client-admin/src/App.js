import './App.css';
import LoginPage from './pages/LoginPage'
import InputPage from './pages/InputPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
        <HomePage />
        <InputPage />
        <LoginPage />
    </div>
    </>
  );
}

export default App;
