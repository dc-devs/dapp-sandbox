import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { textColors, defaultColors } from './colors';

const {
	errorMain,
	primaryLight,
	primaryMain,
	primaryDark,
	secondaryMain,
	backgroundDefault,
} = defaultColors;

const { primaryText } = textColors;

const theme = createMuiTheme({
	typography: {
		fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		body1: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
		body2: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
	},
	palette: {
		primary: {
			light: primaryLight,
			main: primaryMain,
			dark: primaryDark,
		},
		secondary: {
			main: secondaryMain,
		},
		error: {
			main: errorMain,
		},
		background: {
			default: backgroundDefault,
		},
		text: {
			primary: primaryText,
		},
	},
	overrides: {
		MuiInput: {
			underline: {
				'&:hover:not($disabled):not($focused):not($error):before': {
					borderBottom: `1px solid ${primaryMain}`,
				},
			},
		},
	},
});

export default theme;
