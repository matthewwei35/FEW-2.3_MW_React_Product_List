import data from './data';
import './ProductList.css';

function ProductList() {
  return (
    <div className="ProductList">
      {data.map(obj => {
        return (
          <div>
            <h2>{obj.name}</h2>
            <p>{obj.description}</p>
            <p>{obj.price}</p>
            <small>Category: {obj.category} | Rating: {obj.rating}</small>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList;
