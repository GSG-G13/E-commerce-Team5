const deleteObject = (arr,id) =>(
    arr.filter((obj) => obj.id !== id)
  )
  const editObject = (arr, newObj) =>{
    const index = arr.findIndex(product => product.id === newObj.id);
    arr[index] = newObj;
    return arr;
  }
  
  module.exports = {
    deleteObject,
    editObject
  } 