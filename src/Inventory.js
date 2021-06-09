import data from './data';

const total = data.reduce( (acc, obj) => {
  return acc + parseFloat( obj.price.slice(1) );
}, 0 ).toFixed(2);

const totalUnits = data.reduce( (acc, obj) => {
  return acc + obj.units
}, 0 );

function Inventory() {
  return (
    <div className="Inventory">
      <h3>Total Cost of Inventory: ${total}</h3>
      <h3>Total Units: {totalUnits}</h3>
    </div>
  )
}

export default Inventory;
