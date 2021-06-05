function shoeTips(spanId, tips) {
	var span = document.getElementById(spanId);
	span.innerHTML = tips;
}
/**
 * 校验用户名
 */
function hint() {
	var value = document.getElementById("value").value;
	var hint = document.getElementById("hint");
	if(value.length < 6) {
		hint.innerHTML = "用户名太短";
		return false;
	} else {
		hint.innerHTML = "用户名合格";
		return true;
	}
}
 
function hint_hide() {
	var hint = document.getElementById("hint");
	hint.innerHTML = "";
}
/**
 * 校验密码
 */
 
function checkPass() {
	var value = document.getElementById("pass_value").value;
	var hint = document.getElementById("pass_hint");
	if(value.length < 6) {
		hint.innerHTML = "密码太短";
		return false;
	} else {
		hint.innerHTML = "密码格式合格";
		return true;
	}
}
 
function pass_hide() {
	var hint = document.getElementById("pass_hint");
	hint.innerHTML = "";
}
/***
 * 确认密码的校验
 */
function checkPassPass() {
	var papavalue = document.getElementById("passpass_value").value;
	var value = document.getElementById("pass_value").value;
	var papahint = document.getElementById("passpass_hint");
	if(papavalue != value) {
		papahint.innerHTML = "两次密码不一致";
		return false;
	} else {
		papahint.innerHTML = "";
		return true;
	}
}
 
function passpass_hide() {
	var papahint = document.getElementById("passpass_hint");
	papahint.innerHTML = "";
}
/**
 * 校验邮箱
 */
function checkEmail(strEmail) 
{      
    var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if ( emailReg.test(strEmail) ) {
        return true;
    }
    else {
//      alert("您输入的Email地址格式不正确！");
        return false;
    }
};
function emailCheck() {
	var emailValue = document.getElementById("email").value;
	var email_hint = document.getElementById("email_hint");
	var flag = checkEmail(emailValue);
	if(flag) {
		email_hint.innerHTML = "邮箱格式正确";
		return true;
	} else {
		email_hint.innerHTML = "邮箱格式错误";
		return false;
	}
}
 
function emailHide() {
	var email_hint = document.getElementById("email_hint");
	email_hint.innerHTML = "";
}
/**
 * 校验手机号
 */
function checkMobile( strMobile )
{	//13588888888
    var regu = /^[1][345678][0-9]{9}$/;
    var re = new RegExp(regu);
    if (re.test(strMobile)) {
        return true;
    }
    else {
        return false;
    }
};
function phoneCheck() {
	var phone = document.getElementById("phone").value;
	var phone_hint = document.getElementById("phone_hint");
	var flag = checkMobile(phone);
	if(flag) {
		phone_hint.innerHTML = "手机号格式正确";
		return true;
	} else {
		phone_hint.innerHTML = "手机号格式错误";
		return false;
	}
}
 
function phoneHide() {
	var phone_hint = document.getElementById("phone_hint");
	phone_hint.innerHTML = "";
}
 
function checkForm() {
	var flag = emailCheck() && checkPass() && checkPassPass() && hint() && phoneCheck();
	return flag;
}
