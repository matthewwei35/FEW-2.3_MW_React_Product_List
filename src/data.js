import data from './data.json';

const allCatergories = data.map(obj => obj.category);

// const uniqueCategories = Array.from(new Set(allCatergories));

const cats = allCatergories.reduce((acc, cat) => {
  acc[cat] = 0;
  return acc;
}, {});

const uniqueCategories = Object.keys(cats);

const categoriesAndCounts = allCatergories.reduce((acc, cat) => {
  if (acc[cat] === undefined) {
    acc[cat] = 1;
  } else {
    acc[cat] += 1;
  }
  return acc;
}, {});

export default data;
export {
  allCatergories,
  uniqueCategories,
  categoriesAndCounts
};
