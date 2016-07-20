'use strict';

// Default colors
const black = '#282a2d';
const red = '#a54242';
const green = '#8c9440';
const yellow = '#de935f';
const blue = '#5f819d';
const magenta = '#85678f';
const cyan = '#5e8d87';
const white = '#707880';

// Bright colors
const brightBlack = '#373b41';
const brightRed = '#cc6666';
const brightGreen = '#b5bd68';
const brightYellow = '#f0c674';
const brightBlue = '#81a2be';
const brightMagenta = '#b294bb';
const brightCyan = '#8abeb7';
const brightWhite = '#c5c8c6';

// General colors
const foregroundColor = '#c5c8c6';
const backgroundColor = '#1d1f21';
const cursorColor = brightWhite;
const borderColor = '#282a2e';

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		colors: [
			// Default colors
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			white,

			// Bright colors
			brightBlack,
			brightRed,
			brightGreen,
			brightYellow,
			brightBlue,
			brightMagenta,
			brightCyan,
			brightWhite
		],
		css: `
			${config.css || ''}


      .tab_active:before {
        border-color: ${white};
      }
		`
	});
};
