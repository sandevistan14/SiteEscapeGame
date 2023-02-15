function Password() {
    var password = document.getElementById("password").value;
    var confirmPassword = "1234";
    passwordInput.addEventListener("keydown", function (event) { 
        if (event.key == "Enter") {
            if (password != confirmPassword) {
                alert("Ce n'est pas le bon mot de passe");
                return false;
            }
            document.location.href = "asset/html/niveau2.html";
            return true;
        }
    });
}
