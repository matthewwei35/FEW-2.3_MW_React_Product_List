import { catsAndCounts } from './data';

function CategoryList() {
  return (
    <div className="CategoryList">
      {catsAndCounts.map(obj => {
        return (
          <button>
            {obj.name}
            <span> {obj.count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList;
