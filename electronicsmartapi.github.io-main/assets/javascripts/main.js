var isNewArrival;
var total_products;
var isHome;
var BASE_URL = "https://electronics-mart-api.herokuapp.com";
function start() {
  n = localStorage.getItem("name");
  if (n != null) {
    caps_name = n.toUpperCase();
    document.getElementById("user").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("name").innerHTML =
      caps_name + '&nbsp <i class="fas fa-caret-down"></i>';
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
}
var c = 0;
function drop() {
  if (c == 0) {
    c = 1;
    document.getElementById("drop").style.zIndex = 1;
  } else {
    c = 0;
    document.getElementById("drop").style.zIndex = -1;
  }
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  Swal.fire({
    title: "You are Successfully logged Out!",
    html: "Redirecting to Home page.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {}, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    location.href = "./index.html";
  });
}
products = [];
main_products = [];
var page_number = 0;
page_size = 9;
function next() {
  document.getElementById("content").scrollIntoView();
  page_number += 1;
  if ((page_number * page_size) % 45 == 0 && page_number * page_size != 0 && isHome == true) {
    view_homeproducts(parseInt(page_number / 5));
  }
  
  else if (isHome == true) {
    home_pagination();
  } 
  else {
    pagination();
  }
}
function prev() {
  document.getElementById("content").scrollIntoView();
  page_number -= 1;
  if (((page_number+1) * page_size) % 45 == 0 && page_number * page_size != 0 && isHome == true) {
    view_homeproducts(parseInt(page_number / 5));
  }
  
  else if (isHome == true) {
    home_pagination();
  } 
  else {
    pagination();
  }
}
function pagination() {
  selected_products = products.slice(
    page_number * page_size,
    page_number * page_size + page_size
  );
  if (page_number == 0) {
    document.getElementById("prev").style.backgroundColor = "transparent";
    document.getElementById("prev").style.zIndex = "-1";
    document.getElementById("prev").innerHTML = "";
  } else {
    document.getElementById("prev").style.backgroundColor = "#292560";
    document.getElementById("prev").style.zIndex = "0";
    document.getElementById("prev").innerHTML =
      "<i class='fas fa-arrow-left'></i> Previous";
  }
  if (products.length - page_number * page_size <= 9) {
    document.getElementById("next").style.backgroundColor = "transparent";
    document.getElementById("next").style.zIndex = "-1";
    document.getElementById("next").innerHTML = "";
  } else {
    document.getElementById("next").style.backgroundColor = "#292560";
    document.getElementById("next").style.zIndex = "0";
    document.getElementById("next").innerHTML =
      "Next <i class='fas fa-arrow-right'></i>";
  }
  if (products.length < page_number * page_size + page_size) {
    document.getElementById("total").innerHTML =
      page_number * page_size + page_size;
  } else {
    document.getElementById("total").innerHTML = products.length;
  }
  document.getElementById("a").innerHTML = page_number * page_size + 1;
  document.getElementById("b").innerHTML = page_number * page_size + page_size;
  for (let i = 0; i <= 8; i++) {
    var src = selected_products[i].product_img;
    var name = selected_products[i].product_name;
    nameShort = name.slice(0, 25).concat("...");
    var price = selected_products[i].product_price;
    var pricem = (1.2 * price).toFixed(2);
    document.getElementById("img" + i).src = src;
    document.getElementById("name" + i).innerHTML = nameShort;
    document.getElementById("price" + i).innerHTML = "₹" + price;
    document.getElementById("pricem" + i).innerHTML = "₹" + pricem;
  }
}
function home_pagination() {
  var temp_page_number = page_number%5;
  selected_products = products.slice(
    parseInt((temp_page_number * page_size)),
    parseInt((temp_page_number * page_size + page_size))
  );
  if (page_number == 0) {
    document.getElementById("prev").style.backgroundColor = "transparent";
    document.getElementById("prev").style.zIndex = "-1";
    document.getElementById("prev").innerHTML = "";
  } else {
    document.getElementById("prev").style.backgroundColor = "#292560";
    document.getElementById("prev").style.zIndex = "0";
    document.getElementById("prev").innerHTML =
      "<i class='fas fa-arrow-left'></i> Previous";
  }
  if (total_products - page_number * page_size <= 9) {
    document.getElementById("next").style.backgroundColor = "transparent";
    document.getElementById("next").style.zIndex = "-1";
    document.getElementById("next").innerHTML = "";
  } else {
    document.getElementById("next").style.backgroundColor = "#292560";
    document.getElementById("next").style.zIndex = "0";
    document.getElementById("next").innerHTML =
      "Next <i class='fas fa-arrow-right'></i>";
  }
  if (total_products < page_number * page_size + page_size) {
    document.getElementById("total").innerHTML =
      page_number * page_size + page_size;
  } else {
    document.getElementById("total").innerHTML = total_products;
  }
  document.getElementById("a").innerHTML = page_number * page_size + 1;
  document.getElementById("b").innerHTML = page_number * page_size + page_size;
  for (let i = 0; i <= 8; i++) {
    var src = selected_products[i].product_img;
    var name = selected_products[i].product_name;
    nameShort = name.slice(0, 25).concat("...");
    var price = selected_products[i].product_price;
    var pricem = (1.2 * price).toFixed(2);
    document.getElementById("img" + i).src = src;
    document.getElementById("name" + i).innerHTML = nameShort;
    document.getElementById("price" + i).innerHTML = "₹" + price;
    document.getElementById("pricem" + i).innerHTML = "₹" + pricem;
  }
}
function pagination_s() {
  n = Math.floor(Math.random() * (products.length - 20));
  selected_products = products.slice(n, n + 19);
  for (let i = 0; i < 19; i++) {
    var src = selected_products[i].product_img;
    var name = selected_products[i].product_name;
    var price = selected_products[i].product_price;
    nameShort = name.slice(0, 15).concat("...");
    document.getElementById("imgs" + i).src = src;
    document.getElementById("texts" + i).innerHTML = nameShort;
    document.getElementById("prices" + i).innerHTML = "₹" + price;
  }
}
function view_products() {
  page_number = 0;
  var category = {
    categories: categories,
  };
  var data = JSON.stringify(category);
  var http = new XMLHttpRequest();
  var url = BASE_URL+"/view_by_categories";
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      main_products = json.AllProducts;
      if (isNewArrival == 1) {
        products = products.slice(products.length - 45, products.length);
      }
      products = main_products.sort((a, b) => 0.5 - Math.random());
      pagination();
      pagination_s();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(data);
}
function view_homeproducts(set_of_45_products) {
  var skip = set_of_45_products * 45;
  var limit = 45;
  var http = new XMLHttpRequest();
  var url =
    BASE_URL+"/view_45_products?skip=" +
    skip +
    "&limit=" +
    limit;
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      products = json.Products;
      products=products.sort((a,b)=>0.5-Math.random());
      total_products = json.Total_products;
      home_pagination();
      pagination_s();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
  };
  http.open("get", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}
document.getElementById("switch_category").onchange = function () {
  var switch_category = document.getElementById("switch_category");
  var category_index = switch_category.options.selectedIndex;
  var category = switch_category.options[category_index].value;
  switch_categories(category);
};
function switch_categories(category) {
  //document.getElementsByClassName("dropdown").style.zIndex = -1 ;
  document.getElementById("content").scrollIntoView();
  page_number = 0;
  var http = new XMLHttpRequest();
  var url =
    BASE_URL+"/view_by_category?category=" +
    category;
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      main_products = json.AllProducts;
      products = main_products.sort((a, b) => 0.5 - Math.random());
      pagination();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
  };
  http.open("get", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization", localStorage.getItem("token"));
  http.send();
}
function view_by_name() {
  page_number = 0;
  product_name = document.querySelector("#product_name").value;
  var category = {
    name: product_name,
    categories: categories,
  };
  var data = JSON.stringify(category);
  var http = new XMLHttpRequest();
  var url =
    BASE_URL+"/view_by_name_categories";
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      main_products = json.AllProducts;
      products = main_products.sort((a, b) => 0.5 - Math.random());
      pagination();
      document.getElementById("content").scrollIntoView();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
    if (http.readyState == 4 && http.status == 404) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops, There's no Product with that name...",
      });
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization", localStorage.getItem("token"));
  http.send(data);
}
function my_cart() {
  n = localStorage.getItem("name");
  if (n == null) {
    let timerInterval;
    Swal.fire({
      title: "You are not logged In!",
      html: "Redirecting to login page.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      location.href = "login.html";
    });
  } else {
    location.href = "./mycart.html";
  }
}
function my_fav() {
  n = localStorage.getItem("name");
  if (n == null) {
    let timerInterval;
    Swal.fire({
      title: "You are not logged In!",
      html: "Redirecting to login page.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      location.href = "login.html";
    });
  } else {
    var http = new XMLHttpRequest();
    var url = BASE_URL+"/view_by_interest";
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        var json = JSON.parse(this.responseText);
        products = json.AllProducts;
        pagination();
      }
      if (http.readyState == 4 && http.status == 500) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Oops Something went wrong...",
        });
      }
    };
    http.open("get", url, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Authorization", localStorage.getItem("token"));
    http.send();
  }
}
function send_news() {
  email = document.querySelector("#email_news").value;
  if (email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      var http = new XMLHttpRequest();
      page_number = 0;
      obj = {
        email: email,
      };
      var data = JSON.stringify(obj);
      var url = BASE_URL+"/news_letter";
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          var json = JSON.parse(this.responseText);
          Swal.fire({
            icon: "success",
            title: "Successful!",
            text: "News Letter Service Activated...",
          });
        }
        if (http.readyState == 4 && http.status == 404) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "You are already registered for News letter service...",
          });
        }
        if (http.readyState == 4 && http.status == 500) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Oops Something went wrong...",
          });
        }
      };
      http.open("post", url, true);
      http.setRequestHeader("Authorization", localStorage.getItem("token"));
      http.setRequestHeader("Content-Type", "application/json");
      http.send(data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email...",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No Email found...",
    });
  }
}
function get_by_rating(rating) {
  page_number = 0;
  product_name = document.querySelector("#product_name").value;
  var category = {
    categories: categories,
  };
  var data = JSON.stringify(category);
  var http = new XMLHttpRequest();
  var url =
    BASE_URL+"/view_by_categories?rating=" +
    rating;
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      main_products = json.AllProducts;
      products = main_products.sort((a, b) => 0.5 - Math.random());
      pagination();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization", localStorage.getItem("token"));
  http.send(data);
}
function get_by_price(gt, lt) {
  page_number = 0;
  var category = {
    categories: categories,
  };
  var data = JSON.stringify(category);
  var http = new XMLHttpRequest();
  var url =
    BASE_URL+"/view_by_price_categories?gt=" +
    gt +
    "&lt=" +
    lt;
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(this.responseText);
      main_products = json.AllProducts;
      products = main_products.sort((a, b) => 0.5 - Math.random());
      pagination();
    }
    if (http.readyState == 4 && http.status == 500) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Oops Something went wrong...",
      });
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization", localStorage.getItem("token"));
  http.send(data);
}

