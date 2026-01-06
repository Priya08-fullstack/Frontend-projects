document.addEventListener("DOMContentLoaded", function () {

  /* ===== CART ===== */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");

  function updateCartCount() {
    cartCount.innerText = cart.length;
  }
  updateCartCount();

  /* ===== PRODUCT DATA ===== */
  const productData = {
    "Stylish Dress": [
      {
        name: "Floral Dress",
        img: "https://cdn.shopify.com/s/files/1/0572/5555/9212/products/DRS037_5.jpg?v=1753700215",
        price: 699
      },
      {
        name: "Evening Gown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDPjYTnJM8P8yp_UBugmtHBfXpN58z7w9qg&s",
        price: 1199
      }
    ],
    "Trendy Jacket": [
      {
        name: "Winter Jacket",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxW2FS6FvBKqK0DvVl3ROhnLgT4b2GoHKog&s",
        price: 1499
      },

      {
        name: "stylish jacket",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJF_0qviLAKKHXa8q6hYUnaFpfxwTZp1HcjA&s",
        price: 1600
      }
    ],
    "Classic Shoes": [
      {
        name: "Leather Shoes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFV8-59ikNRpCQw22lOi3VSKh4qXwR5251g&s",
        price: 999
      },

      {
        name: "sports shoes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudnj7JjYYCR4cLyRasR6CRQ98SUeVA80Z8A&s",
        price: 1200
      }
    ]
  };

  /* ===== MODAL ===== */
  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalGrid = document.getElementById("modalGrid");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".product").forEach(product => {
    product.addEventListener("click", () => {
      const title = product.querySelector("h3").innerText;

      modalTitle.innerText = title;
      modalGrid.innerHTML = "";

      productData[title].forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
          <img src="${item.img}" style="width:100%;height:220px;object-fit:cover">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <button class="modal-cart-btn">Add to Cart</button>
        `;

        div.querySelector(".modal-cart-btn").addEventListener("click", () => {
          cart.push(item);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
          alert("Item added to cart 🛒");
        });

        modalGrid.appendChild(div);
      });

      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };

});