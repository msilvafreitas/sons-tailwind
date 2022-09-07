let data;

document.addEventListener("DOMContentLoaded", function(e) {

	async function getDataAsync() {
		let response = await fetch('players.json');
		data = await response.json();
		return data;
	}

	getDataAsync()
		.then(data => loadMainDiv());
});

function loadMainDiv() {

	for (let i = 0; i < data.length; i++) {

		// Inject HTML into Main DIV
		document.getElementById('players').innerHTML += '<div class="p-4"> <div class="bg-green p-4"> <div class="font-kumar font-xl">' + data[i].name + '</div> </div> <div class="cd-main"> ' + data[i].position + ' </div> <div class="cd-bottom"> <div class="cd-b-age">' + data[i].age + ' years</div></div>';




	};


}


