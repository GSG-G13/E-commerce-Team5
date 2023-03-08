
// // const productShops = document.getElementById("product1");
const productContainers = document.querySelector(".product-container");
// // const cartIcon = document.querySelector(".bag-cart .cart-icon");
const removeAllCartProduct = document.getElementById("remove-all");

// let products = []
// let cart = localStorage.setItem("cart",JSON.stringify(products));
// console.log(localStorage.getItem(carts))

// function addProductToLocalStorage() {


//     const addCart = [...document.querySelectorAll(".cart")];
//     const product = document.querySelectorAll(".product");
//     const productImage = document.querySelectorAll(".product-image");
//     const category = document.querySelectorAll(".category");
//     const nameProduct = document.querySelectorAll(".name");
// carts = localStorage.getItem("cart")  !== null ?  JSON.parse(localStorage.getItem("cart")) : [];

// const counterCart = document.querySelector(".count");
// counterCart.textContent = carts.length;

// addCart.map((addPro,i) => {
   
//     addPro.addEventListener("click",() => {
//  console.log(addPro.textContent)
//         const productCollection = {
//             id: +product[i].id,
//             productImg:productImage[i].src,
//             category:category[i].textContent,
//             name:nameProduct[i].textContent,
//         }
//        console.log(productCollection)
//         products.push(productCollection);
//         localStorage.setItem("cart",JSON.stringify(products))
//        console.log(products)

// addToCarts()
//     })
// })


// }
// console.log(localStorage.getItem("products"))
const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };

let cartProd = store.orders;

function addToCarts() {

// console.log(cart)
// console.log(products)
const counterCart = document.querySelector(".count");
counterCart.textContent = cartProd.length;
console.log(store.orders)

let cartCounter = localStorage.setItem("counter",cartProd.length);

productContainers.innerHTML = " "
// console.log(products)
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

// localStorage.setItem("cart",JSON.stringify(cartProd))
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

// // addToCart()