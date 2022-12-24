let player = document.querySelector("#player");
let enemy = document.querySelector("#enemy");
let score = document.querySelector("#score");

var rand;

function load() {
	rand = Math.floor(Math.random() * (4 - 1)) + 1;

	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");

	if (rand === 1) {
		enemy.innerHTML = "<img src='papier.jpg'/>";
	} else if (rand === 2) {
		enemy.innerHTML = "<img src='kamien.jpg'/>";
	} else enemy.innerHTML = "<img src='nozyce.jpg'/>";
}

function rock() {
	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");
	player.innerHTML = "<img src='kamien.jpg'/>";

	if (rand === 1) {
		score.innerHTML = "przegrałeś";
	} else if (rand === 2) score.innerHTML = "remis";
	else score.innerHTML = "wygrałeś";
}

function scissors() {
	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");
	player.innerHTML = "<img src='nozyce.jpg'/>";

	if (rand === 1) {
		score.innerHTML = "wygrałeś";
	} else if (rand === 2) score.innerHTML = "przegrałeś";
	else score.innerHTML = "remis";
}

function paper() {
	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");
	player.innerHTML = "<img src='papier.jpg'/>";

	if (rand === 1) {
		score.innerHTML = "remis";
	} else if (rand === 2) score.innerHTML = "wygrałeś";
	else score.innerHTML = "przegrałeś";
}
