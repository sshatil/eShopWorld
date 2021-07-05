import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { DataProvider } from './GlobalState';
// import { Header } from "./components/headers/Header";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">{/* <Header /> */}</div>
      </Router>
    </DataProvider>
  );
}

export default App;
