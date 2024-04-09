/**
 * @name Unused Darker Theme
 * @version 1.0
 * @description Enables the **Discord desktop's hidden Darker theme**. This feature exists but is not available. This plugin fixes that (pretty easily). This is not a CSS theme because it does an HTML injection; the CSS is already provided by Discord. How does it work? It simply adds "theme-darker" to the body's class name.
 * @author SkyVerseMc
 * @source https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/plugins/EnableDarkerTheme.plugin.js
 * @updateUrl https://raw.githubusercontent.com/SkyVerseMc/Discord-Hidden-Themes/main/plugins/EnableDarkerTheme.plugin.js
 */
 
module.exports = class EnableDarker {
	
	start() {
		document.body.className = "theme-darker";
	}

	stop() {
		document.body.className = "";
    }
}