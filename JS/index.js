// Slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// Lấy dữ liệu từ localStorage
let x = localStorage.getItem("Member");
let arr = JSON.parse(x);

// Thêm vào giỏ hàng
const addBtn = document.querySelectorAll(".add-cart");
let list = [];

for (i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    console.log(this.parentNode.childNodes[1].childNodes[1].src);
    list.push({
      name: this.parentNode.childNodes[3].childNodes[0].innerText,
      price: this.parentNode.childNodes[5].childNodes[0].textContent,
      img: this.parentNode.childNodes[1].childNodes[1].src,
    });
    localStorage.setItem("cart", JSON.stringify(list));
    showProduct();
  });
}

// Hiện giỏ hàng
let cartBtn = document.getElementById("cart-button");
let closeCart = document.getElementById("close-cart");
let result = document.getElementById("cart-menu");
cartBtn.addEventListener("click", function () {
  console.log(result.style.visibility);
  result.style.visibility = (result.style.visibility == "hidden" ) ? "visible" : "hidden";
});


// Hiện nội dung trong giỏ hàng 
function showProduct(){
  let x = localStorage.getItem('cart')
  let y = JSON.parse(x);
  let img = document.createElement('img');
  let div = document.createElement('div');
  let span = document.createElement('span');
  let list = document.getElementById('show-cart')
  
  list.appendChild(div)
  div.appendChild(img);
  img.src = y[y.length-1].img;
  img.width = 100;
  div.appendChild(span);
  span.innerHTML = y[y.length-1].name + ' ' + y[y.length-1].price;
  alert("Thêm sản phẩm vào rỏ hàng thành công.")
}

// Xóa toàn bộ giỏ hàng 
closeCart.addEventListener("click", function () {
  let list = document.getElementById('show-cart')
  console.log(list);
  list.innerHTML = "";
});

// Nút yêu thích sản phẩm
const love = document.querySelectorAll('.love');
console.log(love.length);
for (i = 0; i < love.length; i++) {
  love[i].addEventListener("click", function () {
    console.log("abc");
    console.log(this.style.color);
    this.style.color = (this.style.color == "white" ) ? "#ff8380" : "white";
  })
}