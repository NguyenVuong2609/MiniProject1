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
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// Lấy dữ liệu từ localStorage
let x = localStorage.getItem('Member');
let arr = JSON.parse(x);

// Thêm vào giỏ hàng 
const addBtn = document.querySelectorAll('.add-cart');
let list = [];

for (i = 0 ; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', function () {
        console.log(this.parentNode.childNodes[5].childNodes[0].textContent);
        list.push({
            name: this.parentNode.childNodes[3].childNodes[0].innerText,
            price: this.parentNode.childNodes[5].childNodes[0].textContent,
            img : this.parentNode.childNodes[1].childNodes[1].src
        })
        localStorage.setItem('cart', JSON.stringify(list));
    })          
}

// Hiện giỏ hàng 
let cartBtn = document.getElementById('cart-button');
let result = document.getElementById('cart-menu');
cartBtn.addEventListener('click', function(){
    result.style.visibility = 'visible';
})