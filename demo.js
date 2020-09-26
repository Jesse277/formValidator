//get element
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

//show error
function showErrorMessage(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.getElementsByTagName('small')[0].innerText = message;

}
//show success
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";

}
//check if email is valid
function checkEmail(input) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(input);

}
//add event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (username.value === "") {
        showErrorMessage(username, "用户名为必填项");
    } else if (username.value.length < 4 || username.value.length > 15) {
        showErrorMessage(username, "用户名长度必须在4-15之间");
    } else {
        showSuccess(username);
    }
    if (email.value === "") {
        showErrorMessage(email, "邮箱为必填项");
    } else if (!checkEmail(email.value)) {
        showErrorMessage(email, "邮箱格式错误")
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showErrorMessage(password, "密码为必填项");
    } else if (password.value.length < 6 || password.value.length > 12) {
        showErrorMessage(password, "密码长度必须在4-15之间");
    } else {
        showSuccess(password);
    }
    if (password2.value === "") {
        showErrorMessage(password2, "确认密码为必填项");
    } else if (password.value !== password2.value) {
        showErrorMessage(password2, "密码不一致")
    } else {
        showSuccess(password2);
    }
});