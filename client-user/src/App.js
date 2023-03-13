import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        {/* <HomePage /> */}
        <DetailPage />
    </div>
  );
}

export default App;
