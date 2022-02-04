var account, password, accountError, passwordError, againPw;
function init() {
	account=document.getElementById("registerAccount");
	password=document.getElementById("registerPassword");
	accountError=document.getElementById("accountError");
	passwordError=document.getElementById("passwordError");
	againPw=document.getElementById("rPwAgain");
	/*
	accountError.style.color="red";
	passwordError.style.color="red";
	*/
	//alert(account);
}
var accountFormat = /^[0-9a-zA-Z]{6,14}$/;
var able = false;
function myBlur() {
	//alert("blur");
	var accountA = accountFormat.test(account.value),
		passwordA = password.value==againPw.value;
	if(!accountA) {
		accountError.innerText="不符合格式，账号应用纯字母数字组合且为6-14位";
	}
	else {
		accountError.innerText="";
	}
	if(!passwordA) {
		passwordError.innerText="密码不一致";
	}
	else{
		passwordError.innerText="";
	}
	if(accountA&&passwordA) {
		able=true;
	}
	
}
