/**
 * @name Unused Midnight Theme
 * @version 1.0
 * @description Enables the **Discord desktop's hidden Midnight theme**. This feature exists but is not available. This plugin fixes that (pretty easily). This is not a CSS theme because it does an HTML injection; the CSS is already provided by Discord. How does it work? It simply adds "theme-midnight" to the body's class name.
 * @author SkyVerseMc
 * @source https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/plugins/EnableMidnightTheme.plugin.js
 * @updateUrl https://raw.githubusercontent.com/SkyVerseMc/Discord-Hidden-Themes/main/plugins/EnableMidnightTheme.plugin.js
 */
 
module.exports = class EnableMidnight {
	
	start() {
		document.body.className = "theme-midnight";
	}

	stop() {
		document.body.className = "";
    }
}