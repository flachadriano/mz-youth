function playerAtribChange(checkbox, playerId) {
	data = {player: {}};
	data.player[checkbox.name] = checkbox.checked;

	$.ajax({
		type: "PUT",
		dataType: "json",
		url: "players/"+playerId+".json",
		data: data
	});
}