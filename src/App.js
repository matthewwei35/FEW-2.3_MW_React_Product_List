import './App.css';
import data, { allCatergories, uniqueCategories, categoriesAndCounts, catsAndCounts } from './data';

console.log(data);
console.log(allCatergories);
console.log(uniqueCategories);
console.log(categoriesAndCounts);
console.log(catsAndCounts);

function App() {
  return (
    <div className="App">
      <h1>Shopify</h1>
      <p>Products: {data.length}</p>
      <p>Category Count: {uniqueCategories.length}</p>
    </div>
  );
}

export default App;
