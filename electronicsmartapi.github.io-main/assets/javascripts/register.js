function register_part_1(){
	name=document.querySelector("#name").value;
	email=document.querySelector("#email").value;
	pass=document.querySelector("#pwd").value;
	localStorage.setItem("name",name);
	localStorage.setItem("email",email);
	localStorage.setItem("pass",pass);
	confirm_pass = document.querySelector("#confirm_pwd").value;
	if(name && email && pass && confirm_pass){
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
			var http = new XMLHttpRequest();
			let doc = {
				email : email
			}
			var data = JSON.stringify(doc);
			var url = "https://electronics-mart-api.herokuapp.com/check_email";
			http.onreadystatechange = function() {
				if(http.readyState == 4 && http.status == 200) {
					if(http.status==200){
						if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pass)){
							if(pass!=confirm_pass){
								Swal.fire({
									icon: 'warning',
									title: 'Oops...',
									text: "Those passwords didn’t match. Try again....",
								});
							}
							else{
								location.href = "register_part_2.html"
							}
						}
						else{
							Swal.fire({
								icon: 'warning',
								title: 'Oops...',
								text: 'Password must contain atleast 8 characters, atleast one numeric and atleast one symbol.',
							});
						}
					}
				}
				if(http.readyState == 4 && http.status == 500){
					Swal.fire({
						icon: 'warning',
						title: 'Oops...',
						text: 'That Email is already registered, Use any other Email for registeration',
					});
				}
			}
			http.open('post',url,true);
			http.setRequestHeader('Content-Type','application/json');
			http.send(data);
		}
		else{
			Swal.fire({
				icon: 'warning',
				title: 'Oops...',
				text: 'Invalid Email format....',
			});
		}
	}
	else{
		Swal.fire({
			icon: 'warning',
			title: 'Oops...',
			text: 'All fields are required...',
		  });
	}
}
function login(){
	location.href="login.html"
}
var interested_in=[];
function setColor(btn) {
	var property = document.getElementById(btn);
	property.style.backgroundColor = "#292560";
	property.style.color = "white";
	interested_in.push(document.getElementById(btn).value);
}
function register_part_2(){
	Houseno = document.querySelector("#houseno").value;
	Landmark = document.querySelector("#landmark").value;
	City = document.querySelector("#city").value;
	State = document.querySelector("#state").value;
	Pincode = document.querySelector("#pincode").value;
	if(Houseno && Landmark && City && State && Pincode){
		Swal.fire({
			title: 'Please Wait..!',
			html: 'Creating Your Account...',
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
		  });
		var user = {
			name :localStorage.getItem("name"),
			email :localStorage.getItem("email"),
			pwd :localStorage.getItem("pass"),
			address : {
				Houseno:Houseno,
				Landmark:Landmark,
				City:City,
				State:State,
				Pincode:Pincode,
			},
			interested_in:interested_in
		}
		localStorage.removeItem("name");
		localStorage.removeItem("email");
		localStorage.removeItem("pass");
		var http = new XMLHttpRequest();
		var data = JSON.stringify(user);
		var url = "https://electronics-mart-api.herokuapp.com/register";
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				var json = JSON.parse(this.responseText);
				location.href = "activate.html";
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
		Swal.fire({
			icon: 'warning',
			title: 'Oops...',
			text: 'All fields are required...',
		  });
	}
}
function login(){
	location.href="login.html";
}