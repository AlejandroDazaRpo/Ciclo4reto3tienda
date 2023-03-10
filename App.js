import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navegacion from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductosCreados from '../pages/ProductosCreados';

function App() {
  return (
    <BrowserRouter>
    <Navegacion />
       <Routes>
          <Route path='/' element={<ProductosCreados/>} />
      </Routes>
    </BrowserRouter>

 );
}

export default App;
