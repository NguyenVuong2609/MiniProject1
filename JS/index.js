// Slide
let slideIndex = 0;
var MemberStatus = localStorage.getItem('isLogin');
let isLogin = JSON.parse(MemberStatus);
let loginBtn = document.getElementById('login-button');
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
  let total = document.getElementById('totalCart');
  let small = document.getElementById('small');
  
  list.appendChild(div)
  div.appendChild(img);
  img.src = y[y.length-1].img;
  img.width = 100;
  div.appendChild(span);
  span.innerHTML = y[y.length-1].name + ' ' + y[y.length-1].price + '$';
  total.innerHTML = "Tổng sản phẩm trong giỏ hàng là: " + y.length;
  small.innerHTML = y.length;
  alert("Thêm sản phẩm vào giỏ hàng thành công.")
}

// Xóa toàn bộ giỏ hàng 
closeCart.addEventListener("click", function () {
  let listCart = document.getElementById('show-cart')
  let total = document.getElementById('totalCart');
  let small = document.getElementById('small');
  listCart.innerHTML = "";
  total.innerHTML = "";
  small.innerHTML = "";
  list = [];
});

// Nút yêu thích sản phẩm
const love = document.querySelectorAll('.love');
for (i = 0; i < love.length; i++) {
  love[i].addEventListener("click", function () {
    for (i = 0; i <isLogin.length ; i++){
      if (isLogin[i].status) {
        this.style.color = (this.style.color == "white" ) ? "#ff8380" : "white";
      } else {
        alert('Vui lòng đăng nhập để yêu thích sản phẩm.')
      }
    }
  })}
    


// Nút đăng nhập từ Trang Chủ 

loginBtn.addEventListener('click', function(){
  // if (loginBtn.value = 'Log In'){
  //   window.location = "./login.html";
  // } 
  if (isLogin != null){
    for (i = 0; i <isLogin.length ; i++) {
      if (isLogin[i].status) {
        isLogin[i].status = false;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
        loginBtn.value = "Log in";
      } else {
        for ( i = 0 ; i < love.length ; i++) {
          love[i].style.color = "white";
        }
        window.location = "./login.html";
      }
    }
    } else {
      window.location = "./login.html";
    }
  }
);

// Hàm kiểm tra nút LogIn 
function checkStatus() {
  if (isLogin != null){
  for (i = 0; i <isLogin.length ; i++) {
    if (isLogin[i].status) {
      loginBtn.value = "Log out";
    }}
}}
checkStatus();

// Nút thanh toán 
let payBtn =document.getElementById('pay-money');
if (isLogin != null) {
  payBtn.addEventListener('click',function(){
    let listCart = document.getElementById('show-cart')
    for (i = 0; i <isLogin.length ; i++) {
      if (isLogin[i].status){
        if ( listCart.innerHTML != ""){
          window.location = "./payment.html";
        } else {
          alert('Giỏ hàng đang trống.')
        }
      } else {
        alert('Bạn cần đăng nhập để thanh toán.');
      }
  }})
}


