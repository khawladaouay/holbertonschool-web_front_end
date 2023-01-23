function changeMode(size, weight, transform, background, color){
	return function (){
		document.body.style.fontSize = size + 'px';
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}
	function main(){
		let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
		let darkMode = changeMode(12, "bold", "capitalize", "black", "white", "white");
		let screamMode = changeMode(12, "noemal", "lowercase", "white", "black");
		
		let p = document.createElement("p");
		p.textContent = "Welcome Holberton!";
		document.body.appendChild(p);

		let buttonSpooky = document.createElement("button");
		buttonSpooky.textContent = "Spooky";
		buttonSpooky.addEventListener("click", spooky);
		document.body.appendChild(buttonSpooky);

		let buttonDark = document.createElement("button");
		buttonDark.textContent = "Dark mode";
		buttonDark.addEventListener("click", darkMode);
		document.body.appendChild(buttonDark);

		let buttonScream = document.createElement("button");
		buttonScream.textContent = "Scream mode";
		buttonScream.addEventListener("click", screamMode);
		document.body.appendChild(buttonScream);
	}
	main();
