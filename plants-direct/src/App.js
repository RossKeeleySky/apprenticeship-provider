import data from './products.json';
import { Product } from './Product';
import './App.css';

function App() {
  return (
    <div className="App">
      {data.products.map(product => <Product key={product.productId} product={product} />)}
    </div>
  );
}

export default App;
