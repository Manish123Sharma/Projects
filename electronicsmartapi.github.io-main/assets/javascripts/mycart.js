var cart;
function view_my_cart(){
    var http = new XMLHttpRequest();
    var url = "https://electronics-mart-api.herokuapp.com/viewmycart";
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var json = JSON.parse(this.responseText);
            cart = json.cart;
        }
        if(http.readyState == 4 && http.status==500){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Oops Something went wrong...',
            });
        }
    }
    http.open('get',url,true);
    http.setRequestHeader('Content-Type','application/json');
    http.setRequestHeader("Authorization",localStorage.getItem("token"));
    http.send();
  }
  view_my_cart();