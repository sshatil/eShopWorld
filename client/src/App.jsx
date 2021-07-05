import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/headers/Header';
import { DataProvider } from './GlobalState';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Home />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
