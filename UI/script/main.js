	document.getElementById('btn').addEventListener('click', validation);

	function validateUn(){
		var username = document.getElementById('un').value;
		var unRegex = /^[A-Za-z]\w*\.?\w*$/;
		if (username.length < 3 || username.length > 12 || !unRegex.test(username)){
			alert("Username must be 3 to 12 characters");
			return false;
		}else {
			return true;
		}
	}

	function validateEm(){
		var email = document.getElementById('email').value;
		var emRegex = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,20}$/
		if (emRegex.test(email)){
			return true;
		}else {
			alert("Enter a valid email.");
			return false;
		}
	}
	function validatePassword(){
		var password = document.getElementById('password').value;
		if (password.length < 6 || password.length > 12){
			alert("Password must be 6 - 12 characters long");
			return false;
		} else {
			return true;
		}
	}

	function validation() {
		var val1 = validateUn();
		var val2 = validateEm();
		var val3 = validatePassword();


		if (val1 == true && val2 == true && val3 == true){
			window.location.href = 'record-page.html';
		} else {
			alert('Registration unsuccessful');
			
		}

	}

	var users = [
	{
		username:"nabeelah",
		password:"yousuph"
	},
	{
		username:"bisi",
		password:"hellothere"

	}
	];
	function saveUsers(e){
		var name = document.getElementById('user').value;
		var pass = document.getElementById('pass').value;

		for (i = 0; i < users.length; i++) {
			if (!name == users[i].username && !pass == users[i].password) {
				alert("Incorrect username or password");
			}else{
				window.location.href = "record-page.html";
			}

		}
		e.preventDefault();
	}
	document.getElementById('lgform').addEventListener('submit', saveUsers);













/*document.getElementById('register').addEventListener('submit', saveUsers);

function saveUsers(e){
	var name = document.getElementById('un').value;
	var userEmail = document.getElementById('email').value;
	var pass = document.getElementById('password').value;

	var credentials = [{
		username: name,
		email: userEmail,
		password: pass
	}];


	console.log(credentials);
}*/
