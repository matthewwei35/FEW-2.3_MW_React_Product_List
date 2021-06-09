import './ProductList.css';
import data from './data';
import Product from './Product';

function ProductList(props) {
  const { category } = props;

  return (
    <div className="ProductList">
      {data.filter(obj => obj.category === category || category === 'All').map(obj => {
        return (
          <Product {...obj} />
        )
      })}
    </div>
  )
}

export default ProductList;