function view_product0() {
  localStorage.setItem("p_id", selected_products[0].product_id);
  quick_view();
}
function view_product1() {
  localStorage.setItem("p_id", selected_products[1].product_id);
  quick_view();
}
function view_product2() {
  localStorage.setItem("p_id", selected_products[2].product_id);
  quick_view();
}
function view_product3() {
  localStorage.setItem("p_id", selected_products[3].product_id);
  quick_view();
}
function view_product4() {
  localStorage.setItem("p_id", selected_products[4].product_id);
  quick_view();
}
function view_product5() {
  localStorage.setItem("p_id", selected_products[5].product_id);
  quick_view();
}
function view_product6() {
  localStorage.setItem("p_id", selected_products[6].product_id);
  quick_view();
}
function view_product7() {
  localStorage.setItem("p_id", selected_products[7].product_id);
  quick_view();
}
function view_product8() {
  localStorage.setItem("p_id", selected_products[8].product_id);
  quick_view();
}
function view_products0() {
  localStorage.setItem("p_id", selected_products[0].product_id);
  quick_view();
}
function view_products1() {
  localStorage.setItem("p_id", selected_products[1].product_id);
  quick_view();
}
function view_products2() {
  localStorage.setItem("p_id", selected_products[2].product_id);
  quick_view();
}
function view_products3() {
  localStorage.setItem("p_id", selected_products[3].product_id);
  quick_view();
}
function view_products4() {
  localStorage.setItem("p_id", selected_products[4].product_id);
  quick_view();
}
function view_products5() {
  localStorage.setItem("p_id", selected_products[5].product_id);
  quick_view();
}
function view_products6() {
  localStorage.setItem("p_id", selected_products[6].product_id);
  quick_view();
}
function view_products7() {
  localStorage.setItem("p_id", selected_products[7].product_id);
  quick_view();
}
function view_products8() {
  localStorage.setItem("p_id", selected_products[8].product_id);
  quick_view();
}
function view_products9() {
  localStorage.setItem("p_id", selected_products[8].product_id);
  quick_view();
}
function quick_view() {
  location.href = "_files/product_detail.html";
}
function scroll_to_content() {
  document.getElementById("content").scrollIntoView();
}
start();
if (isHome == true) {
  view_homeproducts(0);
} else {
  view_products();
}
