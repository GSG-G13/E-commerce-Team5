const productCart = [
    {
        id:1,
        name:"Cartoon Astronaut T-Shirts",
        url: "/img/products/f6.jpg",
        cat:"adidas",
        price: 30
    },
      {
        id:2,
        name:"Cartoon Astronaut T-Shirts",
        url: "/img/products/n7.jpg",
        cat:"adidas",
        price: 80
    },
    {
        id:3,
        name:"Cartoon Astronaut T-Shirts",
        url: "/img/products/n4.jpg",
        cat:"adidas",
        price: 20
    },
    {
        id:3,
        name:"Cartoon Astronaut T-Shirts",
        url: "/img/products/f8.jpg",
        cat:"adidas",
        price: 90
    },
    
    
]
const productShop = document.getElementById("product1");
const productContainer = document.querySelector(".product-container");
const cartIcon = document.querySelector(".bag-cart .cart-icon");
let productAddCart = localStorage.setItem("product", JSON.stringify(productCart));


let products = [];

const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };
  
  let newProduct = store.order
function addProduct() {
const cartAdd = store.orders || []
productAddCart = store.orders;
const product = store.products
console.log(product)
const counterCart = document.querySelector(".count");
counterCart.textContent = localStorage.getItem("counter");


productContainer.innerHTML = " "
product.forEach((product,id) => {
   
   
    let productDetails = document.createElement("div");
    productDetails.className = "product";
    productDetails.id = id;

    let productImg = document.createElement("img");
    productImg.className = "product-image";
    productImg.src = product.productImage;
    productDetails.appendChild(productImg);

    let descriptionProduct = document.createElement("div");
    descriptionProduct.className = "description";
    productDetails.appendChild(descriptionProduct);

    let categoryProduct = document.createElement("span");
    categoryProduct.className = "category";
    categoryProduct.textContent = "test Cat";
    descriptionProduct.appendChild(categoryProduct);
    descriptionProduct.appendChild(categoryProduct);


     let nameProduct = document.createElement("h5");
     nameProduct.className = "name";
    nameProduct.textContent = product.productName;
    descriptionProduct.appendChild(nameProduct);

    let price = document.createElement("h4");
    price.textContent = `${product.productPrice}$`;
    descriptionProduct.appendChild(price);


    let addCart = document.createElement("a");
    addCart.href = "#";

    let addProduct = document.createElement("i");
    addProduct.className = "fa-solid fa-shopping-cart cart";
    addCart.appendChild(addProduct);
    productDetails.appendChild(addCart);
    addProduct.addEventListener('click', () => {
       

        newProduct = {
           id:+productDetails.id,
           productImage: productImg.src,
           category:categoryProduct.textContent,
            name:nameProduct.textContent,
            price:price.textContent
        }
       
        let cartAdd = JSON.parse(localStorage.getItem("store"));
        if(cartAdd === null){
            cartAdd = [];
        }
        console.log(newProduct)
        store.orders.push(newProduct)
        localStorage.setItem('store', JSON.stringify(store));
    });

    productContainer.appendChild(productDetails)

})


}


addProduct()



