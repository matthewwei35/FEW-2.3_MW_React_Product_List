import './CategoryList.css';
import { catsAndCounts } from './data';

function CategoryList(props) {
  const { category, onClick } = props;

  return (
    <div className="CategoryList">
      {catsAndCounts.map(obj => {
        const { name, count } = obj
        const className = name === category ? 'selected' : '';
        return (
          <button
            className={className}
            onClick={() => onClick(name)}
          >
            {name}
            <span> {count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList;
