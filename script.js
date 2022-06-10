function insert(num) {
	document.form.textbox.value = document.form.textbox.value + num;
}

function equals() {
	var txt = document.form.textbox.value;
	if (txt) document.form.textbox.value = eval(txt);
	else document.form.textbox.value = "ERROR";
}

function clean() {
	document.form.textbox.value = "";
}

function back() {
	var txt = document.form.textbox.value;
	document.form.textbox.value = txt.substring(0, txt.length - 1);
}
