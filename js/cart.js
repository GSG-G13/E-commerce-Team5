
// // const productShops = document.getElementById("product1");
const productContainers = document.querySelector(".product-container");
// // const cartIcon = document.querySelector(".bag-cart .cart-icon");
const removeAllCartProduct = document.getElementById("remove-all");

const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };

let cartProd = store.orders;

function addToCarts() {
const counterCart = document.querySelector(".count");
counterCart.textContent = cartProd.length;
console.log(store.orders)

let cartCounter = localStorage.setItem("counter",cartProd.length);

productContainers.innerHTML = " "
cartProd.forEach(product => {
    console.log(cartProd)
    let productDetails = document.createElement("div");
    productDetails.className = "product";

    let productImg = document.createElement("img");
    productImg.src = product.productImage;
    productDetails.appendChild(productImg);

    let descriptionProduct = document.createElement("div");
    descriptionProduct.className = "description";
    productDetails.appendChild(descriptionProduct);

    let categoryProduct = document.createElement("span");
    categoryProduct.textContent = product.category;
    descriptionProduct.appendChild(categoryProduct);
    descriptionProduct.appendChild(categoryProduct);


     let nameProduct = document.createElement("h5");
    nameProduct.textContent = product.name;
    descriptionProduct.appendChild(nameProduct);

    let price = document.createElement("h4");
    price.textContent = `${product.price}$`;
    descriptionProduct.appendChild(price);

    let deleteBtn = document.createElement("a");
    deleteBtn.href = "#";

    let deleteProduct = document.createElement("i");
    deleteProduct.className = "fa-solid fa-trash  delete";
    deleteBtn.appendChild(deleteProduct);
    productDetails.appendChild(deleteBtn)

    deleteProduct.addEventListener("click", (e) => {
        removeProductCart(product.id);
    })


    productContainers.appendChild(productDetails)




})

}
addToCarts()

function removeProductCart(id) {

cartProd.map((product,i) => {
    if(product.id === id) {
    cartProd.splice(i,1);
}

localStorage.setItem("store",JSON.stringify(store));
})
    addToCarts();
}




removeAllCartProduct.addEventListener("click",removeAll)
function removeAll() {
  cartProd = [];
    localStorage.setItem("store",JSON.stringify(store));
    addToCarts()
}

