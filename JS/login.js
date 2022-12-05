const ipnElement = document.querySelector('#login__password');
const btnElement = document.querySelector('#btnPassword');
const iconElement = document.querySelector('#iconEye');
const ipidElement = document.querySelector('#login__username');


// Nút hiển thị mật khẩu 
btnElement.addEventListener('click', function(){
  const currentType = ipnElement.getAttribute('type');
  ipnElement.setAttribute(
    'type',
    currentType === 'password' ? 'text' : 'password'
  )
iconElement.classList.toggle("fa-eye")
})

// Lấy dữ liệu từ localStorage
let x = localStorage.getItem('Member');
let arr = JSON.parse(x);

// So sánh ID và password 

function check(){
  let keyID = false;
  let keyPass = false;
    for ( i = 0; i < arr.length; i++ ){
      if(ipidElement.value == arr[i].username && ipnElement.value == arr[i].password){
          keyPass = true;
          console.log(keyPass);
          keyID = true;
          console.log(keyID);
          document.getElementById('signIn').onsubmit = function(e){
            e.preventDefault();
          }
          arr[i].status = true;
          console.log(arr);
          localStorage.setItem('isLogin', JSON.stringify(arr));
          window.location = './index.html';
      } else {
        document.getElementById('result').innerHTML = 'Sai tài khoản hoặc mật khẩu.'
        document.getElementById('signIn').onsubmit = function(e){
          e.preventDefault();
        }
      }
    }
}
