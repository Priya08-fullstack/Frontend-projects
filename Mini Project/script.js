
  function login(){

  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  // validation
  if(u === "" || p === ""){
    alert("Please enter username and password");
    return;
  }

  // send to backend
  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: u,
      password: p
    })
  })
  .then(res => res.json())
  .then(data => {

    if(data.status === "success"){
      alert("Login Successful");
      window.location.href = "index.html?section=about";
    }
    else{
      alert("Invalid Login");
    }

  })
  .catch(error => {
    console.log(error);
    alert("Server error");
  });

} 
function register(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("regpass").value;

  // validation
  if(name === "" || email === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  
  fetch("http://127.0.0.1:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {

    if(data.status === "registered"){
      alert("Registration Successful");
      window.location.href = "index.html?section=about";
    }
    else{
      alert("User already exists");
    }

  })
  .catch(error => {
    console.log(error);
    alert("Server error");
  });

} 

function showRegister(){

document.getElementById("loginForm").style.display="none";

document.getElementById("registerForm").style.display="block";

}



/* Show Login Form */

function showLogin(){

document.getElementById("registerForm").style.display="none";

document.getElementById("loginForm").style.display="block";

} 

  let cart = [];

function showSection(id) {

  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.classList.remove("active");
    sec.style.display = "none";   // hide all
  });

  let activeSection = document.getElementById(id);
  activeSection.style.display = "block";
  activeSection.classList.add("active");

  
  setTimeout(() => {
    AOS.refreshHard();   
  }, 200);
} 

window.onload=function(){
  const params=new URLSearchParams(window.Location.search);
  
  if(params.get("section")=="about")
    {
      showSection('about');
    }
  }
  window.onload = function(){
    if(window.location.hash=="#about"){
      showSection('about');
    }
  }


function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
  updateCartCount();
  alert(`${name} added to cart successfully✅`)
}

// DISPLAY CART
function displayCart() {

  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-msg">Your cart is empty 🛒</p>';
    document.getElementById("total").innerText = 0;
    return;
  }

  cart.forEach((item, index) => {

    let li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;

    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
} 
function updateCartCount(){
  document.getElementById("cartCount").innerText = cart.length;
}

function pay() {
  alert("Payment Successful 🎉");
  cart = [];
  location.reload();
} 
function pay() {
  alert("Payment Successful 🎉");
  cart = [];
  location.reload();
} 
function addFAQ() {
  let q = document.getElementById("question").value;
  let a = document.getElementById("answer").value;

  if (q === "" || a === "") {
    alert("Please enter both question and answer");
    return;
  }

  let faqList = document.getElementById("faqList");

  let div = document.createElement("div");
  div.className = "faq-item";

  div.innerHTML = `
    <p><b>Q:</b> ${q} <br>
    <b>A:</b> ${a}</p>
  `;

  faqList.appendChild(div);

  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
} 
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ADD FAQ
function addFAQ() {
  let q = document.getElementById("question").value;
  let a = document.getElementById("answer").value;

  if (q === "" || a === "") {
    alert("Enter both fields");
    return;
  }

  let faqList = document.getElementById("faqList");

  let div = document.createElement("div");
  div.className = "faq-item";

  div.innerHTML = `
    <p><b>Q:</b> ${q} <br><b>A:</b> ${a}</p>
  `;

  faqList.appendChild(div);

  closePopup();

  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
} 
// OPEN POPUP
function openReviewPopup() {
  document.getElementById("reviewPopup").style.display = "flex";
}

// CLOSE POPUP
function closeReviewPopup() {
  document.getElementById("reviewPopup").style.display = "none";
}

// ADD REVIEW
function addReview() {
  let name = document.getElementById("username").value;
  let text = document.getElementById("reviewText").value;
  let rating = document.getElementById("rating").value;

  if (name === "" || text === "" || rating === "") {
    alert("Fill all fields");
    return;
  }

  let stars = "⭐".repeat(rating);

  let div = document.createElement("div");
  div.className = "review-card";

  div.innerHTML = `
    <p><b>${name}:</b> ${text}</p>
    <p class="stars">${stars}</p>
  `;

  document.getElementById("reviewList").appendChild(div);

  closeReviewPopup();

  document.getElementById("username").value = "";
  document.getElementById("reviewText").value = "";
  document.getElementById("rating").value = "";
} 
function toggleMenu() {
  let more = document.getElementById("moreProducts");
  let btn = document.getElementById("menuBtn");

  if (more.style.display === "none") {
    more.style.display = "flex";
    btn.textContent = "Show Less";
  } else {
    more.style.display = "none";
    btn.textContent = "See More";
  }
} 
function openProduct(name, price, color, warranty, rating) {
  document.querySelector(".details-box").classList.add("show");

  document.getElementById("dName").innerText = name;
  document.getElementById("dPrice").innerText = price;
  document.getElementById("dColor").innerText = color;
  document.getElementById("dWarranty").innerText = warranty;
  document.getElementById("dRating").innerText = rating;
}

function closeProduct() {
  document.querySelector(".details-box").classList.remove("show");
} 
function openContact() {
  document.querySelector(".contact-popup").classList.add("show");
}

function closeContact() {
  document.querySelector(".contact-popup").classList.remove("show");
}

function sendMessage() {
  alert("Message sent successfully!");
} 
function updateCartMessage() {
  let cart = document.getElementById("cartItems");
  if (cart.children.length === 0) {
    cart.innerHTML = "<p>Your cart is empty</p>";
  }
} 

function updateCartCount() {
  let count = document.getElementById("cartCount");

  count.innerText = cart.length;

  if (cart.length === 0) {
    count.style.display = "none";
  } else {
    count.style.display = "inline-block";
  }
} 

window.onload=function(){

let savedProduct =
JSON.parse(
localStorage.getItem("newProduct")
);

if(savedProduct)
{
let productBox=
document.querySelector(".products");


productBox.innerHTML += `

<div class="card">

<img src="${savedProduct.image}">

<h3>${savedProduct.name}</h3>

<p>₹${savedProduct.price}</p>

<button onclick="addToCart('${savedProduct.name}',${savedProduct.price})">
Add
</button>

<button onclick="openProduct('${savedProduct.name}','₹${savedProduct.price}','Black','1 Year','⭐⭐⭐⭐')">
Know More
</button>

</div>

`;

}

} 
function adminLogin(){

  let u = document.getElementById("adminUser").value;
  let p = document.getElementById("adminPass").value;

  

  fetch("http://127.0.0.1:5000/admin-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: u,
      password: p
    })
  })
  .then(res => res.json())
  .then(data => {

    if(data.status === "success"){
      alert("Admin Login Successful");
      
    }
    else{
      alert("Invalid Admin Login");
    }

  });
  document.getElementById("loginBox").style.display = "none";

  document.getElementById("adminPanel").style.display="block";

} 


