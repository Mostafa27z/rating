let rate = document.getElementsByClassName('rate');
let val = 0;
function sel(id) {
	for (var i = 0; i < rate.length; i++) {
		rate[i].style.backgroundColor = "hsl(213, 19%, 18%)";
		rate[i].style.color = "hsl(217, 12%, 63%)";
	}
	rate[id-1].style.backgroundColor = "hsl(25, 97%, 53%)";
	rate[id-1].style.color = "white";
	val = id;
}
function sub() {
	if(val ==0){
		alert("please rate us");
	}
	else{
		document.getElementById('rt').innerText=val;
		document.getElementsByClassName("cont2")[0].style.display="block";
		document.getElementsByClassName("cont")[0].style.display="none";
	}
}