import request from "requestv2/index";

function removePreviousTags(name) {
	var array = name.split(" ");
	return array[array.length-1]
}

function sendToDiscord(player, cookieAmount, webhookLink) {
	
	if (!webhookLink) { ChatLib.chat("&cThere is no webhook link setup in the config! Do /hcookies to set that up!"); return }

	request({
		url: webhookLink,
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"User-Agent": "Mozilla/5.0",
		},
		body: {
			username: "Cookie Logger",
			content: " ",
			embeds: [
				{
					title: player + " gave cookies!",
					color: 0xFF0000,
					thumbnail: {
						url: "https://mc-heads.net/player/" + removePreviousTags(player)
					},
					description: player + " gave __" + cookieAmount + " cookies__!",
					footer: {
						text: " ",
					},
					fields: [],
				},
			],
		},
	}).catch((err) => {
		ChatLib.chat("&cAn error occured!")
		ChatLib.chat(err)
		console.log("Discord Webhook error:", err);
	});
}

module.exports = {
	sendToDiscord
}
