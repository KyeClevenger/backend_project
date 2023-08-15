import './App.css';
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p>
        <Link to="/products">Dashboard </Link> | 
        <Link to="/products/new">Create a new Product </Link>
      </p>

      <Routes>
        <Route path="/products" element={<DashboardPage />} />
        <Route path="/products/new" element={<CreatePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/products/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
