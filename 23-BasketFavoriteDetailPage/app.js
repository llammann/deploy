let cards=document.querySelector(".cards")

let url="https://fakestoreapi.com/products"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data)
    data.forEach((product,index) => {
        // console.log(product.category)
        cards.innerHTML+=
        ` <div class="card col p-3">
        <div class="img_wrapper mb-2">
            <img src="${product.image}" class="card-img-top" alt="...">
        </div>

        <div class="articles">
            <p class="title">
            <strong>Name:</strong>  ${product.title}
            </p>
            <p class="price">
            <strong>Price:</strong> ${product.price}$
            </p>
            <p class="category">
            <strong>Category:</strong> ${product.category}
            </p>
            
            <p class="rating">
              <strong>Rating:</strong>
                 <ul class="rating">
                    <li class="rate">Rate</li> ${product.rating.rate}
                    <li class="count">Count</li> ${product.rating.count}
                 </ul>
            </p>

        </div>
        <div class="buttons">
            <button name="${index}" class="basket_icon">
                <i class="fa-solid fa-basket-shopping fa-2x"></i>
            </button>
            <button name="${index}" class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
        </div>
          </div>`
 

//  CARD INFO ALERT START
 let all_card=document.querySelectorAll(".card")
 all_card.forEach((card,index) =>{
     card.addEventListener("click",function(){
        //  console.log(this);
         const title=this.querySelector(".title")
        //  console.log(title.textContent);
        // const price=this.closest(".price")
        const price=this.querySelector(".price")
        const category=this.querySelector(".category")

       Swal.fire(` <p class="title">
       <strong>Name:</strong>  ${title.textContent}
       </p>
       <p class="price">
       <strong>Price:</strong> ${price.textContent}$
       </p>
       <p class="category">
       <strong>Category:</strong> ${category.textContent}
       </p>`
       )
     }) 
 })
//  CARD INFO ALERT END

 // ADDING BASKET START
const all_baskets = document.querySelectorAll(".basket_icon");
all_baskets.forEach(basket => {
      basket.addEventListener("click", adding_to_basket_func);
 });
let added_products=[]
 // ADDING BASKET START

// ADDING FAVORITES START
const all_favs = document.querySelectorAll(".fav_icon");
all_favs.forEach(fav => {
        fav.addEventListener("click", adding_to_favs_func);
});
let faved_products=[]
// ADDING FAVORITES END

});  //   data foreach scope

});  //main data 

// DISPLAYING ALL THINGS START
let all=document.querySelector(".all")
all.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.forEach(product =>{
        cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
    <img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
</div>
  </div>`

// adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

// adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]

    })
    });

})

// DISPLAYING ALL THINGS END

// DISPLAYING ONLY MEN THINGS START
let men=document.querySelector(".men")
men.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="men's clothing"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
    <img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
</div>
  </div>`
   // adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

//  adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]

        }
    });

})   
    
})
// DISPLAYING ONLY MEN THINGS END

// DISPLAYING ONLY WOMEN THINGS START
let women=document.querySelector(".women")
women.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="women's clothing"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
</div>
  </div>`
   // adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

//  adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]

}
        
    });
})   
})
// DISPLAYING ONLY WOMEN THINGS END

// DISPLAYING ONLY JEWELRY THINGS START
let jewelry=document.querySelector(".jewelery")
jewelry.addEventListener("click",function() {
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="jewelery"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
</div>
  </div>`

   // adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

//  adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]

}
        
    });
})   
})
// DISPLAYING ONLY JEWELRY THINGS START

