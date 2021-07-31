function isValid(){

	var firstName = document.forms["registrationForm"]["firstName"].value;
	var lastName = document.forms["registrationForm"]["lastName"].value;
	var dob = document.forms["registrationForm"]["dob"].value;
	var gender = document.forms["registrationForm"]["gender"].value;
	var religion = document.forms["registrationForm"]["religion"].value;
	var email = document.forms["registrationForm"]["email"].value;
	var userName = document.forms["registrationForm"]["userName"].value;
	var password = document.forms["registrationForm"]["password"].value;

	var flag = true;

///////////////*****FIRST NAME*****

	if (firstName == "") {
		document.getElementById('firstNameErr').innerHTML = 'field cannot be empty';
		flag = false;
	}
	else{

		document.getElementById('firstNameErr').innerHTML = '';
	}

///////////////*****LAST NAME*****

	if (lastName == "") {
		document.getElementById('lastNameErr').innerHTML = 'field cannot be empty';
		flag = false;
	}
	else{

		document.getElementById('lastNameErr').innerHTML = '';
	}

///////////////*****DOB*****

	if (dob == "") {
		document.getElementById('dobErr').innerHTML = 'field cannot be empty';
		flag = false;
	}
	else{

		document.getElementById('dobErr').innerHTML = '';
	}

///////////////*****GENDER*****

	if (gender == "") {
		document.getElementById('genderErr').innerHTML = 'please select your gender';
		flag = false;
	}
	else{

		document.getElementById('genderErr').innerHTML = '';
	}

///////////////*****RELIGION*****

	if (religion == "") {
		document.getElementById('religionErr').innerHTML = 'please select your religion';
		flag = false;
	}
	else{

		document.getElementById('religionErr').innerHTML = '';
	}

///////////////*****EMAIL*****

	if (email == "") {
		document.getElementById('emailErr').innerHTML = 'field cannot be empty';
		flag = false;
	}
	else{

		document.getElementById('emailErr').innerHTML = '';
	}

///////////////*****USERNAME*****

	if (userName == "") {
		document.getElementById('userNameErr').innerHTML = 'field cannot be empty';
		flag = false;
	}
	else{

		if (userName.length < 3) {
			document.getElementById('userNameErr').innerHTML = 'username minimum 3 characters';
			flag = false;
		}
		else if (userName.length > 8){
			document.getElementById('userNameErr').innerHTML = 'username maximum 8 characters';
			flag = false;
		}
		else{
			document.getElementById('userNameErr').innerHTML = '';
		}

	}


///////////////*****PASSWORD*****

	if (password == "") {
		document.getElementById('passwordErr').innerHTML = 'field cannot be empty';
		flag = false;

	}
	else{

		if (password.length < 4) {
			document.getElementById('passwordErr').innerHTML = 'password minimum 5 characters';
			flag = false;
		}
		else if (password.length > 8){
			document.getElementById('passwordErr').innerHTML = 'password maximum 8 characters';
			flag = false;
		}
		else{
			document.getElementById('passwordErr').innerHTML = '';
		}

	}

	return flag;
}