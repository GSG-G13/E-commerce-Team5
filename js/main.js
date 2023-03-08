
const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };
  let featuredProducts = document.getElementById("featuredProducts")
  let newArrivals = document.getElementById("newArrivals")
  newArrivals.innerHTML=""
  featuredProducts.innerHTML = ""
  console.log(store.products)
for (product of store.products) {
    if(product.isFeatured == true){
    featuredProducts.innerHTML += ` 
    <div class="product">
        <img src="${product.productImage}" alt="" />
        <div class="description">
            <span>adidas</span>
            <h5>${product.productName}</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${product.productPrice}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-shopping-cart cart"></i></a>
        </div>`;

  }
}

for (product of store.products) {
    if(product.isNewArrival == true){
        newArrivals.innerHTML += ` 
    <div class="product">
        <img src="${product.productImage}" alt="" />
        <div class="description">
            <span>adidas</span>
            <h5>${product.productName}</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${product.productPrice}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-shopping-cart cart"></i></a>
        </div>`;

  }
}

