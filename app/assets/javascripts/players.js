function playerAtribChange(checkbox, playerId) {
	data = {player: {}};
	data.player[checkbox.name] = checkbox.checked;

	if (checkbox.name === 'sell') {
		updatePlayerClass(playerId, ' sell', checkbox.checked);
	} else if (checkbox.name === 'session_one') {
		updatePlayerClass(playerId, ' tc', checkbox.checked);
	}

	$.ajax({
		type: "PUT",
		dataType: "json",
		url: "players/"+playerId+".json",
		data: data
	});
}

function updatePlayerClass(playerId, cssClass, checked) {
	var el = document.getElementById('player-' + playerId);
	if (checked) {
		el.className = el.className + cssClass;
	} else {
		el.className = el.className.replace(cssClass, '');
	}
}
