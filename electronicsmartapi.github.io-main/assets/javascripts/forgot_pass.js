function save(){
    email=document.querySelector("#email").value;
    localStorage.setItem("email",email);
}
function recover_by_email() {
	var http = new XMLHttpRequest();
	var details = {
		"email" : document.querySelector("#email").value
	};
	var data = JSON.stringify(details);
	var url = "https://electronics-mart-api.herokuapp.com/forgot_pass";
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var json = JSON.parse(this.responseText);
			localStorage.setItem("Authorization",json.token);
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
function recover_by_old_pass(){
	location.href="recover_by_old_pass.html"
}