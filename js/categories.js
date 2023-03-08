const store = JSON.parse(localStorage.getItem("store")) || {
  users: [],
  products: [],
  categories: [],
  orders: []
};
  
  function addCategory() {
    const categoryTitle = document.getElementById("categoryTitle").value;
    const categoryId = store.categories.length + 1; // generate new ID for the category
  
    const category = { categoryId, categoryTitle };
    store.categories.push(category);
  
    // save store to local storage
    localStorage.setItem("store", JSON.stringify(store));
  
    // display the added category at the bottom of the form
    const categoryList = document.getElementById("categoryList");
    const newCategory = document.createElement("li");
    newCategory.innerHTML = `${categoryId}: ${categoryTitle}`;
    categoryList.appendChild(newCategory);
  }
  
  // add event listener to the add button
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the form from submitting and reloading the page
    addCategory(); // call the addCategory function to add the new category
  });
  
    // display the list of categoryList
    const categoryList = document.getElementById("categoryList");
    for (let i = 0; i < store.categories.length; i++) {
      const category = store.categories[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = `<span>${category.categoryId}: ${category.categoryTitle} </span><span>Edit - Delete</span>`;
      categoryList.appendChild(listItem);
    }