function redirect_login(){
    Swal.fire({
        title: 'We are Sorry',
        html: 'Please login again...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 100)
        },
        willClose: () => {
        clearInterval(timerInterval)
        }
    }).then((result) => {
        location.href="./login.html"
    });
}
function verify_otp(){
    otp = document.querySelector('#otp').value;
    var http = new XMLHttpRequest();
    
}