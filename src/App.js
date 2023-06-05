import './App.css';
import Login from './components/Login';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Dash from './components/Dash';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
