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





// cartIcon.addEventListener("click", () => {
//     // window.location.href='cart.html';
//     // addToCarts()


// })

let products = [];
// const cartAdd =[]

function addProduct() {
productAddCart = localStorage.getItem("product")  !== null ?  JSON.parse(localStorage.getItem("product")) : [];
const counterCart = document.querySelector(".count");
counterCart.textContent = localStorage.getItem("counter");


productContainer.innerHTML = " "
productAddCart.forEach((product,id) => {
   
   
    let productDetails = document.createElement("div");
    productDetails.className = "product";
    productDetails.id = id;

    let productImg = document.createElement("img");
    productImg.className = "product-image";
    productImg.src = product.url;
    productDetails.appendChild(productImg);

    let descriptionProduct = document.createElement("div");
    descriptionProduct.className = "description";
    productDetails.appendChild(descriptionProduct);

    let categoryProduct = document.createElement("span");
    categoryProduct.className = "category";
    categoryProduct.textContent = product.cat;
    descriptionProduct.appendChild(categoryProduct);
    descriptionProduct.appendChild(categoryProduct);


     let nameProduct = document.createElement("h5");
     nameProduct.className = "name";
    nameProduct.textContent = product.name;
    descriptionProduct.appendChild(nameProduct);

    let price = document.createElement("h4");
    price.textContent = `${product.price}$`;
    descriptionProduct.appendChild(price);


    let addCart = document.createElement("a");
    addCart.href = "#";

    let addProduct = document.createElement("i");
    addProduct.className = "fa-solid fa-shopping-cart cart";
    addCart.appendChild(addProduct);
    productDetails.appendChild(addCart);
    addProduct.addEventListener('click', () => {
       

        const newProduct = {
           id:+productDetails.id,
           productImage: productImg.src,
           category:categoryProduct.textContent,
            name:nameProduct.textContent,
            price:price.textContent

        }
       
        let cartAdd = JSON.parse(localStorage.getItem("cart"));
        if(cartAdd === null){
            cartAdd = [];
        
        }

      
        cartAdd.push(newProduct);
        localStorage.setItem('cart', JSON.stringify(cartAdd));
    });

    productContainer.appendChild(productDetails)

})


}


addProduct()



