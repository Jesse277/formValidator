//get element
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

//show error
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    var small = formControl.querySelector("small");
    small.innerText = message

}
//show success
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";

}
//get keywords
function getKeywords(input) {
    return input.placeholder.slice(3);
}
//check if items are required
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getKeywords(input)}为必填项`);
        } else {
            showSuccess(input);
        }
    });
}
//check if the length is okay
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getKeywords(input)}至少${min}个字符`);
    } else if (input.value.length > max) {
        showError(input, `${getKeywords(input)}最多${max}个字符`);
    } else {
        showSuccess(input);
    }
}
//check if email is valid
function checkEmail(input) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "邮箱格式错误");
    }
}
//check password match
function checkPwdsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "密码不匹配");
    }
}

//add event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 12);
    checkEmail(email);
    checkPwdsMatch(password, password2);
});