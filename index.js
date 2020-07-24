function formAutenticator() {
	passwordCheck();
}

function passwordCheck() {
	let password = document.getElementById("pwd").value;
	let rePassword = document.getElementById("rePwd").value;

	if (password === rePassword) {
		return alert("Tudo bem senhas corretas.");
	} else {
		return alert("As senhas não são compátiveis");
	}
}
