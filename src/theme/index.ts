import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const {
	primaryLight,
	primary,
	primaryDark,
	background,
	secondary,
	error,
} = colors;

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
			main: primary,
			dark: primaryDark,
		},
		secondary: {
			main: secondary,
		},
		error: {
			main: error,
		},
		background: {
			default: background,
		},
	},
	overrides: {
		MuiInput: {
			underline: {
				'&:hover:not($disabled):not($focused):not($error):before': {
					borderBottom: `1px solid ${primary}`,
				},
			},
		},
	},
});

export default theme;
