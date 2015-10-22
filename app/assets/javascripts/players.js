function playerAtribChange(checkbox, playerId) {
	data = {player: {}};
	data.player[checkbox.name] = checkbox.checked;

	if (checkbox.name === 'sell') {
		var el = document.getElementById('player-' + playerId);
		if (checkbox.checked) {
			el.className = el.className + ' sell';
		} else {
			el.className = el.className.replace(' sell', '');
		}
	}

	$.ajax({
		type: "PUT",
		dataType: "json",
		url: "players/"+playerId+".json",
		data: data
	});
}
