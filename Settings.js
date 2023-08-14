import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("HousingCookies")
class Settings {
	
	@SwitchProperty({
        name: "Enabled",
        description: "Should the module be enabled and testing for cookie messages?",
        category: "Settings"
    })
    moduleEnabled = false;
	
	@ParagraphProperty({
        name: "Command",
        description: "Insert the command without the '/' you want to be ran when a player gave a cookie! \n\nIn the command write %player% where you want the players name to be, for example 'thanks %player%' would run '/thanks Al3xWarrior'",
		category: "Settings"
    })
    cookieCommand = "thanks %player%"
	
	@SwitchProperty({
        name: "Discord Logger",
        description: "Should the module logging cookies to discord?",
        category: "Logger"
    })
    discordLogger = false;
	
	@TextProperty({
        name: "Webhook Link",
        description: "Paste the Discord Webhook Link that coresponds to the channel you want logs of the punishments to be.",
        category: "Logger",
        placeholder: "Paste your Discord Webhook Link here!",
		protected: true
    })
    webhookLink = "";
	

    constructor() {
        this.initialize(this);
    }
}

export default new Settings();