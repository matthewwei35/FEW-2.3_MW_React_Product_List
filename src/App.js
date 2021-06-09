import './App.css';
import data, { uniqueCategories } from './data';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

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
