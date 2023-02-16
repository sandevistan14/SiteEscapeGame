function EnterPressed() {
    var key = window.event.keyCode;
    if (key == 13) {
        Password();
    }
}

function Password() {
    var password = document.getElementById("password").value;
    var confirmPassword = "1234";
    if (password != confirmPassword) {
        alert("Ce n'est pas le bon mot de passe");
        return false;
    }
    document.location.href = "asset/html/niveau2.html";
    return true;
}
