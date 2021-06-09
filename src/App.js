import './App.css';
import { useState } from 'react';
import data, { uniqueCategories } from './data';
import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  const [ category, setCategory ] = useState('Kids');

  return (
    <div className="App">
      <Header
        title="Scuffed Shopify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList
        category={category}
        onClick={newCategory => setCategory(newCategory)}
      />
      <ProductList
        category={category}
      />
    </div>
  );
}

export default App;
