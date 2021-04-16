import data from './data.json'


//Challenge 2 - Get a list of all categories
const allCats = data.map((item) => {return item.category})


//Challenge 3 - Make the categories list a list of unique values.
// Make an object where each key is a category name
const categoryObjects = allCats.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  // Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)

//Challenge 4 - Make an Object whose keys are the names of categories and whose values are the number of times that category appears in the data.
const categoriesWithCounts = allCats.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (obj[cat] === undefined){
         // if so add 
      // 1 to the value of this key
        obj[cat] = 1
        // else 
      // set this key with a value of 1
    } else {
        obj[cat] += 1
    }   
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!

  //Challenge 5 - Use Reduce to make an array of objects that have a name and a count.
const nameCount = categoriesUnique.reduce((acc, cat) => {
    acc.push({ name: cat, count: categoriesWithCounts[cat] })

    return acc
  }, []) 


  export default data
export {allCats, categoryObjects, categoriesUnique, categoriesWithCounts, nameCount}


