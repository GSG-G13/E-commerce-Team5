let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams; 

// get value of "id" parameter
// "100"
productId =parseInt(search_params.get('id'));
 console.log(productId)
const store = JSON.parse(localStorage.getItem("store")) || {
    users: [],
    products: [],
    categories: [],
    orders: []
  };
  

  let product = store.products.find(product => product.productId === productId);
  
  console.log(product.prodetails)
let prodetails = document.getElementById("prodetails");


prodetails.innerHTML = ` <div class="single-pro-image">
<img src="../img/products/f1.jpg" width="100%" id="MainImg" alt="">
   

</div>

<div class="single-pro-details">
<h4>${product.productName}</h4>
<h2>$${product.productPrice}</h2>
<br>
<input type="number" value="1">
<button class="normal">Add To Cart</button>
<h4>Product Details</h4>
<span>${product.productDescription}</span>

</div>`;

console.log(prosectRender)
