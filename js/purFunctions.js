const deleteObject = (arr,id) =>(
    arr.filter((obj) => obj.id !== id)
  )

  module.exports = {
    deleteObject

  } 

