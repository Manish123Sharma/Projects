function set_new_pass() {
    email = localStorage.getItem("email");
    old_pass = document.querySelector("#old_pass").value;
    pwd=document.querySelector("#pwd").value;
    confirm_pwd = document.querySelector("#confirm_pwd").value;
    if(pwd==confirm_pwd){
        var http = new XMLHttpRequest();
        var details = {
            "email" : email,
            "old_pass" :document.querySelector("#old_pass").value,
            "new_pass":document.querySelector("#pwd").value
        };
        var data = JSON.stringify(details);
        var url = "https://electronics-mart-api.herokuapp.com/acc_recover_old_pass";
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                var json = JSON.parse(this.responseText);
                localStorage.setItem("Authorization",json.token);
                location.href = "login.html";
            }
            if(http.readyState == 4 && http.status==500){
				Swal.fire({
					icon: 'warning',
					title: 'Oops...',
					text: 'Oops Something went wrong...',
				});
			}
        }
        http.open('post',url,true);
        http.setRequestHeader('Content-Type','application/json');
        http.send(data);
    }
    else{
        window.alert("Password didn't matched");
    }
}