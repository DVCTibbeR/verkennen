inputTeams = document.getElementById('input-teams');

let matchStarted = false;

let	teamHistory = [  ];

function start(event){
	matchStarted = true;

	let servingTeam = document.querySelector("input:checked").id;
	let counterTeam = servingTeam.replace("serving", "counter");

	document.querySelector(`#${counterTeam}`).classList.add("serving");
	document.querySelector("#input-teams").style.display = "none";

	teamHistory.push({ servingTeam: servingTeam, teamA: 0, teamB: 0 });
}
startButton.addEventListener('click',start);

function count(event){
	if (!matchStarted) return;

	let element = event.srcElement;

	element.textContent = parseInt(element.textContent) + 1;

	console.log(element.textContent);

	if (element.id === "counterTeam1") {
		counterTeam2.classList.remove("serving");
		counterTeam1.classList.add("serving");
	} else {
		counterTeam1.classList.remove("serving");
		counterTeam2.classList.add("serving");
	}

	teamHistory.push({ servingTeam: element.id.replace("counter", "serving"), teamA: parseInt(counterTeam1.textContent), teamB: parseInt(counterTeam2.textContent) });

	console.log(teamHistory);
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event) {
	nameTeam1.textContent = inputTeam1.value || "...";
	nameTeam2.textContent = inputTeam2.value || "...";
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);


function undo(event){
	if (!matchStarted) return;

	if (servingTeams[servingTeams.length - 2] === "servingTeam1") {
		counterTeam2.textContent = parseInt(counterTeam2.textContent) - 1;

		counterTeam2.classList.remove("serving");
		counterTeam1.classList.add("serving");
	} else {
		counterTeam1.textContent = parseInt(counterTeam1.textContent) - 1;

		counterTeam1.classList.remove("serving");
		counterTeam2.classList.add("serving");
	}

	servingTeams = servingTeams.splice(0, servingTeams.length);

	console.log(servingTeams);
}
undoButton.addEventListener('click',undo);