// DISPLAYING ONLY ELECTRONICS THINGS START
let electronics=document.querySelector(".electronics")
electronics.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="electronics"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
</div>
  </div>`

   // adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

//  adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]

}
        
    });
})  
})
// DISPLAYING ONLY ELECTRONICS THINGS END

  // FILTERING START
  let filter=document.querySelector(".se_op")
  // console.log(filter)
   filter.addEventListener("change",function(){
       const selectedValue = filter.value;
  console.log(selectedValue)
  cards.innerHTML = "";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      if (selectedValue === "1") {
          data.sort((a, b) => a.price - b.price);
      } else if (selectedValue === "2") {
          data.sort((a, b) => b.price - a.price);
      } else if (selectedValue === "3") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (selectedValue === "4") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
      }

      data.forEach((product, index) => {
          cards.innerHTML+=
          ` <div class="card col p-3">
          <div class="img_wrapper mb-2">
              <img src="${product.image}" class="card-img-top" alt="...">
          </div>
          
          <div class="articles">
              <p class="title">
              <strong>Name:</strong>  ${product.title}
              </p>
              <p class="price">
              <strong>Price:</strong> ${product.price}$
              </p>
              <p class="category">
              <strong>Category:</strong> ${product.category}
              </p>
              
              <p class="rating">
                <strong>Rating:</strong>
                   <ul class="rating">
                      <li class="rate">Rate</li> ${product.rating.rate}
                      <li class="count">Count</li> ${product.rating.count}
                   </ul>
              </p>
          
          </div>
          <div class="buttons">
              <button class="basket_icon">
                  <i class="fa-solid fa-basket-shopping fa-2x"></i>
              </button>
              <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
          </div>
            </div>`

//  adding basket
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]

//  adding favs
 const all_favs = document.querySelectorAll(".fav_icon");
 all_favs.forEach(fav => {
     fav.addEventListener("click", adding_to_favs_func);
 });
 let faved_products=[]
    
      });
  });
  
   })
// FILTERING END

console.log(cards)
   
 // ADDING BASKET MAIN START
 const all_baskets = document.querySelectorAll(".basket_icon");
 all_baskets.forEach(basket => {
     basket.addEventListener("click", adding_to_basket_func);
 });
 let added_products=[]
 function adding_to_basket_func(event) {
    event.stopPropagation();
     const card = this.closest('.card');
     const product_name = card.querySelector('.title').textContent;
     const product_price = card.querySelector('.price').textContent;
     const basket_accordion_body = document.querySelector('.basket_accordion_body');
 
     if (added_products.includes(product_name)) {
         Swal.fire('You have already added this product to basket');
     } else {
         added_products.push(product_name, product_price);
         Swal.fire("Succesfully added to basket");
 
         basket_accordion_body.innerHTML += `
             <div class="product">
                 <p class="basketed_thing_NAME">${product_name}</p>
                 <p class="basketed_thing_PRICE">${product_price}</p>
                 <button class="delete_from_basket btn btn-danger">Delete</button>
             </div>
         `;
// delete from basket
         const all_delete_from_basket = document.querySelectorAll(".delete_from_basket");
         all_delete_from_basket.forEach(delete_from_basket => {
             delete_from_basket.addEventListener("click", function () {
                 const product = this.closest('.product');
                 if (confirm("Are you sure to delete from basket?")) {
                     product.remove();
                     Swal.fire('Succesfully removed from basket');
                     const index = added_products.indexOf(product_name);
                     added_products.splice(index, 1);
                 }
             })
         });
     }
 }
//  ADDING BASKET MAIN END

// ADDING MAIN FAVORITES START
  const all_favs = document.querySelectorAll(".fav_icon");
  all_favs.forEach(fav => {
      fav.addEventListener("click", adding_to_favs_func);
  });
  let faved_products=[]
  
      function adding_to_favs_func(event) {
        event.stopPropagation();
          const card = this.closest('.card');
          const product_name = card.querySelector('.title').textContent;
          const fav_accordion_body = document.querySelector('.fav_accordion_body');
  
          if(faved_products.includes(product_name)){
              Swal.fire('You have already added this product to favorites')
          }
          else {
              faved_products.push(product_name)
              Swal.fire("Succesfully added favorites")
  
              fav_accordion_body.innerHTML += `
          <div class="product">
              <p class="faved_thing_NAME">${product_name}</p>
              <button class="delete_from_favs btn btn-danger">Delete</button>
              </div>
          `;
          
//delete from favorites
  let all_delete_from_favs=document.querySelectorAll(".delete_from_favs");
  
  all_delete_from_favs.forEach(delete_from_favs => {
      delete_from_favs.addEventListener("click",function(){
          const product=this.closest('.product')
          if(confirm("Are you sure delete from favorites?")){
              product.remove();
              Swal.fire('Succesfully removed from favorites')
              const index=faved_products.indexOf(product_name)
          faved_products.splice(index,1)
              }
      })
  })
          }
  
  };

// ADDING MAIN FAVORITES END