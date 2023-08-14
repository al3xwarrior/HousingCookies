import Settings from "./Settings";
import { sendToDiscord } from "./discordwebhook";

function cookies(amount, rank, player) {
	if (!Settings.moduleEnabled) { return }
	if (!TabList.getFooter().includes("You are in")) { return }
	
	var command = Settings.cookieCommand;
	var commandReplacePlaceholders = command.replace("%player%", player);
	
	setTimeout(() => {
		ChatLib.command(commandReplacePlaceholders);
	}, 350);	
	
	if (Settings.discordLogger) {
		sendToDiscord(player, amount, Settings.webhookLink)
	}
}


register("chat", (amount, rank, player, event) => {
	cookies(amount, rank, player)
}).setCriteria("You received ${amount} cookies from ${rank} ${player}!");

register("chat", (amount, rank, player, event) => {
	cookies(amount, "", player)
}).setCriteria("You received ${amount} &ecookies from ${player}!");

register("command", () => Settings.openGUI()).setName("hcookies");


ChatLib.chat("&a&lHousingCookies Loaded! &8(&f/hcookies&8)")

