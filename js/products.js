const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };
  let products = [];
  products = store.products;


  // populate category select options
  const categorySelect = document.getElementById("categoryId");
  for (let i = 0; i < store.categories.length; i++) {
    const category = store.categories[i];
    const option = document.createElement("option");
    option.value = category.categoryId;
    option.text = category.categoryTitle;
    categorySelect.appendChild(option);
  }
  
  function addProduct() {
    const productId = Date.now(); // generate new ID for the product
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productImage = document.getElementById("productImage").value;
    const categoryId = parseInt(document.getElementById("categoryId").value);
    let isFeaturedProduct = document.getElementById("isFeaturedProduct").value;
    let isNewArrival = document.getElementById("isNewArrival").value;
    if(isFeaturedProduct ==1){isFeaturedProduct = true}else{isFeaturedProduct = false}
    if(isNewArrival ==1){isNewArrival = true}else{isNewArrival = false}

    const product = { productId, productName, productDescription, productPrice, productImage, categoryId,isFeaturedProduct,isNewArrival };
    store.products.push(product);
  
    // save store to local storage
    localStorage.setItem("store", JSON.stringify(store));
  
    // display the added product at the bottom of the form
    const productList = document.getElementById("productList");
    const newProduct = document.createElement("li");
    newProduct.innerHTML = `<a href="?id=""${product.productId}"" class="edit-link" data-product-id="${product.productId}">${productId}: ${productName} </a><span> Price: ${productPrice}</span><a href="#" class="edit-link" data-product-id="${product.productId}">Edit</a> - <a href="#"  class="delete-link" id="${product.productId}">Delete</a>`;
    productList.appendChild(newProduct);
  }
  
  // add event listener to the add button
// add event listener to the add button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // check if the button text is "Add" or "Edit"
  const buttonText = this.innerHTML;
  if (buttonText === "Add Product") {
    addProduct(); // call the addProduct function to add the new product
  } else if (buttonText === "Edit") {
    const editLinks2 = document.querySelectorAll(".edit-link");
    editLinks2.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const productId = parseInt(link.dataset.productId);
        editProduct(productId);
      });
    });
  }
});

  
  // display the list of products
  const productList = document.getElementById("productList");
  for (let i = 0; i < store.products.length; i++) {
    const product = store.products[i];
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="product-details.html?id=${product.productId}"> ${product.productName} </a> <span> Price: ${product.productPrice}</span><a href="#" class="edit-link" data-product-id="${product.productId}">Edit</a> - <a href="#"  class="delete-link" id="${product.productId}">Delete</a>`;
    productList.appendChild(listItem);
  }
  
  function editProduct(productId) {
    // find the product by ID in the store
    const product = store.products.find((p) => p.productId == productId);
  
    if (product) {
      document.getElementById("productName").value = product.productName;
      document.getElementById("productDescription").value = product.productDescription;
      document.getElementById("productPrice").value = product.productPrice;
      document.getElementById("productImage").value = product.productImage;
      document.getElementById("categoryId").value = product.categoryId;
      document.getElementById("isFeaturedProduct").value = product.isFeatured ? "1" : "0";
      document.getElementById("isNewArrival").value = product.isNewArrival ? "1" : "0";
  
      // change the add button to an edit bu
      const addButton = document.getElementById("addButton");
      addButton.innerHTML = "Update Product";
      addButton.removeEventListener("click", addProduct); // remove the addProduct event listener
      addButton.addEventListener("click", function(event) {
        event.preventDefault();
        // modify the product in the store by ID
        const editedProduct = {
          productId: product.productId,
          productName: document.getElementById("productName").value,
          productDescription: document.getElementById("productDescription").value,
          productPrice: parseFloat(document.getElementById("productPrice").value),
          productImage: document.getElementById("productImage").value,
          categoryId: parseInt(document.getElementById("categoryId").value),
          isFeatured: document.getElementById("isFeaturedProduct").value == "1" ? true : false,
          isNewArrival: document.getElementById("isNewArrival").value == "1" ? true : false,
        };
        const index = store.products.findIndex(product => product.productId === editedProduct.productId);
        store.products[index] = editedProduct;
    
        // save store to local storage
        localStorage.setItem("store", JSON.stringify(store));
    
        // update the product in the product list
        const productList = document.getElementById("productList");
  
        const productListItem = productList.querySelector(`li[data-product-id="${editedProduct.productId}"]`);
        productListItem.innerHTML = `<span>${editedProduct.productId}: ${editedProduct.productName} </span><span> Price: ${editedProduct.productPrice}</span><a href="#" class="edit-link" data-product-id="${editedProduct.productId}">Edit</a> - Delete</span>`;
    
        // reset the form and change the button back to add
        document.getElementById("productForm").reset();
        addButton.innerHTML = "Add";
        addButton.removeEventListener("click", editProduct);
        addButton.addEventListener("click", addProduct);
      });
    } else {
      console.log(`Product with id ${productId} not found.`);
    }

    
  }
  
  const editLinks = document.querySelectorAll(".edit-link");
editLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const productId = parseInt(link.dataset.productId);
    editProduct(productId);
  });
});


const deleteLinks = document.querySelectorAll(".delete-link");
deleteLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const productIdToRemove = link.id;
    deleteProduct(productIdToRemove);
    document.getElementById(productIdToRemove).parentNode.remove();
  });
});

function deleteProduct(productId) {
    productId = parseInt(productId)

    products = store.products
    store.products = products.filter((obj) => obj.productId !== productId);
    localStorage.setItem("store", JSON.stringify(store));
}





