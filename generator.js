
document.getElementById("generate").addEventListener("click", function(){
	var value = document.getElementById("name").value;
	var char = value.charAt(0).toUpperCase();
	document.getElementById("inner").innerHTML = char;
});