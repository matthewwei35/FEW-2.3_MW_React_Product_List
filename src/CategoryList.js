import './CategoryList.css';
import { catsAndCounts } from './data';

function CategoryList(props) {
  const { category, onClick } = props;

  return (
    <div className="CategoryList">
      {catsAndCounts.map(obj => {
        const className = obj.name === category ? 'selected' : ''
        return (
          <button
            className={className}
            onClick={() => onClick(obj.name)}
          >
            {obj.name}
            <span> {obj.count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList;
