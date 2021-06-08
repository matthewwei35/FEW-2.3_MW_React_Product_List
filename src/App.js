import './App.css';
import data, { uniqueCategories } from './data';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

function App() {
  return (
    <div className="App">
      <h1>Scuffed Shopify</h1>
      <p>Products: {data.length}</p>
      <p>Category Count: {uniqueCategories.length}</p>
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
