import './App.css';
import data, { uniqueCategories } from './data';
import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Header
        title="Scuffed Shopify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
