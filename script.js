let player = document.querySelector("#player");
let enemy = document.querySelector("#enemy");
let score = document.querySelector("#score");

let i = 0;
let y = 0;

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
		score.innerHTML = y++;
		score.innerHTML = i + "-" + y + "<br/>" + "przegrałeś";
	} else if (rand === 2) {
		score.innerHTML = i + "-" + y + "<br/>" + "remis";
	} else {
		i++;
		score.innerHTML = i + "-" + y + "<br/>" + "wygrałeś";
	}
}

function scissors() {
	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");
	player.innerHTML = "<img src='nozyce.jpg'/>";

	if (rand === 1) {
		i++;
		score.innerHTML = i + "-" + y + "<br/>" + "wygrałeś";
	} else if (rand === 2) {
		y++;
		score.innerHTML = i + "-" + y + "<br/>" + "przegrałeś";
	} else score.innerHTML = i + "-" + y + "<br/>" + "remis";
}

function paper() {
	let player = document.querySelector("#player");
	let enemy = document.querySelector("#enemy");
	player.innerHTML = "<img src='papier.jpg'/>";

	if (rand === 1) {
		score.innerHTML = i + "-" + y + "<br/>" + "remis";
	} else if (rand === 2) {
		i++;
		score.innerHTML = i + "-" + y + "<br/>" + "wygrałeś";
	} else {
		y++;
		score.innerHTML = i + "-" + y + "<br/>" + "przegrałeś";
	}
}
