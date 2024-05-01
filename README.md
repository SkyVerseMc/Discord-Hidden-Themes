<h1>Hidden Discord Themes
<img align="right" src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" alt="Discord" height="50" width="50"/>
</h1>

Discord has 2 main themes: a light one and a dark one.

You are probably familiar with the "AMOLED optimized mode" theme on Android devices, recently renamed "Midnight".
But did you know that the desktop version also includes this theme in its files ? In fact, there is two "secret" themes in the desktop version.

Here's how to enable the Midnight and Darker themes:

Both of these themes can be enabled by adding "theme-&lt;name&gt;" in the body class name. Unless Nitro themes, which are just small style injections directly in the page, these themes have a complete color palette in Discord's assets.

The style properties in the css files in this repo are just isolated parts of Discord's style sheets.

## Midnight theme

![preview](https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/preview/midnight.png?raw=true)

Example :
```js
document.body.className = "theme-midnight";
```
**CSS:** [Here](https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/midnight.css)<br>
<img src="https://betterdiscord.app/resources/branding/logo_small.svg" alt="BD" height="15" width="15"/> **Plugin**: [Here](https://raw.githubusercontent.com/SkyVerseMc/Discord-Hidden-Themes/main/plugins/EnableMidnightTheme.plugin.js)


## Darker theme

![preview](https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/preview/darker.png?raw=true)

Injection example script :
```js
document.body.className = "theme-darker";
```
**CSS:** [Here](https://github.com/SkyVerseMc/Discord-Hidden-Themes/blob/main/darker.css)<br>
<img src="https://betterdiscord.app/resources/branding/logo_small.svg" alt="BD" height="15" width="15"/> **Plugin**: [Here](https://raw.githubusercontent.com/SkyVerseMc/Discord-Hidden-Themes/main/plugins/EnableDarkerTheme.plugin.js)
